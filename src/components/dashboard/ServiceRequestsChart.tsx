import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ServiceRequestsChart() {

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      markers: {
        size: 12,
      },
      labels: {
        colors: "#9ca3af",
      }
    },
    colors: ["#465FFF", "#039855"], 
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line", 
      toolbar: {
        show: false, 
      },
    },
    stroke: {
      curve: "straight", 
      width: [2, 2], 
    },
    fill: {
      type: "solid",
      opacity: [1, 1],
    },
    markers: {
      size: 4, 
      strokeColors: "#fff", 
      strokeWidth: 2,
      hover: {
        size: 6, 
      },
    },
    grid: {
      borderColor: "#374151",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false, 
        },
      },
      yaxis: {
        lines: {
          show: true, 
        },
      },
    },
    dataLabels: {
      enabled: false, 
    },
    tooltip: {
      enabled: true, 
      theme: "dark",
    },
    xaxis: {
      type: "category", 
      categories: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      axisBorder: {
        show: false, 
      },
      axisTicks: {
        show: false, 
      },
      labels: {
        style: {
          colors: "#9ca3af",
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px", 
          colors: ["#9ca3af"], 
        },
      },
      title: {
        text: "", 
      },
    },
  };

  const series = [
    {
      name: "الطلبات المكتملة",
      data: [65, 140, 140, 260, 200, 110, 250, 160, 300, 350, 230, 480],
    },
    {
      name: "إجمالي الطلبات",
      data: [360, 370, 360, 460, 510, 570, 470, 340, 550, 410, 660, 856],
    },
  ];
  
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            طلبات الخدمة خلال 12 شهر
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            نظرة عامة على نشاط المنصة
          </p>
        </div>
        <div className="flex items-center gap-3 sm:justify-end">
          <div className="relative inline-flex items-center">
            <select
              className="h-10 lg:w-40 lg:h-auto pl-3 pr-8 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 cursor-pointer appearance-none"
            >
              <option>آخر 12 شهر</option>
              <option>هذا العام</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[700px] xl:min-w-full">
          <Chart options={options} series={series} type="line" height={310} />
        </div>
      </div>
    </div>
  );
}
