// data.js

export const data2023 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "2023",
        data: [25, 32, 68, 51, 53, 49, 70],
        fill: false,
        tension: 0.2,
        borderColor: "#42a5f5",
        backgroundColor: "#90caf9",
      },
    ],
  };
  
  export const data2024 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "2024",
        data: [10, 28, 37, 17, 42, 55, 20],
        fill: false,
        tension: 0.2,
        borderColor: "#8b5cf6",
        backgroundColor: "#ede9fe",
      },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Example",
      },
    },
  };
  