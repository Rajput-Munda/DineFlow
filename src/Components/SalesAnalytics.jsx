import React, { useState, useEffect } from "react";
import HighestSellingItems from "./HighestSellingItems";
import YearlySalesGraph from "./YearlySalesGraph";
import MonthlySalesGraph from "./MonthlySalesGraph";
import DailySalesGraph from "./DailySalesGraph";

const SalesAnalyticsPage = () => {
  const [highestSellingItems, setHighestSellingItems] = useState([]);
  const [yearlySales, setYearlySales] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);
  const [dailySales, setDailySales] = useState([]);

  const fetchHighestSellingItems = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/orders/getHighestSellingMenuItems"
      );
      const data = await response.json();
      setHighestSellingItems(data);
    } catch (error) {
      console.error("Error fetching highest selling items:", error);
    }
  };

  const fetchYearlySales = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/orders/getYearlySales"
      );
      const data = await response.json();
      console.log(data);
      setYearlySales(data);
    } catch (error) {
      console.error("Error fetching yearly sales:", error);
    }
  };
  const fetchMonthlySales = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/orders/getMonthlySales"
      );
      const data = await response.json();
      console.log(data);
      setMonthlySales(data);
    } catch (error) {
      console.error("Error fetching monthly sales:", error);
    }
  };

  const fetchDailySales = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/orders/getDailySales"
      );
      const data = await response.json();
      console.log(data);
      setDailySales(data);
    } catch (error) {
      console.error("Error fetching monthly sales:", error);
    }
  };

  useEffect(() => {
    fetchDailySales()
    fetchMonthlySales();
    fetchHighestSellingItems();
    fetchYearlySales();
  }, []);

  return (
    <div>
      <YearlySalesGraph yearlySales={yearlySales} />
      <MonthlySalesGraph monthlySales={monthlySales} />
      <DailySalesGraph dailySales={dailySales} />
      <HighestSellingItems highestSellingItems={highestSellingItems} />
    </div>
  );
};

export default SalesAnalyticsPage;
