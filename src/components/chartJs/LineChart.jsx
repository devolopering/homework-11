import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { data2023, data2024, options } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const [yearFilter, setYearFilter] = useState("all");


  const filteredData = {
    labels: data2023.labels, 
    datasets: yearFilter === 'all'
      ? [data2023.datasets[0], data2024.datasets[0]]  
      : yearFilter === '2023'
      ? [data2023.datasets[0]] 
      : [data2024.datasets[0]], 
  };

  return (
    <div>
      <Line data={filteredData} options={options} />
      <div className="flex gap-4 mt-4">
        <button
          className={`px-4 py-2 ${yearFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 "} rounded`}
          onClick={() => setYearFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 ${yearFilter === "2023" ? "bg-blue-600 text-white" : "bg-gray-200"} rounded`}
          onClick={() => setYearFilter("2023")}
        >
          2023
        </button>
        <button
          className={`px-4 py-2 ${yearFilter === "2024" ? "bg-blue-600 text-white" : "bg-gray-200"} rounded`}
          onClick={() => setYearFilter("2024")}
        >
          2024
        </button>
      </div>
    </div>
  );
};

export default LineChart;
