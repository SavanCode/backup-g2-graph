import React from 'react';
import './style.css';
import Line from './components/Line';
import './components/circles';
import BarChart from './components/Bar';
import AnotherBar from './components/Bar2';
import Bar3 from './components/Bar3';
import Bar4 from './components/Bar4';
import Pie from './components/Pie';
import Circle from './components/Circle';
import Circle2 from './components/Circle/circle2';
// import Map from './components/Map';
import Areachart from './components/AreaChart';
import Multipleviewchart from './components/MultipleView';
import CircleBar from './components/CircleBar';
import MultiAreaChart from './components/MultiAreaChart';
import BarSample from './components/BarSample';
// import PieSample from './components/Pie';

const lineStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default function App() {
  let data = [
    { type: '未知', value: 654, percent: 0.02 },
    { type: '17 岁以下', value: 654, percent: 0.02 },
    { type: '18-24 岁', value: 4400, percent: 0.2 },
    { type: '25-29 岁', value: 5300, percent: 0.24 },
    { type: '30-39 岁', value: 6200, percent: 0.28 },
    { type: '40-49 岁', value: 3300, percent: 0.14 },
    { type: '50 岁以上', value: 1500, percent: 0.06 },
  ];
  let pieData = [
    { item: '事例一', count: 40, percent: 0.4, percentNum: 0.4 },
    { item: '事例二', count: 21, percent: 0.21, percentNum: 0.21 },
    { item: '事例三', count: 17, percent: 0.17, percentNum: 0.17 },
    { item: '事例四', count: 13, percent: 0.13, percentNum: 0.13 },
    { item: '事例五', count: 9, percent: 0.09, percentNum: 0.09 },
  ];
  const colorMap = {
    事例一: '#D66262',
    事例二: '#D2B260',
    事例三: '#274ed9',
    事例四: '#37A38E',
    事例五: '#9d62e9',
  };
  const labelColor = 'black';
  const itemStyle = {
    width: '100vw',
    height: '50vh',
    border: '1px solid #ccc',
  };
  return (
    <>
      <AnotherBar />
      <div style={lineStyles}>
        <h2>This is the Line Graph</h2>
        <Line />
      </div>
      <BarChart />
      <Pie />
      <Circle />
      <Circle2 />
      <Bar3 />
      <Bar4 />
      {/* <Map /> */}
      <Areachart />
      <Multipleviewchart />
      <CircleBar />
      <MultiAreaChart />
      component Sample
      <BarSample
        data={data}
        itemStyle={itemStyle}
        containerName="BarSample"
        tooltipTitle="销售额(万)"
        x="type"
        y="value"
        contentExtra="percent"
        xLabelColor="black"
        barTextStyle={{ textAlign: 'center', fill: 'red' }}
      />
            
      {/* <PieSample
        itemStyle={itemStyle}
        data={pieData}
        containerName="PieSample"
        legendStyle={{
          position: 'bottom', // 设置图例的显示位置
          spacingX: 20, // 图例项之间的水平间距
          itemName: {
            style: {
              fill: 'red',
            },
          },
        }}
        colorMap={colorMap}
        labelColor={labelColor}
      /> */}
    </>
  );
}
