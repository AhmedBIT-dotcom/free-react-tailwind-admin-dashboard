import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ProviderEarningsChartProps {
  isRtl: boolean;
  isDark: boolean;
}

export default function ProviderEarningsChart({ isRtl, isDark }: ProviderEarningsChartProps) {
  const options: ApexOptions = {
    colors: ["#7a5af8"],
    chart: {
      fontFamily: "inherit",
      type: "area",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: "#7a5af8",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.0,
        stops: [0, 100],
      },
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: "#7a5af8",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      hover: {
        sizeOffset: 2,
      },
    },
    xaxis: {
      categories: isRtl 
        ? ["1 مايو", "8 مايو", "15 مايو", "22 مايو", "31 مايو"]
        : ["1 May", "8 May", "15 May", "22 May", "31 May"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#6b7280",
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: isRtl ? "ر.س" : "SAR",
        style: {
          color: isDark ? "#9ca3af" : "#6b7280",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      labels: {
        style: {
          colors: isDark ? "#9ca3af" : "#6b7280",
          fontSize: "12px",
        },
        formatter: (value) => {
          return new Intl.NumberFormat('en-US').format(value);
        }
      },
      min: 0,
      max: 2000,
      tickAmount: 4,
    },
    grid: {
      borderColor: isDark ? "#1f2937" : "#e5e7eb",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
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
      theme: isDark ? "dark" : "light",
      y: {
        formatter: function (val) {
          return new Intl.NumberFormat('en-US').format(val) + (isRtl ? " ر.س" : " SAR");
        },
      },
    },
  };

  const series = [
    {
      name: isRtl ? "الأرباح" : "Earnings",
      data: [100, 700, 600, 1150, 1050, 1750], // The reference chart has 6 points, categories length is 5 in the prompt but 6 in the array. I'll fix categories.
    },
  ];
  
  // Fix categories to match data length
  options.xaxis!.categories = isRtl
    ? ["1 مايو", "8 مايو", "15 مايو", "22 مايو", "28 مايو", "31 مايو"]
    : ["1 May", "8 May", "15 May", "22 May", "28 May", "31 May"];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg">
          {isRtl ? "نظرة عامة على الأرباح" : "Earnings Overview"}
        </h3>
        
        <div className="relative">
          <select className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block px-3 py-1.5 pr-8 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500 transition-colors">
            <option>{isRtl ? "هذا الشهر" : "This month"}</option>
            <option>{isRtl ? "الشهر الماضي" : "Last month"}</option>
            <option>{isRtl ? "هذا العام" : "This year"}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mt-4 -ml-2 -mr-2">
        <Chart
          options={options}
          series={series}
          type="area"
          height={280}
        />
      </div>
    </div>
  );
}
