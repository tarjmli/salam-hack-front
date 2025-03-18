"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Languages, FileText, ArrowRight } from "lucide-react"

export default function Da3mPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-right mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">الدعم</h1>
          <p className="text-gray-400">قم بإدارة إعدادات الدعم وتفضيلات التدويل</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item}>
            <Card className="bg-[#111] border-[#222] rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-4">الأطر المدعومة</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-white mr-3"></div>
                        <p>React JS</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-white mr-3"></div>
                        <p>React TypeScript</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-white mr-3"></div>
                        <p>Next.js</p>
                      </div>
                    </div>
                  </div>
                  <Code className="h-6 w-6 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-[#111] border-[#222] rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-4">اللغات المدعومة</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-white mr-3"></div>
                        <p>العربية</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-white mr-3"></div>
                        <p>الإنجليزية</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1 h-6 bg-white mr-3"></div>
                        <p>الفرنسية</p>
                      </div>
                    </div>
                  </div>
                  <Languages className="h-6 w-6 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-[#111] border-[#222] rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="w-full">
                    <h2 className="text-xl font-bold mb-4">وثائق سريعة</h2>

                    <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
                      <motion.div variants={item} className="p-4 bg-[#1a1a1a] rounded-lg">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">البدء السريع</h3>
                          <FileText className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">قم بتثبيت المكتبة باستخدام npm أو yarn:</p>
                        <div className="bg-black p-2 rounded mt-2 text-sm font-mono">
                          npm install react-i18next i18next
                        </div>
                      </motion.div>

                      <motion.div variants={item} className="p-4 bg-[#1a1a1a] rounded-lg">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">تكوين المشروع</h3>
                          <FileText className="h-4 w-4 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-400 mt-2">قم بإنشاء ملف التكوين الخاص بك:</p>
                        <div className="bg-black p-2 rounded mt-2 text-sm font-mono">
                          {`// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { ... },
    ar: { ... },
    fr: { ... }
  },
  lng: 'ar',
  fallbackLng: 'en'
});

// يجب استيراد هذا الملف في index.js أو _app.js
// You need to import this file in your index.js or _app.js
// import './i18n';`}
                        </div>
                      </motion.div>

                      <motion.div
                        variants={item}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-end text-sm cursor-pointer group"
                      >
                        <span>عرض المزيد من الوثائق</span>
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

