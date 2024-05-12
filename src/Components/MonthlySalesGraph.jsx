import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../styles/MonthlySalesGraph.css";

const MonthlySalesGraph = ({ monthlySales }) => {
  const months = monthlySales.map((sale) => getMonthName(sale.month));
  const amounts = monthlySales.map((sale) => sale.amount);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Sales",
        data: amounts,
        fill: false,
        borderColor: "#3e95cd",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
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
    <div className="monthly-sales-graph">
      <h2>Monthly Sales</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const getMonthName = (month) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month - 1]; // Adjust for zero-based index
};

export default MonthlySalesGraph;
