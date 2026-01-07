"use client";

import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-deep-blue to-royal-blue text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold leading-relaxed break-keep">
            "우리는 오래 붙잡아두지 않습니다.<br />
            <span className="text-pale-blue">90일 후</span>, 저희 없이도 할 수 있게<br />
            만드는 것이 목표입니다."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
