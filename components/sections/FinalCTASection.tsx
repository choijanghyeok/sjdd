"use client";

import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section id="consulting" className="py-32 bg-gradient-to-r from-royal-blue to-sky-blue text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            90일 동안, 같이 해보실래요?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            상담은 무료입니다. 대신 아무나 받지 않습니다.
          </p>
          <button className="bg-white text-royal-blue text-xl font-bold py-4 px-12 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105">
            무료 상담 신청
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
