import { Link } from "react-router";

export default function Register() {
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row bg-base-100 rounded-lg overflow-hidden border border-base-200 shadow-sm relative">

        {/* Left - Graphic */}
        <div className="md:w-1/2 p-10 flex flex-col items-center justify-center md:border-r border-base-200">
          <div className="grid grid-cols-2 gap-3 mb-8 w-64 h-64">
            <div className="bg-[#3b3a9e] rounded-tl-xl rounded-bl-sm rounded-tr-sm rounded-br-sm w-full h-full"></div>
            <div className="bg-[#a855f7] rounded-tr-3xl rounded-tl-sm rounded-bl-sm rounded-br-sm w-full h-full"></div>
            <div className="bg-[#a855f7] rounded-bl-3xl rounded-tl-sm rounded-tr-sm rounded-br-sm w-full h-full"></div>
            <div className="bg-[#3b3a9e] rounded-br-xl rounded-tl-sm rounded-tr-sm rounded-bl-sm w-full h-full"></div>
          </div>
          <h1 className="text-3xl font-bold mt-4 text-base-content whitespace-nowrap">
            ยินดีต้อนรับสู่ T-CHECK
          </h1>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          {/* Form Header */}
          <div className="text-center mb-8 relative">
            <div className="mx-auto w-12 h-12 bg-[#5c5cb8] rounded-xl flex items-center justify-center mb-4 text-white relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              <div className="absolute -bottom-1 -right-1 bg-base-100 text-base-content rounded-tl-md w-4 h-4 flex flex-col items-center justify-center font-bold text-lg leading-none">+</div>
            </div>
            <h2 className="text-2xl font-bold text-base-content">สมัครสมาชิก</h2>
            <p className="text-base-content/60 mt-1">
              สมัครสมาชิกเพื่อเข้าใช้งาน
            </p>
          </div>

          <form className="space-y-4">
            {/* Username */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-base-content/70">ชื่อผู้ใช้</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3 text-base-content/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="M7 21v-2a2 2 0 0 1 2-2h2" /><path d="M15 13h4" /><path d="M15 17h4" /></svg>
                </div>
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  className="input w-full bg-base-200/50 border-none pl-10 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </label>

            {/* Email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-base-content/70">อีเมลล์</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3 text-base-content/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <input
                  type="email"
                  placeholder="อีเมลล์"
                  className="input w-full bg-base-200/50 border-none pl-10 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </label>

            {/* Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-base-content/70">รหัสผ่าน</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3 text-base-content/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                </div>
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="input w-full bg-base-200/50 border-none pl-10 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </label>

            {/* Confirm Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium text-base-content/70">ยืนยันรหัสผ่าน</span>
              </div>
              <div className="relative flex items-center">
                <div className="absolute left-3 text-base-content/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                </div>
                <input
                  type="password"
                  placeholder="ยืนยันรหัสผ่าน"
                  className="input w-full bg-base-200/50 border-none pl-10 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </label>

            <div className="pt-2">
              <button type="button" className="btn bg-[#3b3a9e] hover:bg-[#2b2a75] text-white border-none w-full rounded-md shadow-sm">
                สมัครสมาชิก
              </button>
            </div>

            <div className="divider opacity-40 before:bg-base-content/20 after:bg-base-content/20 my-6"></div>

            <button type="button" className="btn btn-outline border-base-200 hover:bg-base-200 hover:border-base-300 bg-white w-full rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] mx-auto max-w-[90%] flex justify-center items-center gap-2 text-gray-700 hover:text-gray-900">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238598)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                </g>
              </svg>
              <span className="font-medium">เข้าสู่ระบบด้วย Google</span>
            </button>

            <p className="text-sm text-center mt-6 text-base-content/70">
              มีบัญชีอยู่แล้ว?
              <Link to="/login" className="link link-primary ml-1 text-[#3b3a9e] no-underline hover:underline">
                เข้าสู่ระบบ
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
