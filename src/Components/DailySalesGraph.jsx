import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../styles/DailySalesGraph.css";

const DailySalesGraph = ({ dailySales }) => {
  // Extracting dates and amounts from dailySales
  const dates = dailySales.map((sale) => sale.date);
  const amounts = dailySales.map((sale) => sale.amount);

  // Creating the data object for Chart.js
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Daily Sales",
        data: amounts,
        fill: false,
        borderColor: "#3e95cd",
      },
    ],
  };

  // Options for customizing the axes
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#333",
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
          color: "#333",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="daily-sales-graph">
      <h2>Daily Sales</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DailySalesGraph;
