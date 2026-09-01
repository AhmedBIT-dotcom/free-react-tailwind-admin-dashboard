import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function RequestStatusChart() {
  const series = [856, 718, 1145, 3892, 214, 128];
  const labels = [
    "جديدة",
    "قيد الانتظار",
    "قيد التنفيذ",
    "مكتملة",
    "ملغاة",
    "متنازع عليها"
  ];
  const colors = ["#465FFF", "#00B8D9", "#039855", "#F59E0B", "#F43F5E", "#8B5CF6"];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
    },
    colors: colors,
    labels: labels,
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              color: "#9CA3AF",
            },
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 600,
              color: "#F3F4F6",
              formatter: function (val) {
                return val;
              }
            },
            total: {
              show: true,
              showAlways: true,
              label: "إجمالي الطلبات",
              fontSize: "14px",
              color: "#9CA3AF",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          توزيع الطلبات حسب الحالة
        </h3>
        <select className="h-8 pl-2 pr-6 py-1 rounded-md border border-gray-200 bg-white text-xs font-medium text-gray-700 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 cursor-pointer appearance-none">
          <option>هذا الشهر</option>
        </select>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-6">
        <div className="w-full xl:w-1/2 flex justify-center">
          <Chart options={options} series={series} type="donut" width={240} />
        </div>
        
        <div className="w-full xl:w-1/2">
          <ul className="flex flex-col gap-3">
            {labels.map((label, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: colors[index] }}
                  ></span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
                  {series[index]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center border-t border-gray-100 dark:border-gray-800 pt-4">
        <button className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
}
