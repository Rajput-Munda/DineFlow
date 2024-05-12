import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../styles/YearlySalesGraph.css";

const YearlySalesGraph = ({ yearlySales }) => {
  const years = yearlySales.map((sale) => sale.year);
  const amounts = yearlySales.map((sale) => sale.amount);

  const data = {
    labels: years.map(String), // Ensure that year values are converted to strings
    datasets: [
      {
        label: "Yearly Sales",
        data: amounts,
        fill: false,
        borderColor: "#3e95cd",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Explicitly set x-axis scale type to "category"
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
      },
    },
  };

  return (
    <div className="yearly-sales-graph">
      <h2>Yearly Sales</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default YearlySalesGraph;
