"use client";

import Link from "next/link";
import { ArrowRight, Check, Play, Zap, Star, BarChart3, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function ShortformService() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-bold tracking-wide uppercase shadow-sm">
            Agency Service
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-gray-900">
            터지는 숏폼,<br/>
            <span className="text-primary relative inline-block">
              공식이 있습니다.
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-10 opacity-50"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            단순 조회수가 아닌, <span className="text-gray-900 font-bold border-b-2 border-primary/20">실제 구매로 이어지는 영상</span>을 만듭니다.
            <br />기획부터 촬영, 편집, 채널 운영까지 한 번에 해결하세요.
          </p>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
          >
            맞춤 견적 문의하기 <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Portfolio Section (Horizontal Scroll) */}
      <section className="py-20 border-y border-gray-100 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">RECENT WORKS</h2>
            <p className="text-gray-500">조회수가 증명하는 킬러 콘텐츠</p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer shadow-sm">←</div>
            <div className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer shadow-sm">→</div>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 px-4 container mx-auto snap-x snap-mandatory scrollbar-hide">
            {[
              { title: "온누리마켓", view: "120만", cat: "Viral" },
              { title: "건강기능식품 B사", view: "85만", cat: "Branding" },
              { title: "패션 쇼핑몰 C사", view: "210만", cat: "Sales" },
              { title: "교육 스타트업 D사", view: "50만", cat: "Edu" },
              { title: "요식업 프랜차이즈 E사", view: "300만", cat: "Viral" },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] aspect-[9/16] bg-white rounded-2xl border border-gray-200 relative group overflow-hidden snap-center cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-1 bg-primary text-white rounded-md shadow-sm">{item.cat}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white/20 text-white rounded-md backdrop-blur-md border border-white/20">조회수 {item.view}+</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{item.title}</h3>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                
                {/* Placeholder Gradient for Video */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">이런 고민 있으신가요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "영상을 올렸는데 문의가 없어요.",
              "매일 영상 찍을 시간이 없어요.",
              "어떤 콘텐츠가 터지는지 모르겠어요."
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-primary mb-4 font-black text-xl bg-blue-50 w-fit px-3 py-1 rounded-lg border border-blue-100">STOP</div>
                <p className="text-lg font-bold text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 container mx-auto px-4 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">WORK PROCESS</h2>
          <p className="text-gray-500 font-medium">체계적인 프로세스로 확실한 결과를 만듭니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "기획 & 전략", desc: "브랜드 분석 및 타겟 설정", icon: Target },
            { step: "02", title: "촬영 & 제작", desc: "고퀄리티 영상 촬영", icon: Play },
            { step: "03", title: "편집 & 보정", desc: "시선을 끄는 컷편집", icon: Zap },
            { step: "04", title: "업로드 & 관리", desc: "데이터 분석 및 피드백", icon: BarChart3 },
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="text-5xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-blue-50 transition-colors">{item.step}</div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center text-gray-900">SERVICE PACKAGES</h2>
          <p className="text-gray-500 text-center mb-16 font-medium">예산과 목적에 맞는 최적의 플랜을 선택하세요.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Standard */}
            <div className="bg-white border border-gray-200 p-8 rounded-3xl flex flex-col hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full group">
              <h3 className="text-xl font-bold text-gray-500 mb-2 group-hover:text-primary transition-colors">Standard</h3>
              <div className="text-3xl font-black mb-6 text-gray-900">월 80~150만원</div>
              <p className="text-sm text-gray-500 mb-8 font-medium">지속적인 노출을 위한 가성비 패키지</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gray-600 font-medium"><div className="bg-gray-50 p-1 rounded-full text-primary"><Check className="w-4 h-4"/></div> 월 4~8편 제작</li>
                <li className="flex items-center gap-3 text-gray-600 font-medium"><div className="bg-gray-50 p-1 rounded-full text-primary"><Check className="w-4 h-4"/></div> 기획/편집 포함</li>
                <li className="flex items-center gap-3 text-gray-600 font-medium"><div className="bg-gray-50 p-1 rounded-full text-primary"><Check className="w-4 h-4"/></div> 썸네일 제공</li>
              </ul>
              <Link href="/contact" className="block text-center py-4 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">견적 문의하기</Link>
            </div>

            {/* Pro (Highlighted) */}
            <div className="bg-white border-2 border-primary p-10 rounded-3xl flex flex-col shadow-2xl shadow-blue-500/10 relative overflow-hidden transform md:-translate-y-4 z-10 h-full">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">Best Choice</div>
              <h3 className="text-xl font-bold text-primary mb-2">Pro</h3>
              <div className="text-4xl font-black mb-6 text-gray-900">월 150~300만원</div>
              <p className="text-sm text-gray-500 mb-8 font-medium">본격적인 브랜딩과 전환 유도</p>
              <ul className="space-y-5 mb-10 flex-1">
                <li className="flex items-center gap-3 text-gray-700 font-bold"><div className="bg-blue-50 p-1 rounded-full border border-blue-100 text-primary"><Check className="w-4 h-4"/></div> 월 8~12편 제작</li>
                <li className="flex items-center gap-3 text-gray-700 font-bold"><div className="bg-blue-50 p-1 rounded-full border border-blue-100 text-primary"><Check className="w-4 h-4"/></div> 전담 PD 배정</li>
                <li className="flex items-center gap-3 text-gray-700 font-bold"><div className="bg-blue-50 p-1 rounded-full border border-blue-100 text-primary"><Check className="w-4 h-4"/></div> 월간 성과 리포트</li>
                <li className="flex items-center gap-3 text-gray-700 font-bold"><div className="bg-blue-50 p-1 rounded-full border border-blue-100 text-primary"><Check className="w-4 h-4"/></div> 모델 섭외 지원</li>
              </ul>
              <Link href="/contact" className="block text-center py-4 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors font-bold shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">지금 시작하기</Link>
            </div>

             {/* Enterprise */}
             <div className="bg-white border border-gray-200 p-8 rounded-3xl flex flex-col hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full group">
              <h3 className="text-xl font-bold text-gray-500 mb-2 group-hover:text-primary transition-colors">Enterprise</h3>
              <div className="text-3xl font-black mb-6 text-gray-900">별도 협의</div>
              <p className="text-sm text-gray-500 mb-8 font-medium">기업 규모에 맞춘 커스텀 솔루션</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gray-600 font-medium"><div className="bg-gray-50 p-1 rounded-full text-primary"><Check className="w-4 h-4"/></div> 월 15편 이상 제작</li>
                <li className="flex items-center gap-3 text-gray-600 font-medium"><div className="bg-gray-50 p-1 rounded-full text-primary"><Check className="w-4 h-4"/></div> 유튜브 채널 관리</li>
                <li className="flex items-center gap-3 text-gray-600 font-medium"><div className="bg-gray-50 p-1 rounded-full text-primary"><Check className="w-4 h-4"/></div> 광고 집행 대행</li>
              </ul>
              <Link href="/contact" className="block text-center py-4 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">문의하기</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
