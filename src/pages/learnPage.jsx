import React from 'react'
import { PenTool, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-router' // Need Link for standard routing

const LearnPage = () => {
    return (
        <div className="min-h-[calc(100vh-68px)] bg-base-200 font-sans py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-base-content mb-4 tracking-tight">เรียนรู้การใช้งาน <span className="text-primary">T-Check</span></h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        เพิ่มประสิทธิภาพงานเขียนของคุณให้ถูกต้องและสละสลวยยิ่งขึ้นด้วย 3 ขั้นตอนง่ายๆ
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <PenTool className="w-8 h-8" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-base-content mb-2 flex items-center justify-center md:justify-start gap-2">
                                <span className="bg-primary text-primary-content text-xs rounded-full w-6 h-6 flex items-center justify-center">1</span>
                                ใส่ข้อความของคุณ
                            </h3>
                            <p className="text-base-content/70 leading-relaxed">
                                เริ่มต้นด้วยการพิมพ์หรือวางข้อความเนื้อหาที่คุณต้องการตรวจสอบลงในกล่อง Editor ระบบสามารถรับรหัสข้อความได้ยาวสูงสุดตามแพ็กเกจที่คุณใช้งาน
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 md:p-10 flex flex-col md:flex-row-reverse items-center gap-8 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-base-content mb-2 flex items-center justify-center md:justify-start gap-2">
                                <span className="bg-primary text-primary-content text-xs rounded-full w-6 h-6 flex items-center justify-center">2</span>
                                ให้ AI ตรวจสอบ
                            </h3>
                            <p className="text-base-content/70 leading-relaxed">
                                กดปุ่ม "ตรวจสอบคำผิด" เพื่อให้ AI อัจฉริยะของเราสแกนหาข้อผิดพลาดทางไวยากรณ์ การสะกดคำ และแนะนำรูปประโยคที่อ่านง่ายขึ้น
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-base-content mb-2 flex items-center justify-center md:justify-start gap-2">
                                <span className="bg-primary text-primary-content text-xs rounded-full w-6 h-6 flex items-center justify-center">3</span>
                                ปรับแก้และนำไปใช้
                            </h3>
                            <p className="text-base-content/70 leading-relaxed">
                                ตรวจสอบคำแนะนำจาก AI ด้านข้าง และเลือก "แก้ไขอัตโนมัติ" หรือปรับโทนภาษาตามความเหมาะสม เมื่อเสร็จแล้วก็คัดลอกไปใช้งานได้ทันที!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link to="/docs" className="btn btn-primary btn-lg rounded-full font-bold shadow-sm shadow-primary/30 group">
                        เริ่มใช้งานตอนนี้เลย
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LearnPage