import React from 'react'
import { Target, Shield, Zap, Heart } from 'lucide-react'

const AboutPage = () => {
    const values = [
        {
            icon: Target,
            title: "แม่นยำสูง",
            desc: "ช่วยให้งานเขียนของคุณถูกต้องตามหลักไวยากรณ์ภาษาไทย 100%"
        },
        {
            icon: Zap,
            title: "รวดเร็ว ทันใจ",
            desc: "ตรวจสอบข้อความและแนะนำการแก้ไขภายในเวลาไม่กี่วินาที หมดปัญหาเรื่องความล่าช้า"
        },
        {
            icon: Shield,
            title: "เป็นส่วนตัว และปลอดภัย",
            desc: "ข้อความที่คุณนำมาตรวจสอบจะถูกเก็บรักษาอย่างเป็นความลับและจะไม่ถูกนำไปใช้เพื่อประโยชน์อื่น"
        },
        {
            icon: Heart,
            title: "พัฒนาเพื่อคนไทย",
            desc: "AI ของเราถูกฝึกฝนมาเพื่อเข้าใจบริบทและความซับซ้อนของภาษาไทยโดยเฉพาะ"
        }
    ]

    return (
        <div className="min-h-[calc(100vh-68px)] bg-base-200 font-sans py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-4">
                        เกี่ยวกับเรา
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6 tracking-tight">
                        ยกระดับภาษาไทยด้วย AI <br className="hidden md:block" /> ที่เข้าใจบริบทอย่างลึกซึ้ง
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                        T-Check ถือกำเนิดขึ้นจากความตั้งใจที่จะช่วยให้คนไทยทุกคนสามารถสื่อสารผ่านตัวอักษรได้อย่างมั่นใจ ถูกต้องตามความหมายที่ต้องการจะสื่อ และดูเป็นมืออาชีพมากที่สุด
                    </p>
                </div>

                <div className="bg-base-100 rounded-3xl shadow-sm border border-base-300 p-8 md:p-12 mb-16">
                    <h2 className="text-2xl font-bold text-center text-base-content mb-10">พันธกิจของเรา</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {values.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center text-primary">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-base-content mb-2">{item.title}</h3>
                                    <p className="text-base-content/70 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-16 text-primary-content shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">พร้อมที่จะเขียนอย่างมั่นใจแล้วหรือยัง?</h2>
                        <p className="text-primary-content/80 text-lg mb-8 max-w-2xl mx-auto">
                            มาเข้าร่วมกับทีมและบุคคลที่ใช้ T-Check ในการยกระดับคุณภาพงานเขียนไปอีกขั้น
                        </p>
                        <a href="/register" className="btn bg-base-100 text-base-content hover:bg-base-200 border-none rounded-full px-8 font-bold">
                            สมัครใช้งานฟรี
                        </a>
                    </div>
                    {/* Decorative shapes to make the CTA box look premium */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage