"use client";

import Link from "next/link";
import { MessageCircle, Phone, Users, Send, MapPin, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    category: "shortform",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          plan: formState.category, // Map category to plan
          channel: "" // Default empty for this form
        }),
      });

      if (response.ok) {
        alert("문의가 접수되었습니다. 빠르게 연락드리겠습니다.");
        setFormState({
          name: "",
          phone: "",
          category: "shortform",
          message: ""
        });
      } else {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="bg-white min-h-screen py-20 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-20">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">무엇을 도와드릴까요?</h1>
          <p className="text-gray-500 text-lg font-medium">가장 편한 방법을 선택해주세요. 빠르게 답변해드립니다.</p>
        </div>

        {/* 3 Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1: Estimate (Kakao) */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-gray-200 hover:border-blue-300 flex flex-col items-center text-center group">
            <div className="bg-blue-50 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform border border-blue-100">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">카카오톡 견적 문의</h3>
            <p className="text-gray-500 mb-6 h-12 font-medium">
              숏폼 제작, 마케팅 대행 견적이 궁금하신가요?
              <br />챗봇과 상담원이 즉시 안내해드립니다.
            </p>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1">
              카카오톡으로 문의하기
            </button>
          </div>

          {/* Card 2: Consultation (Phone) */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-gray-200 hover:border-gray-300 flex flex-col items-center text-center group">
            <div className="bg-gray-50 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform border border-gray-100">
              <Phone className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">마케팅 무료 상담</h3>
            <p className="text-gray-500 mb-6 h-12 font-medium">
              방향을 못 잡겠다면? 전문가와 1:1 상담하세요.
              <br />판매 목적이 아닌, 진단 위주 상담입니다.
            </p>
            <button className="w-full bg-slate-50 text-gray-700 font-bold py-4 rounded-xl hover:bg-slate-100 transition shadow-md hover:shadow-lg hover:-translate-y-1 border border-gray-200">
              무료 상담 예약하기
            </button>
          </div>

          {/* Card 3: Community */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-gray-200 hover:border-blue-300 flex flex-col items-center text-center group">
            <div className="bg-blue-50 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform border border-blue-100">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">단톡방 참여하기</h3>
            <p className="text-gray-500 mb-6 h-12 font-medium">
              최신 마케팅 정보와 노하우를 공유받으세요.
              <br />예비 창업자, 사장님들의 커뮤니티.
            </p>
            <button className="w-full bg-transparent border-2 border-primary text-primary font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              오픈채팅방 입장하기
            </button>
          </div>
        </div>

        {/* Email Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-black mb-6 text-gray-900">이메일 문의</h2>
                    <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                        상세한 제안서가 필요하시거나<br/>
                        협업 제안이 있으시다면 내용을 남겨주세요.<br/>
                        담당자가 24시간 이내에 회신드립니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                <Mail className="w-5 h-5 text-primary"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-bold">czh039@naver.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                <MapPin className="w-5 h-5 text-primary"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Office</p>
                                <p className="font-bold">충청남도 아산시 신창면 순천향로 22</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">이름 / 업체명</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium placeholder:text-gray-400"
                            placeholder="입력해주세요"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">연락처</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium placeholder:text-gray-400"
                            placeholder="010-0000-0000"
                            value={formState.phone}
                            onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">문의 내용</label>
                        <textarea 
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32 resize-none font-medium placeholder:text-gray-400"
                            placeholder="궁금한 내용을 자유롭게 적어주세요"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <Send className="w-5 h-5" />
                        문의하기
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
