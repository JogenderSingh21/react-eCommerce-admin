import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartSeries {
  name: string;
  data: number[];
}

interface ChartState {
  series: ChartSeries[];
  options: ApexOptions;
}

const ChartFour: React.FC = () => {
  const [chartState, setChartState] = React.useState<ChartState>({
    series: [
      {
        name: 'Completed',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Pending',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: 'Unpaid',
        data: [21, 50, 28, 32, 20, 10, 45],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <h2 className="text-black dark:text-white text-xl font-bold">
            Sales Performance
          </h2>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Today's
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Monthly
            </button>
          </div>
        </div>
      </div>
      <div className="w-full" id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartFour;
