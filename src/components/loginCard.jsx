import React from "react";
import { ArrowRight, Key, Mail } from "lucide-react";

const LoginCard = () => {
  return (
    <div className="w-full bg-base-100 border border-base-300 rounded-lg shadow-md p-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-14 h-14 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center shadow-sm">
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>

      <h2 className="text-2xl font-extrabold text-center mb-1">เข้าสู่ระบบ</h2>
      <p className="text-sm text-center text-base-content/70 mb-6">
        ยินดีต้อนรับสู่ T-Check
      </p>

      <form className="space-y-3">
        <div>
          <label className="text-xs text-base-content/70">
            ชื่อผู้ใช้ หรือ อีเมล
          </label>
          <div className="mt-2">
            <div className="flex items-center border border-base-300 rounded-md overflow-hidden">
              <div className="px-3 py-2 bg-base-200">
                <Mail className="w-4 h-4 text-base-content/70" />
              </div>
              <input
                type="text"
                placeholder="ชื่อผู้ใช้หรืออีเมล"
                className="w-full h-12 px-3 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs text-base-content/70">รหัสผ่าน</label>
          <div className="mt-2">
            <div className="flex items-center border border-base-300 rounded-md overflow-hidden">
              <div className="px-3 py-2 bg-base-200">
                <Key className="w-4 h-4 text-base-content/70" />
              </div>
              <input
                type="password"
                placeholder="รหัสผ่าน"
                className="w-full h-12 px-3 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-2 text-sm">
            <a href="#" className="text-primary">
              ลืมรหัสผ่าน
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full h-12 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 text-white font-medium"
          >
            เข้าสู่ระบบ
          </button>
        </div>

        <div className="flex items-center gap-3 -mt-1">
          <div className="h-px bg-base-300 flex-1"></div>
          <div className="text-xs text-base-content/60">หรือ</div>
          <div className="h-px bg-base-300 flex-1"></div>
        </div>

        <div className="-mt-1">
          <button
            type="button"
            className="w-full h-11 bg-white border border-base-300 rounded-md flex items-center justify-center gap-3 px-4 shadow-sm"
          >
            <img src="/google.svg" alt="google" className="w-6 h-6" />
            <span className="text-sm text-base-content">
              เข้าสู่ระบบด้วย Google
            </span>
          </button>
        </div>

        <div className="text-center text-sm text-base-content/70">
          ยังไม่มีบัญชีผู้ใช้?{" "}
          <a href="#" className="text-primary font-medium">
            สมัครสมาชิก
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
