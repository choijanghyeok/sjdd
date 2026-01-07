"use client";

import { Check, ArrowRight, BookOpen, Star, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 container mx-auto text-center bg-white relative overflow-hidden">
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-[100%] blur-[80px] pointer-events-none animate-pulse" />

        <div className="relative z-10 inline-block bg-blue-50 border border-blue-100 text-primary px-5 py-2 rounded-full font-bold mb-6 text-sm tracking-wide shadow-sm">
          ACADEMY
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
          누구나 따라 할 수 있는 <br />
          <span className="text-primary relative inline-block">
            실전 마케팅
            <svg className="absolute w-full h-3 bottom-2 left-0 -z-10 opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span> 클래스
        </h1>
        <p className="relative z-10 text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          어려운 이론은 뺍니다. 당장 써먹을 수 있는 기술만 담았습니다.<br />
          왕초보부터 예비 창업자까지, 내 단계에 맞는 교육을 선택하세요.
        </p>
        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105"
        >
          무료 상담 받고 레벨 추천받기 <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>

      {/* Curriculum Levels */}
      <section className="py-24 container mx-auto px-4 bg-slate-50/50">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">단계별 커리큘럼</h2>
        <p className="text-gray-500 text-center mb-16 font-medium">내 상황에 딱 맞는 강의를 찾아보세요.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Level 1 */}
          <div className="border border-gray-200 bg-white rounded-3xl p-8 shadow-md hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-slate-100 text-gray-500 font-bold px-3 py-1 rounded-full w-fit mb-4 text-xs tracking-wide">Level 1</div>
            <h3 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-primary transition-colors">마케팅 왕초보 입문</h3>
            <p className="text-gray-500 mb-8 font-medium">SNS 계정 만드는 법부터 릴스/숏츠 기본 문법까지.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3"><div className="bg-slate-50 p-1 rounded-full"><Check className="text-gray-400 w-4 h-4"/></div> <span className="text-gray-600 font-medium">숏폼 플랫폼 이해</span></div>
              <div className="flex items-center gap-3"><div className="bg-slate-50 p-1 rounded-full"><Check className="text-gray-400 w-4 h-4"/></div> <span className="text-gray-600 font-medium">스마트폰 촬영/편집 기초</span></div>
              <div className="flex items-center gap-3"><div className="bg-slate-50 p-1 rounded-full"><Check className="text-gray-400 w-4 h-4"/></div> <span className="text-gray-600 font-medium">조회수 터지는 제목 짓기</span></div>
            </div>
            <Link href="/contact" className="block text-center py-3 rounded-xl bg-slate-50 text-gray-500 font-bold hover:bg-slate-100 transition border border-gray-200 hover:border-gray-300">수강 신청하기</Link>
          </div>

          {/* Level 2 */}
          <div className="border-2 border-primary bg-white rounded-3xl p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 relative z-10">
             <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-[20px] tracking-wide">POPULAR</div>
            <div className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-full w-fit mb-4 text-xs tracking-wide border border-blue-100">Level 2</div>
            <h3 className="text-2xl font-black mb-3 text-primary">수익화 실전 마케팅</h3>
            <p className="text-gray-500 mb-8 font-medium">팔로워를 고객으로 만드는 전환 설계의 모든 것.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3"><div className="bg-blue-50 p-1 rounded-full"><Check className="text-primary w-4 h-4"/></div> <span className="text-gray-800 font-bold">판매를 부르는 글쓰기</span></div>
              <div className="flex items-center gap-3"><div className="bg-blue-50 p-1 rounded-full"><Check className="text-primary w-4 h-4"/></div> <span className="text-gray-800 font-bold">프로필/상세페이지 세팅</span></div>
              <div className="flex items-center gap-3"><div className="bg-blue-50 p-1 rounded-full"><Check className="text-primary w-4 h-4"/></div> <span className="text-gray-800 font-bold">고객 심리 3단계 공략</span></div>
            </div>
            <Link href="/contact" className="block text-center py-3 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 transition shadow-md hover:scale-105 transform duration-200">수강 신청하기</Link>
          </div>

          {/* Level 3 */}
          <div className="border border-gray-200 bg-white rounded-3xl p-8 shadow-md hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-slate-100 text-gray-900 font-bold px-3 py-1 rounded-full w-fit mb-4 text-xs tracking-wide">Level 3</div>
            <h3 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-primary transition-colors">사업 확장 & 브랜딩</h3>
            <p className="text-gray-500 mb-8 font-medium">스마트스토어, 개인 브랜딩으로 사업 확장하기.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3"><div className="bg-slate-50 p-1 rounded-full"><Check className="text-gray-700 w-4 h-4"/></div> <span className="text-gray-600 font-medium">광고 집행 및 성과 분석</span></div>
              <div className="flex items-center gap-3"><div className="bg-slate-50 p-1 rounded-full"><Check className="text-gray-700 w-4 h-4"/></div> <span className="text-gray-600 font-medium">퍼스널 브랜딩 전략</span></div>
              <div className="flex items-center gap-3"><div className="bg-slate-50 p-1 rounded-full"><Check className="text-gray-700 w-4 h-4"/></div> <span className="text-gray-600 font-medium">자동화 수익 모델 구축</span></div>
            </div>
            <Link href="/contact" className="block text-center py-3 rounded-xl bg-slate-100 text-gray-600 font-bold hover:bg-slate-200 transition border border-gray-200">수강 신청하기</Link>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">수강생 리얼 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "김OO님 (카페 운영)", txt: "마케팅 1도 몰랐는데, 배운 대로 릴스 올렸더니 문의가 3배 늘었어요!" },
              { name: "이OO님 (예비 창업)", txt: "다른 강의들은 이론만 알려주는데 여기는 진짜 따라할 수 있게 알려줘요." },
              { name: "박OO님 (쇼핑몰)", txt: "상세페이지 문구 하나 바꿨는데 구매 전환율이 확 달라졌습니다." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
                <div className="flex text-primary mb-4 gap-1">
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                </div>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">"{review.txt}"</p>
                <div className="font-bold text-gray-900 text-sm">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
