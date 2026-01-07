"use client";

import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-deep-blue to-royal-blue text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold leading-relaxed break-keep">
            기존 SNS 대행은<br />
            <span className="text-pale-blue underline decoration-4 underline-offset-8">대표님의 사업을 이해하지 못합니다.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
