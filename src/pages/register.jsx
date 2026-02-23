import { Link } from "react-router";

export default function Register() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl card lg:card-side bg-base-100 shadow-xl overflow-hidden">
        {/* Left - Banner */}
        <div className="lg:w-1/2 bg-gradient-to-br from-primary to-secondary text-primary-content p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight">
              Create your account
            </h1>
            <p className="mt-3 opacity-90">
              สมัครสมาชิกเพื่อเริ่มใช้งานระบบของทีมคุณ
              พร้อมจัดการโปรเจกต์ได้ง่ายขึ้น
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="badge badge-outline badge-lg">✓</span>
                <span className="opacity-90">ใช้งานได้ทันทีหลังสมัคร</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="badge badge-outline badge-lg">✓</span>
                <span className="opacity-90">ปลอดภัยด้วยรหัสผ่าน</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="badge badge-outline badge-lg">✓</span>
                <span className="opacity-90">พร้อมเชื่อมต่อ API ภายหลัง</span>
              </div>
            </div>
          </div>

          <p className="text-sm opacity-80 mt-10">
            © {new Date().getFullYear()} Your App
          </p>
        </div>

        {/* Right - Form */}
        <div className="lg:w-1/2 p-8 sm:p-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">Sign up</h2>
              <p className="text-sm opacity-70 mt-1">
                กรอกข้อมูลเพื่อสร้างบัญชีใหม่
              </p>
            </div>
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
          </div>

          <form className="mt-8 space-y-4">
            {/* Fullname */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Full name</span>
              </div>
              <input
                type="text"
                placeholder="เช่น Satu Naja"
                className="input input-bordered w-full"
                autoComplete="name"
              />
            </label>

            {/* Email */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Email</span>
              </div>
              <input
                type="email"
                placeholder="name@email.com"
                className="input input-bordered w-full"
                autoComplete="email"
              />
            </label>

            {/* Password */}
            <label className="form-control w-full">
              <div className="label flex justify-between">
                <span className="label-text font-medium">Password</span>
                <span className="label-text-alt opacity-70">
                  อย่างน้อย 8 ตัว
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                autoComplete="new-password"
              />
            </label>

            {/* Confirm Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Confirm password</span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                autoComplete="new-password"
              />
            </label>

            {/* Terms */}
            <label className="label cursor-pointer justify-start gap-3">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text">
                ยอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว
              </span>
            </label>

            <button type="button" className="btn btn-primary w-full">
              Create account
            </button>

            <div className="divider text-xs opacity-60">OR</div>

            <button type="button" className="btn btn-outline w-full">
              Continue with Google
            </button>

            <p className="text-sm text-center mt-4">
              มีบัญชีอยู่แล้ว?
              <Link to="/login" className="link link-primary ml-1">
                เข้าสู่ระบบ
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
