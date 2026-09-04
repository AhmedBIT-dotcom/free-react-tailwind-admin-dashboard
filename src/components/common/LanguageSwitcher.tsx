import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="flex items-center justify-center w-auto px-3 h-10 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      {language === "en" ? "العربية" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
