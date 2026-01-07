"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function HomeContact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    channel: "",
    plan: "consulting", // default plan
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({
          name: "",
          phone: "",
          channel: "",
          plan: "consulting",
          message: ""
        });
        // Reset success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-slate-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-medium placeholder:text-gray-400";
  const labelClasses = "block text-sm font-bold mb-2 text-gray-700";

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-4 text-slate-900"
            >
              문의하기
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg"
            >
              성장을 위한 첫 걸음, 지금 바로 시작하세요.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>업체명 / 성함 <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    className={inputClasses}
                    placeholder="입력해주세요"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className={labelClasses}>연락처 <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    className={inputClasses}
                    placeholder="010-0000-0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>운영중인 채널명</label>
                  <input 
                    type="text" 
                    className={inputClasses}
                    placeholder="유튜브, 인스타그램 등 (선택사항)"
                    value={formState.channel}
                    onChange={(e) => setFormState({...formState, channel: e.target.value})}
                  />
                </div>
                <div>
                  <label className={labelClasses}>플랜 선택 <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      className={`${inputClasses} appearance-none cursor-pointer`}
                      value={formState.plan}
                      onChange={(e) => setFormState({...formState, plan: e.target.value})}
                    >
                      <option value="consulting">1:1 컨설팅</option>
                      <option value="production">기획 + 편집 (최소 10개부터)</option>
                      <option value="other">기타 문의</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClasses}>문의 내용</label>
                <textarea 
                  className={`${inputClasses} h-32 resize-none`}
                  placeholder="고민, 목표 등 (급한 일정 또는 즉시 착수가 필요한 경우 상세히 적어주시면 우선 검토하겠습니다)"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 ${
                  isSuccess 
                    ? "bg-green-500 text-white hover:bg-green-600 shadow-green-500/30" 
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30"
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    접수되었습니다
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    문의하기
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
