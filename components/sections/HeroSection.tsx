"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-section-bg">
      {/* Background Decoration Removed for uniform color */}
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-royal-blue font-bold text-lg md:text-xl mb-4 tracking-wide">
            대행 + 교육 = 졸업
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-deep-blue leading-tight mb-6 break-keep">
            SNS 마케팅 전략으로<br />
            <span className="text-royal-blue">대표님의 매출을 올립니다.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 break-keep">
            소상공인 · 1인 사업가 · 기업을 위한 <br className="md:hidden" />
            졸업형 SNS 디렉팅 프로그램
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="#service"
              className="w-full md:w-auto px-8 py-4 bg-white border-2 border-royal-blue text-royal-blue rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-sm"
            >
              내게 맞는 서비스 찾기
            </Link>
            <Link
              href="#consulting"
              className="w-full md:w-auto px-8 py-4 bg-royal-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              무료 상담 신청
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-royal-blue rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-royal-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
