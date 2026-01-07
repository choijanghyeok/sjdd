"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2 } from "lucide-react";

const GuideSection = () => {
  const guides = [
    {
      icon: <Rocket size={24} className="text-white" />,
      bg: "bg-sky-blue",
      text: "빠른 제작이 필요하다면",
      target: "BASIC",
    },
    {
      icon: <TrendingUp size={24} className="text-white" />,
      bg: "bg-royal-blue",
      text: "매출과 이해 둘 다 원한다면",
      target: "PRO",
    },
    {
      icon: <Building2 size={24} className="text-white" />,
      bg: "bg-deep-blue",
      text: "브랜드 자산을 만들고 싶다면",
      target: "PREMIUM",
    },
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-deep-blue mb-4">
            어떤 서비스가 맞을까요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${guide.bg}`}
                >
                  {guide.icon}
                </div>
                <span className="font-medium text-text-dark">{guide.text}</span>
              </div>
              <span className={`font-bold ${guide.bg.replace("bg-", "text-")}`}>
                → {guide.target}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
