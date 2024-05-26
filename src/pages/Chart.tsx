import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';
import ChartFour from '../components/Charts/ChartFour';
import ChartFive from '../components/Charts/ChartFive';

const Chart: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartFour />
        <ChartTwo />
        <ChartThree />
        <ChartFive />
      </div>
    </DefaultLayout>
  );
};

export default Chart;
