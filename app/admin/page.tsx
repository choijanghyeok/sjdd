"use client";

import { useState, useEffect } from "react";
import { Plus, Image, Save, LayoutDashboard, FileVideo, Settings, MessageSquare } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("cases");
  const [cases, setCases] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    category: "F&B",
    metric: "",
    thumbnail: "" // In a real app, handle file upload
  });

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [casesRes, inquiriesRes] = await Promise.all([
          fetch('/api/cases'),
          fetch('/api/inquiries')
        ]);
        
        const casesData = await casesRes.json();
        const inquiriesData = inquiriesRes.ok ? await inquiriesRes.json() : [];

        if (Array.isArray(casesData)) setCases(casesData);
        if (Array.isArray(inquiriesData)) setInquiries(inquiriesData);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!formData.title || !formData.metric) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    try {
      const res = await fetch('/api/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        const newCase = await res.json();
        setCases([...cases, newCase]);
        setFormData({ title: "", category: "F&B", metric: "", thumbnail: "" });
        alert("콘텐츠가 등록되었습니다.");
      }
    } catch (err) {
      console.error('Failed to save case:', err);
      alert("저장에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,87,184,0.5)]"></span>
            Admin
          </h2>
        </div>
        <nav className="px-4 space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
              activeTab === "dashboard" 
                ? "bg-primary-light text-primary shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <LayoutDashboard size={18} /> 대시보드
          </button>
          <button
            onClick={() => setActiveTab("cases")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
              activeTab === "cases" 
                ? "bg-primary-light text-primary shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <FileVideo size={18} /> 성공사례 관리
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
              activeTab === "inquiries" 
                ? "bg-primary-light text-primary shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <MessageSquare size={18} /> 문의 관리
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
              activeTab === "settings" 
                ? "bg-primary-light text-primary shadow-sm" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Settings size={18} /> 설정
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Warning for Demo Mode */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                현재 <strong>데모 모드</strong>로 실행 중일 수 있습니다. Supabase 연결이 확인되지 않으면 데이터가 임시 저장되며, 서버 재시작 시 사라질 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[calc(100vh-4rem)] border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-black text-gray-900">
              {activeTab === "cases" ? "성공사례 관리" : activeTab === "inquiries" ? "문의 관리" : "대시보드"}
            </h1>
            {activeTab === "cases" && (
              <button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
                <Plus size={18} /> 새 사례 등록
              </button>
            )}
          </div>

          {activeTab === "cases" ? (
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50/50">
                <h3 className="font-bold mb-6 text-gray-900 text-lg">새 콘텐츠 등록</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">제목</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all placeholder:text-gray-400"
                      placeholder="예: 강남 카페 매출 200% 상승"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">카테고리</label>
                    <select 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all appearance-none cursor-pointer"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="F&B">F&B</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Education">Education</option>
                      <option value="Health">Health</option>
                      <option value="Professional">Professional</option>
                      <option value="Fashion">Fashion</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">썸네일 이미지</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl h-32 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-primary cursor-pointer transition-all group">
                      <Image size={24} className="mb-2 group-hover:text-primary transition-colors" />
                      <span className="group-hover:text-gray-600 transition-colors">이미지를 드래그하거나 클릭하세요 (데모 버전: 자동 설정됨)</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">핵심 성과 (Metric)</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all placeholder:text-gray-400"
                      placeholder="예: ROAS 400% 달성"
                      value={formData.metric}
                      onChange={(e) => setFormData({...formData, metric: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={handleSubmit}
                    className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Save size={18} /> 저장하기
                  </button>
                </div>
              </div>

              {/* List Mock */}
              <div>
                <h3 className="font-bold mb-6 text-gray-900 text-lg">등록된 콘텐츠 목록</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                        <th className="py-4 px-4">제목</th>
                        <th className="py-4 px-4">카테고리</th>
                        <th className="py-4 px-4">성과</th>
                        <th className="py-4 px-4">상태</th>
                        <th className="py-4 px-4">관리</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {loading ? (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-gray-500">
                            데이터를 불러오는 중입니다...
                          </td>
                        </tr>
                      ) : cases.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-gray-500">
                            등록된 성공사례가 없습니다.
                          </td>
                        </tr>
                      ) : (
                        cases.map((item) => (
                          <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-4 font-bold text-gray-900">{item.title}</td>
                            <td className="py-4 px-4 text-gray-500">{item.category}</td>
                            <td className="py-4 px-4 text-primary font-bold">{item.metric}</td>
                            <td className="py-4 px-4"><span className="bg-primary-light text-primary border border-blue-100 px-2 py-1 rounded text-xs font-bold">게시중</span></td>
                            <td className="py-4 px-4 text-gray-400 cursor-pointer hover:text-primary transition-colors">수정</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeTab === "inquiries" ? (
            <div>
              <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider bg-gray-50">
                      <th className="py-4 px-4">날짜</th>
                      <th className="py-4 px-4">이름/업체</th>
                      <th className="py-4 px-4">연락처</th>
                      <th className="py-4 px-4">플랜/유형</th>
                      <th className="py-4 px-4">상태</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {loading ? (
                       <tr><td colSpan={5} className="p-8 text-center text-gray-500">Loading...</td></tr>
                    ) : inquiries.length === 0 ? (
                       <tr><td colSpan={5} className="p-8 text-center text-gray-500">등록된 문의가 없습니다.</td></tr>
                    ) : (
                      inquiries.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 text-gray-500">{new Date(item.date).toLocaleDateString()}</td>
                          <td className="py-4 px-4 font-bold text-gray-900">
                            {item.name}<br/>
                            <span className="text-xs text-gray-400 font-normal">{item.company}</span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{item.phone}</td>
                          <td className="py-4 px-4">
                            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold border border-blue-100">
                              {item.plan}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${item.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-32 text-gray-400">
              <div className="inline-block p-6 rounded-full bg-gray-50 mb-4">
                <LayoutDashboard size={48} className="opacity-20" />
              </div>
              <p>대시보드 기능 준비 중입니다.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
