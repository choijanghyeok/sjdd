"use client";

import { motion } from "framer-motion";

const EmpathySection = () => {
  const painPoints = [
    "영상은 올리는데 매출은 그대로",
    "외주를 맡겨도 왜 하는지 모르겠고",
    "대행만 바꾸다 지침",
    "결국 SNS가 부담이 됨",
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue">
            이런 고민 있으셨죠?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-blue" />
              <p className="text-xl font-medium text-text-dark group-hover:text-royal-blue transition-colors">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
