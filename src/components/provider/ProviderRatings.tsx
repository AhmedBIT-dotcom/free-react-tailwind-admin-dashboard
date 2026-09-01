import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ProviderRatingsProps {
  isRtl: boolean;
  isDark: boolean;
}

export default function ProviderRatings({ isRtl, isDark }: ProviderRatingsProps) {
  const options: ApexOptions = {
    colors: ["#7a5af8", "#3b82f6", "#ec4899", "#f59e0b", "#ef4444"],
    chart: {
      fontFamily: "inherit",
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              fontWeight: 500,
              color: isDark ? "#9ca3af" : "#6b7280",
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "32px",
              fontWeight: 700,
              color: isDark ? "#fff" : "#1f2937",
              offsetY: -10,
              formatter: () => "4.8",
            },
            total: {
              show: true,
              showAlways: true,
              label: isRtl ? "من 5" : "out of 5",
              fontSize: "14px",
              fontWeight: 500,
              color: isDark ? "#9ca3af" : "#6b7280",
              formatter: () => "4.8",
            }
          }
        }
      }
    },
    labels: isRtl 
      ? ["5 نجوم", "4 نجوم", "3 نجوم", "نجمتين", "نجمة واحدة"]
      : ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      colors: isDark ? ["#1f2937"] : ["#ffffff"],
      width: 2,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
      y: {
        formatter: (val) => `${val}%`,
      }
    },
  };

  const series = [70, 20, 7, 2, 1];

  const ratingBars = [
    { label: isRtl ? "5 نجوم" : "5 stars", value: 70, color: "bg-[#7a5af8]" },
    { label: isRtl ? "4 نجوم" : "4 stars", value: 20, color: "bg-[#3b82f6]" },
    { label: isRtl ? "3 نجوم" : "3 stars", value: 7, color: "bg-[#ec4899]" },
    { label: isRtl ? "2 نجوم" : "2 stars", value: 2, color: "bg-[#f59e0b]" },
    { label: isRtl ? "1 نجمة" : "1 star", value: 1, color: "bg-[#ef4444]" },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 dark:text-white/90 text-lg">
          {isRtl ? "تقييم العملاء" : "Customer Ratings"}
        </h3>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-grow">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Chart
            options={options}
            series={series}
            type="donut"
            width={240}
          />
        </div>
        
        <div className="w-full sm:w-1/2 flex flex-col gap-3">
          {ratingBars.map((rating, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-16 flex-shrink-0">
                %{rating.value}
              </span>
              <div className="flex-grow bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${rating.color} rounded-full`} 
                  style={{ width: `${rating.value}%` }}
                />
              </div>
              <span className={`text-sm text-gray-500 dark:text-gray-400 w-16 flex-shrink-0 ${isRtl ? 'text-left' : 'text-right'}`}>
                {rating.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
        <button className="text-sm text-brand-500 dark:text-brand-400 hover:underline flex items-center justify-center gap-1 w-full">
          {isRtl ? "عرض كل التقييمات" : "View All Ratings"}
          <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
