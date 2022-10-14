import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Customize1() {
  const canvasElLine = useRef(null);
  const canvasElPie = useRef(null);

  useEffect(() => {
    const ctxLine = canvasElLine.current.getContext("2d");
    const ctxPie = canvasElPie.current.getContext("2d");

    const weightLine = [
      60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2,
    ];
    const weightPie = [
      10, 20.2, 19.1, 81.4, 98.2, 40.8, 18.6, 39.6, 59.2, 100.5,
    ];
    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ];
    const dataLine = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: weightLine,
          backgroundColor: "#EFCAF7",
          borderWidth: 2,
          borderColor: "#dcbef1",
          lineTension: 0.1,
          pointBackgroundColor: "#800080",
          pointRadius: 3,
        },
      ],
    };
    const dataPie = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: weightPie,
          backgroundColor: [
            "#9a21c6",
            "#eacd01",
            "#f5f5dc",
            "#d9e2d7",
            "#95ae8d",
            "#0daeff",
            "#d5128a",
            "#cd7f32",
            "#E7A1A3",
            "#A1A7E7",
          ],
          borderWidth: 2,
          borderColor: "#F7F1CA",
          lineTension: 0.1,
          pointBackgroundColor: "#800080",
          pointRadius: 3,
        },
      ],
    };
    const configLine = {
      type: "line",
      data: dataLine,
    };
    const configPie = {
      type: "pie",
      data: dataPie,
    };
    const myLineChart = new Chart(ctxLine, configLine);
    const myPieChart = new Chart(ctxPie, configPie);

    return function cleanup() {
      myLineChart.destroy();
      myPieChart.destroy();
    };
  });
  return (
    <div>
      <div className="grid place-items-center mt-10">
        <div className="text-3xl">Chart</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 px-0 sm:px-20 w-full">
          <div className="px-2 sm:grid sm:place-items-center">
            <canvas ref={canvasElLine} />
          </div>
          <div className="pt-10 sm:pt-0">
            <canvas ref={canvasElPie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize1;
