"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Reference } from "@/lib/types";
import { Trash2, Edit, Upload, Plus, X, Loader2 } from "lucide-react";

export default function ReferenceForm() {
  const [references, setReferences] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    category: "",
    is_public: true
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchReferences();
  }, []);

  const fetchReferences = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('references')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching references:', error);
      alert('데이터를 불러오는데 실패했습니다.');
    } else {
      setReferences(data || []);
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, is_public: e.target.checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('reference-thumbs')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('reference-thumbs')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.category) {
      alert("제목과 카테고리는 필수입니다.");
      return;
    }

    try {
      setUploading(true);
      let thumb_url = "";

      // If editing and no new file, keep existing thumb_url (logic handled below)
      // If new file, upload it
      if (file) {
        const url = await uploadImage(file);
        if (url) thumb_url = url;
      }

      const payload: any = {
        title: formData.title,
        description: formData.description,
        link: formData.link,
        category: formData.category,
        is_public: formData.is_public,
      };

      if (thumb_url) {
        payload.thumb_url = thumb_url;
      }

      if (isEditing && editId) {
        const { error } = await supabase
          .from('references')
          .update(payload)
          .eq('id', editId);
        
        if (error) throw error;
        alert("수정되었습니다.");
      } else {
        const { error } = await supabase
          .from('references')
          .insert([payload]);
        
        if (error) throw error;
        alert("추가되었습니다.");
      }

      // Reset form
      setFormData({ title: "", description: "", link: "", category: "", is_public: true });
      setFile(null);
      setIsEditing(false);
      setEditId(null);
      fetchReferences();

    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(`오류가 발생했습니다: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (ref: Reference) => {
    setFormData({
      title: ref.title,
      description: ref.description || "",
      link: ref.link || "",
      category: ref.category || "",
      is_public: ref.is_public
    });
    setEditId(ref.id);
    setIsEditing(true);
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    const { error } = await supabase
      .from('references')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting:", error);
      alert("삭제 실패");
    } else {
      fetchReferences();
    }
  };

  const handleCancel = () => {
    setFormData({ title: "", description: "", link: "", category: "", is_public: true });
    setFile(null);
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Form Section */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          {isEditing ? <Edit className="text-blue-600" /> : <Plus className="text-blue-600" />}
          {isEditing ? "레퍼런스 수정" : "새 레퍼런스 추가"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">제목 *</label>
              <input 
                type="text" 
                name="title"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="예: 뷰티 브랜드 바이럴 영상"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">카테고리 *</label>
              <input 
                type="text" 
                name="category"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="예: Beauty, Fashion, F&B"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">설명</label>
            <textarea 
              name="description"
              rows={3}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="영상에 대한 간단한 설명을 입력하세요."
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">영상 링크 (URL)</label>
            <input 
              type="text" 
              name="link"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="https://youtube.com/..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">썸네일 이미지</label>
              <input 
                type="file" 
                accept="image/*"
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleFileChange}
              />
              {isEditing && !file && (
                <p className="text-xs text-slate-400 mt-1">* 새로운 파일을 선택하지 않으면 기존 이미지가 유지됩니다.</p>
              )}
            </div>
            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="is_public"
                  checked={formData.is_public}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                />
                <span className="text-sm font-bold text-slate-700">공개 여부 (체크 시 홈페이지 노출)</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-100">
            {isEditing && (
              <button 
                type="button" 
                onClick={handleCancel}
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
              >
                취소
              </button>
            )}
            <button 
              type="submit" 
              disabled={uploading}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {uploading ? (
                <>
                  <Loader2 className="animate-spin" /> 처리중...
                </>
              ) : (
                isEditing ? "수정 완료" : "레퍼런스 등록"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold">등록된 레퍼런스 ({references.length})</h3>
        </div>
        {loading ? (
          <div className="p-12 text-center text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
            로딩중...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-bold">
                <tr>
                  <th className="p-4">썸네일</th>
                  <th className="p-4">제목</th>
                  <th className="p-4">카테고리</th>
                  <th className="p-4">상태</th>
                  <th className="p-4 text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {references.map((ref) => (
                  <tr key={ref.id} className="hover:bg-slate-50">
                    <td className="p-4">
                      {ref.thumb_url ? (
                        <img src={ref.thumb_url} alt="" className="w-12 h-16 object-cover rounded bg-slate-200" />
                      ) : (
                        <div className="w-12 h-16 bg-slate-100 rounded flex items-center justify-center text-xs">No Img</div>
                      )}
                    </td>
                    <td className="p-4 font-medium text-slate-900">{ref.title}</td>
                    <td className="p-4"><span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold">{ref.category}</span></td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${ref.is_public ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                        {ref.is_public ? "공개" : "비공개"}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleEdit(ref)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="수정"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(ref.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="삭제"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {references.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-slate-400">등록된 레퍼런스가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
