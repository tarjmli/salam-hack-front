"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Clock, Zap, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle className="w-6 h-6" />, 
    label: "ترجمة دقيقة", 
    value: "باستخدام الذكاء الاصطناعي أو قيم مترجمة مسبقًا"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />, 
    label: "اتساق المصطلحات", 
    value: "لضمان تجربة مستخدم موحدة"
  },
  {
    icon: <Clock className="w-6 h-6" />, 
    label: "كفاءة وسرعة", 
    value: "تقليل الحاجة إلى الترجمة اليدوية"
  },
  {
    icon: <Zap className="w-6 h-6" />, 
    label: "سهولة الاستخدام", 
    value: "نظام متكامل لسهولة الترجمة والإدارة"
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{ y, opacity }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl transform -rotate-6"></div>
            <Image
              src="/assets/terjemli.svg"
              alt="ترجملي"
              width={600}
              height={600}
              className="rounded-3xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">حول ترجملي</h2>
            <p className="text-lg mb-6 text-zinc-300">
              ترجملي هو منصة مبتكرة تسهل عمليات الترجمة والتعريب باستخدام أحدث تقنيات الذكاء الاصطناعي.
              نهدف إلى توفير حلول ترجمة دقيقة وسريعة تلبي احتياجات الأفراد والشركات.
            </p>
            <p className="text-lg mb-8 text-zinc-300">
              نحن نؤمن بأن اللغة لا يجب أن تكون حاجزًا، ولذلك نسعى إلى جعل عمليات الترجمة أكثر كفاءة وسهولة من خلال أدوات متقدمة وتقنيات ذكية.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  className="bg-zinc-900/50 rounded-lg p-4 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-white">{benefit.icon}</div>
                    <div className="text-xl font-bold">
                      {benefit.label}
                    </div>
                  </div>
                  <div className="text-sm text-zinc-400">
                    {benefit.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
