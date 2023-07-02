"use client"

import ReactApexChart from "react-apexcharts";

/**
 * 
 * @param param0 
 * @returns 
 */
export default function PokeCharts({ stats }: any) {

  var convertedArray = [{
    data: stats.map(function (obj) {
      var dataObj = obj.data[0];
      var dataObj1 = obj.data[1];
      return { x: dataObj1.y, y: dataObj.x };
    })
  }];

  let options = {
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        borderRadius: 2,
      }
    },
    labels: ['HP', 'Ataque', 'Defesa', 'Ataque Especial', 'Defesa Especial', 'Velocidade'],
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: '#e8e8e8',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    }
  }

  console.log(convertedArray);

  return (

    <div id="chart">
      <ReactApexChart
        options={options}
        series={convertedArray}
        type="radar"
        height={300}
        width={400}
      />
    </div>
  )
}