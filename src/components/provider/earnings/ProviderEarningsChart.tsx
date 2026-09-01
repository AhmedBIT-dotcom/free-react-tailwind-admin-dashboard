import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";

interface ProviderEarningsChartProps {
  isRtl: boolean;
}

export default function ProviderEarningsChart({ isRtl }: ProviderEarningsChartProps) {
  const [activePeriod, setActivePeriod] = useState("month");

  const periods = [
    { id: "week", labelAr: "أسبوع", labelEn: "Week" },
    { id: "month", labelAr: "شهر", labelEn: "Month" },
    { id: "3months", labelAr: "3 أشهر", labelEn: "3 Months" },
    { id: "year", labelAr: "سنة", labelEn: "Year" }
  ];

  const series = [
    {
      name: isRtl ? "الأرباح" : "Earnings",
      data: [310, 400, 280, 510, 420, 1090, 1000, 950, 1200, 1600, 1850, 1700, 1900, 2100, 1800, 2300, 2500, 2200, 2600, 2400, 2700, 2800, 2400, 2200, 1900, 1700, 1800, 2000, 2100],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      fontFamily: "inherit",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#6366f1"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["1 مايو", "", "", "", "5 مايو", "", "", "", "", "10 مايو", "", "", "", "", "15 مايو", "", "", "", "", "20 مايو", "", "", "", "", "25 مايو", "", "", "", "", "30 مايو"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
        },
        formatter: (value) => {
          return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
        },
      },
      title: {
        text: isRtl ? "ر.س" : "SAR",
        style: {
          color: "#64748b",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    grid: {
      borderColor: "#e2e8f0",
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    theme: {
      mode: document.documentElement.classList.contains("dark") ? "dark" : "light",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + (isRtl ? " ر.س" : " SAR");
        },
      },
    },
  };

  // Adjust for dark mode grid line color
  if (document.documentElement.classList.contains("dark") && options.grid) {
    options.grid.borderColor = "#334155";
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white/90 mb-1">
            {isRtl ? "الأرباح" : "Earnings"}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isRtl ? "تحليل الإيرادات خلال الفترة المحددة" : "Revenue performance over the selected period"}
          </p>
        </div>
        
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setActivePeriod(period.id)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activePeriod === period.id
                  ? "bg-white text-brand-600 shadow-sm dark:bg-brand-500 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {isRtl ? period.labelAr : period.labelEn}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[350px]">
        <Chart options={options} series={series} type="area" height="100%" />
      </div>
    </div>
  );
}
