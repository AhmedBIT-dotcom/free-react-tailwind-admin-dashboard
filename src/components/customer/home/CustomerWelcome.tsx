import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const CustomerWelcome: React.FC = () => {
  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-brand-900 rounded-2xl shadow-theme-sm mb-6 dark:bg-gray-900 border border-transparent dark:border-gray-800">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/cover/cover-01.png')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative z-10 px-6 py-10 md:px-10 lg:py-14 flex flex-col items-center md:items-start text-center md:text-start">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {isRtl ? "مرحباً سارة 👋" : "Welcome Sarah 👋"}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-3">
          {isRtl ? "ماذا تريد إنجاز اليوم؟" : "What do you want to get done today?"}
        </h2>
        <p className="text-brand-100 dark:text-gray-300 mb-8 max-w-xl">
          {isRtl
            ? "اكتشف أفضل الخدمات والمهنيين الموثوقين في منطقتك."
            : "Discover the best services and trusted professionals in your area."}
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-2 rounded-xl flex items-center border border-white/20 dark:border-gray-700/50">
          <input
            type="text"
            placeholder={isRtl ? "ما الخدمة التي تبحث عنها؟" : "What service are you looking for?"}
            className="flex-grow bg-transparent text-white placeholder:text-white/60 px-4 py-3 outline-hidden border-none focus:ring-0 text-base"
          />
          <Link
            to="/customer/search"
            className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-theme-xs"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.9999 21L16.6499 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="hidden sm:inline">{isRtl ? "بحث" : "Search"}</span>
          </Link>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-6">
          <span className="text-sm text-brand-100/80 dark:text-gray-400">
            {isRtl ? "الأكثر بحثاً:" : "Popular:"}
          </span>
          {["تنظيف المنازل", "السباكة", "الكهرباء", "الدهانات", "نقل العفش"].map((item, index) => (
            <Link
              key={index}
              to="/customer/search"
              className="text-xs md:text-sm bg-white/10 hover:bg-white/20 dark:bg-gray-800/60 dark:hover:bg-gray-700 text-white px-3 py-1.5 rounded-full transition-colors border border-white/10"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerWelcome;
