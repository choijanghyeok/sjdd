"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ServiceSection = () => {
  return (
    <section id="service" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            서비스 선택
          </h2>
          <p className="text-gray-600 text-lg">나에게 맞는 플랜을 선택하세요</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* BASIC Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="inline-block px-3 py-1 bg-sky-blue text-white text-sm font-bold rounded-full mb-4">
              BASIC
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">
              숏폼 중심 SNS 대행
            </h3>
            <p className="text-gray-500 mb-6">제작 중심 · 진입 상품</p>
            <div className="text-3xl font-bold text-deep-blue mb-6">
              월 49만원
            </div>
            <p className="text-sm text-gray-600 mb-8 bg-gray-50 p-3 rounded-lg">
              "디렉팅보다는 그냥 만들어달라는 고객"
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { text: "숏폼 영상 월 8개", included: true },
                { text: "기획 템플릿 기반 제작", included: true },
                { text: "컷 편집 / 자막 / 리듬 편집", included: true },
                { text: "월 1회 1:1 미팅 (60분)", included: true },
                { text: "수정 1회", included: true },
                { text: "계정 전략 설계", included: false },
                { text: "성장 로드맵", included: false },
                { text: "매출 구조 디렉팅", included: false },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {item.included ? (
                    <Check size={18} className="text-sky-blue flex-shrink-0" />
                  ) : (
                    <X size={18} className="text-gray-300 flex-shrink-0" />
                  )}
                  <span
                    className={
                      item.included ? "text-text-dark" : "text-gray-400 line-through"
                    }
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6 text-sm text-royal-blue font-medium">
              일단 콘텐츠부터 쌓고 싶은 분들께 추천
            </div>
            <button className="w-full py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-xl hover:border-royal-blue hover:text-royal-blue transition-colors">
              BASIC 상담하기
            </button>
          </motion.div>

          {/* PRO Card (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border-2 border-royal-blue relative transform lg:-translate-y-4 shadow-[0_0_30px_rgba(37,99,235,0.15)] z-10"
          >
            <div className="absolute top-0 right-0 bg-royal-blue text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">
              BEST
            </div>
            <div className="inline-block px-3 py-1 bg-royal-blue text-white text-sm font-bold rounded-full mb-4">
              PRO
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">
              인스타 중심 SNS 디렉팅
            </h3>
            <p className="text-gray-500 mb-6">매출 + 이해 + 지속 (90일 졸업형)</p>
            <div className="text-4xl font-bold text-royal-blue mb-6">
              월 60만원
            </div>
            <p className="text-sm text-gray-600 mb-8 bg-blue-50 p-3 rounded-lg">
              "소상공인 · 1인 사업가"
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { text: "인스타 릴스 중심 숏폼 월 8~12개", included: true },
                { text: "촬영 가이드 제공", included: true },
                { text: "업종 맞춤 콘텐츠 기획", included: true },
                { text: "훅 구조 디렉팅", included: true },
                { text: "주 1회 1:1 미팅 (60분)", included: true },
                { text: "콘텐츠 피드백 & 분석", included: true },
                { text: "수정 2회", included: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check size={18} className="text-royal-blue flex-shrink-0" />
                  <span className="text-text-dark font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6 text-sm text-royal-blue font-bold">
              대표님이 가장 많이 선택하는 핵심 상품
            </div>
            <button className="w-full py-4 bg-royal-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              PRO 상담하기
            </button>
          </motion.div>

          {/* PREMIUM Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="inline-block px-3 py-1 bg-deep-blue text-white text-sm font-bold rounded-full mb-4">
              PREMIUM
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">
              유튜브 중심 SNS 디렉팅
            </h3>
            <p className="text-gray-500 mb-6">
              기업 · 유통 전용 / 콘텐츠 자산 설계
            </p>
            <div className="text-3xl font-bold text-deep-blue mb-6">
              월 120~200만원
            </div>
            <p className="text-sm text-gray-600 mb-8 bg-gray-50 p-3 rounded-lg">
              "기업 · 브랜드 · 유통사"
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { text: "유튜브 중심 콘텐츠 전략 설계", included: true },
                { text: "유튜브 쇼츠 + 인스타 릴스 병행", included: true },
                { text: "롱폼 콘텐츠 기획 (협의)", included: true },
                { text: "콘텐츠 시리즈 기획", included: true },
                { text: "채널 포지션 리셋", included: true },
                { text: "전환 구조 설계", included: true },
                { text: "주 1회 1:1 미팅 (오프라인 우선)", included: true },
                { text: "상시 피드백 (메신저)", included: true },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check size={18} className="text-deep-blue flex-shrink-0" />
                  <span className="text-text-dark">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-6 text-sm text-deep-blue font-medium">
              영상이 아니라, 유튜브 채널을 자산으로 만드는 디렉팅
            </div>
            <button className="w-full py-3 border-2 border-gray-200 text-deep-blue font-bold rounded-xl hover:border-deep-blue hover:bg-deep-blue hover:text-white transition-colors">
              PREMIUM 상담하기
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
