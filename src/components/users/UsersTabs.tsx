export default function UsersTabs() {
  const tabs = [
    { id: "all", label: "جميع المستخدمين", active: true },
    { id: "customers", label: "العملاء", active: false },
    { id: "providers", label: "مقدمو الخدمات", active: false },
    { id: "admins", label: "المدراء", active: false },
  ];

  return (
    <div className="flex items-center overflow-x-auto border-b border-gray-200 dark:border-gray-800 custom-scrollbar hide-scrollbar w-full mt-2">
      <ul className="flex items-center gap-1 min-w-max px-1">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 relative ${
                tab.active
                  ? "text-brand-500 border-brand-500"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
