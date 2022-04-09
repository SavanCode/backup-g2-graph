import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: '总上报人数', 月份: '8月', 月均降雨量: 189 },
        { name: '总上报人数', 月份: '9月', 月均降雨量: 288 },
        { name: '总上报人数', 月份: '10月', 月均降雨量: 393 },
        { name: '总上报人数', 月份: '11月', 月均降雨量: 814 },
        { name: '总上报人数', 月份: '12月', 月均降雨量: 147 },
        { name: '总上报人数', 月份: '1月', 月均降雨量: 203 },
        { name: '总上报人数', 月份: '2月', 月均降雨量: 240 },
        { name: '总上报人数', 月份: '3月', 月均降雨量: 356 },
        { name: '总上报人数', 月份: '8月', 月均降雨量: 124 },
        { name: '未上报人数', 月份: '8月', 月均降雨量: 189 },
        { name: '未上报人数', 月份: '9月', 月均降雨量: 288 },
        { name: '未上报人数', 月份: '10月', 月均降雨量: 393 },
        { name: '未上报人数', 月份: '11月', 月均降雨量: 814 },
        { name: '未上报人数', 月份: '12月', 月均降雨量: 47 },
        { name: '未上报人数', 月份: '1月', 月均降雨量: 203 },
        { name: '未上报人数', 月份: '2月', 月均降雨量: 24 },
        { name: '未上报人数', 月份: '3月', 月均降雨量: 356 },
        { name: '未上报人数', 月份: '8月', 月均降雨量: 124 },
        { name: '健康', 月份: '8月', 月均降雨量: 189 },
        { name: '健康', 月份: '9月', 月均降雨量: 288 },
        { name: '健康', 月份: '10月', 月均降雨量: 39 },
        { name: '健康', 月份: '11月', 月均降雨量: 814 },
        { name: '健康', 月份: '12月', 月均降雨量: 47 },
        { name: '健康', 月份: '1月', 月均降雨量: 203 },
        { name: '健康', 月份: '2月', 月均降雨量: 24 },
        { name: '健康', 月份: '3月', 月均降雨量: 356 },
        { name: '健康异常', 月份: '8月', 月均降雨量: 124 },
        { name: '健康异常', 月份: '8月', 月均降雨量: 189 },
        { name: '健康异常', 月份: '9月', 月均降雨量: 288 },
        { name: '健康异常', 月份: '10月', 月均降雨量: 393 },
        { name: '健康异常', 月份: '11月', 月均降雨量: 814 },
        { name: '健康异常', 月份: '12月', 月均降雨量: 47 },
        { name: '健康异常', 月份: '1月', 月均降雨量: 203 },
        { name: '健康异常', 月份: '2月', 月均降雨量: 24 },
        { name: '健康异常', 月份: '3月', 月均降雨量: 356 },
        { name: '健康异常', 月份: '8月', 月均降雨量: 124 },
      ],
    };
  }
  componentDidMount() {
    this.readHistogram();
  }
  readHistogram() {
    const chart = new Chart({
      container: 'container',
      autoFit: true,
    });
    chart.data(this.state.data);
    chart.scale('员工上报情况', {
      nice: true,
    });
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });

    chart
      .interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);

    chart.interaction('active-region');
    chart.render();
  }

  render() {
    const itemStyle = {
      width: '100vw',
      height: '50vh',
      border: '1px solid #ccc',
    };
    const divStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    };
    return (
      <div style={divStyle}>
        <div style={itemStyle} id="container"></div>
      </div>
    );
  }
}

export default Hello;
