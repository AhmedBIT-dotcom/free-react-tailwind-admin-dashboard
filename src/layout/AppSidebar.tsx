import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import {
  GridIcon,
  GroupIcon,
  BoxCubeIcon,
  DocsIcon,
  PlugInIcon,
  DollarLineIcon,
  ShootingStarIcon,
  AlertIcon,
  ChatIcon,
  MailIcon,
  PieChartIcon,
  CalenderIcon,
  HorizontaLDots,
  ChevronDownIcon
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";

type NavItem = {
  nameAr: string;
  nameEn: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { nameAr: string; nameEn: string; path: string; pro?: boolean; new?: boolean }[];
};

const operationsItems: NavItem[] = [
  {
    icon: <GridIcon />,
    nameAr: "لوحة التحكم",
    nameEn: "Dashboard",
    path: "/",
  },
  {
    icon: <GroupIcon />,
    nameAr: "المستخدمون",
    nameEn: "Users",
    subItems: [
      { nameAr: "جميع المستخدمين", nameEn: "All Users", path: "/users" },
      { nameAr: "العملاء", nameEn: "Customers", path: "/users/customers" },
      { nameAr: "مقدمو الخدمات", nameEn: "Service Providers", path: "/users/providers" },
      { nameAr: "المدراء", nameEn: "Administrators", path: "/users/admins" },
    ]
  },
  {
    icon: <BoxCubeIcon />,
    nameAr: "الخدمات",
    nameEn: "Services",
    subItems: [
      { nameAr: "جميع الخدمات", nameEn: "All Services", path: "/services" },
      { nameAr: "إضافة خدمة", nameEn: "Add Service", path: "/services/add" },
      { nameAr: "الفئات", nameEn: "Categories", path: "/services/categories" },
      { nameAr: "المراجعة", nameEn: "Review", path: "/services/review" },
    ]
  },
  {
    icon: <DocsIcon />,
    nameAr: "طلبات الخدمة",
    nameEn: "Service Requests",
    subItems: [
      { nameAr: "جميع الطلبات", nameEn: "All Requests", path: "/service-requests" },
      { nameAr: "جديدة", nameEn: "New", path: "/service-requests/new" },
      { nameAr: "قيد الانتظار", nameEn: "Pending", path: "/service-requests/pending" },
      { nameAr: "مقبولة", nameEn: "Accepted", path: "/service-requests/accepted" },
      { nameAr: "قيد التنفيذ", nameEn: "In Progress", path: "/service-requests/in-progress" },
      { nameAr: "مكتملة", nameEn: "Completed", path: "/service-requests/completed" },
      { nameAr: "ملغاة", nameEn: "Cancelled", path: "/service-requests/cancelled" },
      { nameAr: "متنازع عليها", nameEn: "Disputed", path: "/service-requests/disputed" },
    ]
  },
  {
    icon: <PlugInIcon />,
    nameAr: "مقدمو الخدمات",
    nameEn: "Service Providers",
    subItems: [
      { nameAr: "جميع مقدمي الخدمات", nameEn: "All Providers", path: "/providers" },
      { nameAr: "طلبات الانضمام", nameEn: "Join Requests", path: "/providers/requests" },
      { nameAr: "المعتمدون", nameEn: "Approved", path: "/providers/approved" },
      { nameAr: "الموقوفون", nameEn: "Suspended", path: "/providers/suspended" },
    ]
  },
];

const managementItems: NavItem[] = [
  {
    icon: <DollarLineIcon />,
    nameAr: "المدفوعات",
    nameEn: "Payments",
    subItems: [
      { nameAr: "جميع المدفوعات", nameEn: "All Payments", path: "/payments" },
      { nameAr: "المكتملة", nameEn: "Completed", path: "/payments/completed" },
      { nameAr: "المعلقة", nameEn: "Pending", path: "/payments/pending" },
      { nameAr: "المستردة", nameEn: "Refunded", path: "/payments/refunded" },
    ]
  },
  {
    icon: <ShootingStarIcon />,
    nameAr: "التقييمات",
    nameEn: "Reviews",
    subItems: [
      { nameAr: "جميع التقييمات", nameEn: "All Reviews", path: "/reviews" },
      { nameAr: "التقييمات الجديدة", nameEn: "New Reviews", path: "/reviews/new" },
      { nameAr: "التقييمات المبلغ عنها", nameEn: "Reported Reviews", path: "/reviews/reported" },
    ]
  },
  {
    icon: <AlertIcon />,
    nameAr: "الشكاوى والنزاعات",
    nameEn: "Complaints & Disputes",
    subItems: [
      { nameAr: "جميع الشكاوى", nameEn: "All Complaints", path: "/disputes" },
      { nameAr: "الشكاوى المفتوحة", nameEn: "Open Complaints", path: "/disputes/open" },
      { nameAr: "قيد المعالجة", nameEn: "In Progress", path: "/disputes/progress" },
      { nameAr: "المغلقة", nameEn: "Closed", path: "/disputes/closed" },
    ]
  },
  {
    icon: <ChatIcon />,
    nameAr: "المحادثات",
    nameEn: "Messages",
    subItems: [
      { nameAr: "جميع المحادثات", nameEn: "All Messages", path: "/messages" },
      { nameAr: "المحادثات المبلغ عنها", nameEn: "Reported Messages", path: "/messages/reported" },
    ]
  },
  {
    icon: <MailIcon />,
    nameAr: "الإشعارات",
    nameEn: "Notifications",
    subItems: [
      { nameAr: "جميع الإشعارات", nameEn: "All Notifications", path: "/notifications" },
      { nameAr: "إنشاء إشعار", nameEn: "Create Notification", path: "/notifications/create" },
    ]
  },
];

const analyticsItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    nameAr: "التقارير",
    nameEn: "Reports",
    subItems: [
      { nameAr: "تقارير المستخدمين", nameEn: "User Reports", path: "/reports/users" },
      { nameAr: "تقارير الطلبات", nameEn: "Request Reports", path: "/reports/requests" },
      { nameAr: "تقارير الخدمات", nameEn: "Service Reports", path: "/reports/services" },
      { nameAr: "التقارير المالية", nameEn: "Financial Reports", path: "/reports/financial" },
    ]
  },
];

const otherItems: NavItem[] = [
  {
    icon: <CalenderIcon />,
    nameAr: "التقويم",
    nameEn: "Calendar",
    subItems: [
      { nameAr: "جميع المواعيد", nameEn: "All Appointments", path: "/calendar" },
      { nameAr: "المواعيد القادمة", nameEn: "Upcoming Appointments", path: "/calendar/upcoming" },
    ]
  },
  {
    icon: <HorizontaLDots />,
    nameAr: "الإعدادات",
    nameEn: "Settings",
    subItems: [
      { nameAr: "إعدادات النظام", nameEn: "System Settings", path: "/settings/system" },
      { nameAr: "إعدادات الحساب", nameEn: "Account Settings", path: "/settings/account" },
      { nameAr: "الإشعارات", nameEn: "Notifications", path: "/settings/notifications" },
    ]
  },
];

const menuGroups = [
  { titleAr: "العمليات", titleEn: "OPERATIONS", items: operationsItems, menuType: "operations" },
  { titleAr: "الإدارة", titleEn: "MANAGEMENT", items: managementItems, menuType: "management" },
  { titleAr: "التحليلات", titleEn: "ANALYTICS", items: analyticsItems, menuType: "analytics" },
  { titleAr: "أخرى", titleEn: "OTHER", items: otherItems, menuType: "other" },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const [isRtl, setIsRtl] = useState(document.documentElement.dir === "rtl");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: string;
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => location.pathname === path;
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    menuGroups.forEach((group) => {
      group.items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: group.menuType,
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: string) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (items: NavItem[], menuType: string) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.nameEn}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size  ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text font-medium text-gray-900 dark:text-white">{isRtl ? nav.nameAr : nav.nameEn}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text font-medium text-gray-900 dark:text-white">{isRtl ? nav.nameAr : nav.nameEn}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.nameEn}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {isRtl ? subItem.nameAr : subItem.nameEn}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <img
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <img
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {menuGroups.map((group) => (
              <div key={group.menuType}>
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] font-semibold text-gray-800 dark:text-gray-200 ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "justify-start"
                  }`}
                >
                  {isExpanded || isHovered || isMobileOpen ? (
                    isRtl ? group.titleAr : group.titleEn
                  ) : (
                    <HorizontaLDots className="size-6" />
                  )}
                </h2>
                {renderMenuItems(group.items, group.menuType)}
              </div>
            ))}
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
