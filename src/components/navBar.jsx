import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Sun, Moon } from 'lucide-react';

const navBar = () => {
    // Theme state
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    // Handle theme logic
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <div className="navbar bg-base-100 px-4 md:px-8 border-b sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base">
                        <li><Link to="/">หน้าหลัก</Link></li>
                        <li><Link to="/learn">เรียนรู้การใช้งาน</Link></li>
                        <li><Link to="/about">เกี่ยวกับเรา</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2 hover:bg-transparent pl-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3b0764] via-[#7e22ce] to-[#c026d3] flex items-center justify-center text-white font-bold italic text-lg shadow-md relative overflow-hidden">
                        <span className="relative z-10 -ml-1 mt-1">T</span>
                        <div className="absolute w-2 h-2 bg-pink-400 rounded-full top-2 right-2 blur-[1px]"></div>
                        <div className="absolute w-1 h-3 bg-white rotate-45 bottom-1 right-2 opacity-80"></div>
                    </div>
                    <span className="font-bold text-lg hidden sm:block text-primary tracking-tight">T-Check</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-medium space-x-2">
                    <li><Link to="/">หน้าหลัก</Link></li>
                    <li><Link to="/learn">เรียนรู้การใช้งาน</Link></li>
                    <li><Link to="/about">เกี่ยวกับเรา</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2 sm:gap-4 flex items-center">
                <label className="swap swap-rotate btn btn-ghost btn-circle">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={handleToggle} checked={theme === 'dark'} />

                    {/* sun icon */}
                    <Sun className="swap-off h-5 w-5" />

                    {/* moon icon */}
                    <Moon className="swap-on h-5 w-5" />
                </label>
                <div className="flex items-center gap-2">
                    <Link to="/login" className="btn btn-outline btn-primary rounded-md px-6 hidden sm:flex font-medium">เข้าสู่ระบบ</Link>
                    <Link to="/register" className="btn btn-primary text-primary-content rounded-md px-6 font-medium tracking-wide">สมัครสมาชิก</Link>
                </div>
            </div>
        </div>
    );
};

export default navBar