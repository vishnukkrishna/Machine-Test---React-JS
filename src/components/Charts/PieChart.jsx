import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function PieChart() {
  useEffect(() => {
    const dataPie = {
      labels: ["India", "USA", "China"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    const chartPie = new Chart(document.getElementById("chartPie"), configPie);

    return () => {
      chartPie.destroy();
    };
  }, []);

  return (
    <div className="w-full  px-4">
      <div className="rounded-lg overflow-hidden">
        <div className="py-7 px-2 ">Pie chart</div>
        <div
          style={{ position: "relative", width: "90%", paddingBottom: "100%" }}
        >
          <canvas
            id="chartPie"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
