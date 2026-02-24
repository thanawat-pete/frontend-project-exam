import React, { useState } from 'react'
import { Wand2, Pencil, BookA, MessageSquare, Lock, CheckCircle2 } from 'lucide-react'

const DocsEditor = () => {
  const [text, setText] = useState('')
  const [userType, setUserType] = useState('viewer')
  const [checkedText, setCheckedText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isChecking, setIsChecking] = useState(false)

  // 1. Configured Features based on Tier
  const features = {
    viewer: {
      label: 'ผู้เยี่ยมชม',
      canCheck: true,
      canViewSuggestions: true,
      canAutoFix: false,
      canChangeTone: false,
      tokens: '500',
      color: 'bg-base-200 text-base-content/70 border-base-300'
    },
    member: {
      label: 'สมาชิกธรรมดา',
      canCheck: true,
      canViewSuggestions: true,
      canAutoFix: true,
      canChangeTone: false,
      tokens: '50,000',
      color: 'bg-primary/10 text-primary border-primary/20'
    },
    premium: {
      label: 'สมาชิกพิเศษ',
      canCheck: true,
      canViewSuggestions: true,
      canAutoFix: true,
      canChangeTone: true,
      tokens: 'ไม่จำกัด',
      color: 'bg-primary text-primary-content border-primary'
    }
  }

  const currentFeatures = features[userType]

  const handleCheckText = () => {
    if (!text.trim()) {
      alert('กรุณาป้อนข้อความ')
      return
    }
    setIsChecking(true)

    // Simulate API delay
    setTimeout(() => {
      setCheckedText(text)
      setSuggestions([
        { word: 'ตัวอย่าง', suggestion: 'ตัวอย่าง', type: 'spelling' }
      ])
      setIsChecking(false)
    }, 800)
  }

  const handleAutoFix = () => {
    if (!currentFeatures.canAutoFix) return
    setText(text + ' (แก้ไขแล้ว)')
  }

  const handleChangeTone = () => {
    if (!currentFeatures.canChangeTone) return
    alert('เปลี่ยนโทนภาษาเรียบร้อย')
  }

  return (
    <div className="min-h-screen bg-base-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-base-content mb-2 flex items-center gap-2">
              <CheckCircle2 className="text-primary w-8 h-8" />
              ตรวจสอบเอกสาร
            </h1>
            <p className="text-base-content/70 text-sm leading-relaxed max-w-2xl">
              วางข้อความของคุณลงในแบบฟอร์มด้านล่างเพื่อตรวจสอบไวยากรณ์และแนะนำการแก้ไขไวยากรณ์ภาษาไทยด้วย AI
            </p>
          </div>

          <div className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border ${currentFeatures.color}`}>
            สถานะ: {currentFeatures.label}
          </div>
        </div>

        {/* Simulator Selector (For Demo) */}
        <div className="mb-6 bg-base-100 p-4 rounded-lg border border-base-300 shadow-sm flex items-center gap-4">
          <label className="text-sm font-medium text-base-content/80 whitespace-nowrap">
            จำลองสิทธิ์ผู้ใช้:
          </label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="block w-full max-w-xs pl-3 pr-10 py-2 text-base bg-base-100 text-base-content border border-base-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm rounded-md"
          >
            <option value="viewer">Visitor (ฟรี)</option>
            <option value="member">Member (รายเดือน)</option>
            <option value="premium">Premium (Pro)</option>
          </select>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Editor Column (Left) */}
          <div className="lg:col-span-8">
            <div className="bg-base-100 rounded-xl shadow-sm border border-base-300 overflow-hidden h-full">
              <div className="border-b border-base-300 px-4 py-3 bg-base-200 flex justify-between items-center">
                <span className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">Editor</span>
                <span className="text-xs text-base-content/50">{text.length} ตัวอักษร</span>
              </div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="พิมพ์หรือวางบทความของคุณที่นี่..."
                className="w-full h-[500px] p-6 text-base bg-base-100 text-base-content leading-relaxed resize-none focus:outline-none placeholder:text-base-content/40"
              />
            </div>
          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 space-y-4">

            {/* Primary Action */}
            <button
              onClick={handleCheckText}
              disabled={isChecking}
              className="w-full px-4 py-4 bg-primary text-primary-content rounded-xl font-medium text-sm hover:bg-primary/90 transition shadow-sm hover:shadow-md flex items-center justify-between group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-3">
                <BookA className={`w-5 h-5 ${isChecking ? 'animate-pulse' : ''}`} />
                <div className="text-left">
                  <div className="font-semibold text-base">
                    {isChecking ? 'กำลังตรวจสอบ...' : 'ตรวจสอบคำผิด'}
                  </div>
                  <div className="text-xs text-primary-content/80">
                    ใช้ {currentFeatures.tokens} โทเค่น
                  </div>
                </div>
              </div>
            </button>

            <div className="bg-base-100 p-4 rounded-xl border border-base-300 shadow-sm space-y-3">
              <h3 className="text-xs font-semibold text-base-content/60 uppercase tracking-wider mb-2">เครื่องมือ AI</h3>

              {/* View Suggestions */}
              <FeatureButton
                icon={Pencil}
                title="แนะนำการแก้ไข"
                desc="แสดงคำแนะนำ"
                isActive={currentFeatures.canViewSuggestions}
                onClick={() => { }}
              />

              {/* Auto Fix */}
              <FeatureButton
                icon={Wand2}
                title="แก้ไขอัตโนมัติ"
                desc={currentFeatures.canAutoFix ? 'พร้อมใช้งาน' : 'สมาชิก Member ขึ้นไป'}
                isActive={currentFeatures.canAutoFix}
                isLocked={!currentFeatures.canAutoFix}
                onClick={handleAutoFix}
              />

              {/* Change Tone */}
              <FeatureButton
                icon={MessageSquare}
                title="เปลี่ยนโทนภาษา"
                desc={currentFeatures.canChangeTone ? 'พร้อมใช้งาน' : 'สมาชิก Premium เท่านั้น'}
                isActive={currentFeatures.canChangeTone}
                isLocked={!currentFeatures.canChangeTone}
                onClick={handleChangeTone}
              />
            </div>

            {/* Membership Summary Card */}
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base-content font-semibold text-sm">แพ็กเกจปัจจุบัน</span>
                <span className={`text-xs px-2 py-1 rounded bg-base-100 text-primary border border-primary/20 font-medium`}>
                  {currentFeatures.label}
                </span>
              </div>
              <div className="space-y-2 text-sm text-base-content/80">
                <div className="flex justify-between">
                  <span>โควต้าการตรวจ</span>
                  <span className="font-medium text-base-content">{currentFeatures.tokens} / วัน</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// Sub-component for cleaner code
const FeatureButton = ({ icon: Icon, title, desc, isActive, isLocked, onClick }) => (
  <button
    onClick={onClick}
    disabled={!isActive}
    className={`w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-between border ${isActive
        ? 'border-base-300 bg-base-100 text-base-content hover:bg-base-200 hover:border-primary/50 shadow-sm'
        : 'border-transparent bg-base-200/50 text-base-content/40 cursor-not-allowed opacity-80'
      }`}
  >
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-md ${isActive ? 'bg-primary/10 text-primary' : 'bg-base-300/50 text-base-content/40'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-left">
        <div className={`font-semibold ${isActive ? 'text-base-content' : 'text-base-content/50'}`}>
          {title}
        </div>
        <div className="text-xs text-base-content/60">
          {desc}
        </div>
      </div>
    </div>
    {isLocked && <Lock className="w-4 h-4 text-base-content/40" />}
  </button>
)

export default DocsEditor