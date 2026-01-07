"use client";

import { motion } from "framer-motion";

const ProgramSection = () => {
  return (
    <section id="program" className="py-24 bg-section-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            90일 졸업형 프로그램
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            3개월(90일) 동안 매출을 직접 만들어보고, SNS 마케팅을 교육하며, <br className="hidden md:block" />
            혼자서도 지속 가능한 환경을 세팅합니다.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto py-10">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full hidden md:block" />
          
          {/* Active Gradient Bar */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-pale-blue via-sky-blue to-royal-blue -translate-y-1/2 rounded-full hidden md:block" 
          />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 relative z-10">
            {[
              { label: "시작", sub: "실행 시작", color: "bg-pale-blue" },
              { label: "1개월", sub: "이해 심화", color: "bg-sky-blue" },
              { label: "2개월", sub: "자립 완성", color: "bg-royal-blue" },
              { label: "3개월", sub: "졸업", color: "bg-deep-blue" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="flex flex-row md:flex-col items-center gap-4 md:gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl shadow-sm md:shadow-none"
              >
                <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-white shadow-md ${item.color} hidden md:block`} />
                <div className="text-left md:text-center">
                  <div className="font-bold text-lg text-text-dark">{item.label}</div>
                  <div className="text-royal-blue font-medium">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
