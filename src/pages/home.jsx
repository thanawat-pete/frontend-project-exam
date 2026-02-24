import React from 'react';
import { FeatureCard, PlanCard } from '../components/cards';
import { BookA, Pencil, Wand2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';

const Home = () => {
    const features = [
        {
            icon: <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600"><BookA className="w-6 h-6" /></div>,
            title: "ตรวจสอบคำผิด",
            description: "ช่วยตรวจสอบคำผิดในข้อความภาษาไทยได้อย่างแม่นยำพร้อมข้อคิดคำแนะนำที่ต้องแก้ไข",
            borderColor: "border-yellow-200"
        },
        {
            icon: <div className="p-3 bg-red-100 rounded-lg text-red-600"><Pencil className="w-6 h-6" /></div>,
            title: "ดูคำที่ผิดและคำแนะนำ",
            description: "แสดงคำที่สะกดผิดพร้อมคำแนะนำที่ถูกต้องให้เลือกแก้ไขได้ทันที",
            borderColor: "border-red-200"
        },
        {
            icon: <div className="p-3 bg-purple-100 rounded-lg text-purple-600"><Wand2 className="w-6 h-6" /></div>,
            title: "แก้ไขข้อความอัตโนมัติ",
            description: "ปรับปรุงข้อความและประโยคให้ถูกต้องอัตโนมัติประหยัดเวลาในการแก้ไข",
            borderColor: "border-purple-200"
        },
        {
            icon: <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><MessageSquare className="w-6 h-6" /></div>,
            title: "เลือกโทนประโยคภาษาพูดหรือภาษาทางการ",
            description: "ปรับโทนภาษาให้ตรงตามความต้องการทั้งภาษาพูดที่เป็นกันเองหรือภาษาทางราชการที่สุภาพ",
            borderColor: "border-blue-200"
        }
    ];

    const plans = [
        {
            title: "ผู้เยี่ยมชม",
            price: "0",
            period: "1 ครั้ง / วัน",
            badgeClass: "bg-base-200 text-base-content",
            features: [
                { text: "ตรวจสอบคำผิดได้ xxxx โทเค่น", included: true },
                { text: "ดูคำที่ผิดและคำแนะนำ", included: true },
                { text: "แก้ไขข้อความอัตโนมัติ", included: false },
                { text: "เลือกโทนประโยคภาษาพูดหรือภาษาทางการ", included: false }
            ],
            buttonText: null
        },
        {
            title: "สมาชิกธรรมดา",
            price: "0",
            period: "7 วัน / สัปดาห์",
            badgeClass: "bg-primary/20 text-primary",
            features: [
                { text: "ตรวจสอบคำผิดได้ xxxx โทเค่น", included: true },
                { text: "ดูคำที่ผิดและคำแนะนำ", included: true },
                { text: "แก้ไขข้อความอัตโนมัติ", included: true },
                { text: "เลือกโทนประโยคภาษาพูดหรือภาษาทางการ", included: false }
            ],
            buttonText: null
        },
        {
            title: "สมาชิกพิเศษ",
            price: "XXX",
            period: "1 เดือน / แพ็กเกจ",
            badgeClass: "bg-primary text-primary-content shadow-sm",
            isPremium: true,
            features: [
                { text: "ตรวจสอบคำผิดได้ xxxx โทเค่น", included: true },
                { text: "ดูคำที่ผิดและคำแนะนำ", included: true },
                { text: "แก้ไขข้อความอัตโนมัติ", included: true },
                { text: "เลือกโทนประโยคภาษาพูดหรือภาษาทางการ", included: true }
            ],
            buttonText: "สมัครเลย"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-12 max-w-[1200px]">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-base-content mb-6 tracking-tight">
                    เขียนได้อย่าง <span className="text-transparent bg-clip-text bg-[#6b51c6] leading-normal pb-2 font-bold font-sans">มั่นใจ</span>
                </h1>
                <p className="text-lg md:text-xl text-base-content/80 mb-10 leading-relaxed font-medium">
                    ยกระดับการเขียนของคุณด้วยผู้ช่วย AI อัจฉริยะ ตรวจสอบและแก้ไขไวยากรณ์ภาษาไทย
                    <br className="hidden md:block" /> ได้ทันทีอย่างแม่นยำและเป็นธรรมชาติ
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href='/docs'>
                    <button className="btn btn-primary rounded-md px-10 py-3 h-auto text-[17px] font-medium w-full sm:w-auto text-white tracking-wide">
                        เริ่มต้นใช้งาน
                    </button>
                    </a>
                    <button className="btn btn-outline border-base-content/20 text-base-content hover:bg-base-200 hover:border-base-content/30 bg-base-100 shadow-sm rounded-md px-10 py-3 h-auto text-[17px] font-medium w-full sm:w-auto tracking-wide">
                        เรียนรู้เพิ่มเติม
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 px-2">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>

            {/* Pricing Section */}
            <div className="max-w-[1000px] mx-auto px-4 lg:px-12">
                <h2 className="text-[32px] font-bold text-center text-transparent bg-clip-text bg-[#8463c6] mb-12 pb-1">
                    ประเภทสมาชิก
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;