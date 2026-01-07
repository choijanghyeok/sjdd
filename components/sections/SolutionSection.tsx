"use client";

import { motion } from "framer-motion";
import { Handshake, MessageCircle, Target } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      icon: <Handshake size={32} className="text-white" />,
      bg: "bg-sky-blue",
      title: "함께 실행합니다",
      desc: "단순 대행이 아닌, 파트너로서 함께 고민하고 실행합니다.",
    },
    {
      icon: <MessageCircle size={32} className="text-white" />,
      bg: "bg-royal-blue",
      title: "매주 1:1로 설명합니다",
      desc: "어려운 마케팅 용어 없이, 내 사업에 맞는 언어로 설명해드립니다.",
    },
    {
      icon: <Target size={32} className="text-white" />,
      bg: "bg-deep-blue",
      title: "90일 안에 기준을 만듭니다",
      desc: "홀로서기가 가능한 마케팅 기준과 시스템을 구축합니다.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            우리의 방식
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-royal-blue flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md ${step.bg}`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 word-keep">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-royal-blue">
            "해주는 마케팅이 아니라, <br className="md:hidden" />
            남겨주는 마케팅"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
