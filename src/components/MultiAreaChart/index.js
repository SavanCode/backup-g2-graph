import React, { Component } from 'react';
import { Chart } from '@antv/g2';

class MultiAreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { country: 'Asia', year: '1750', value: 502 },
        { country: 'Asia', year: '1800', value: 635 },
        { country: 'Asia', year: '1850', value: 809 },
        { country: 'Asia', year: '1900', value: 5268 },
        { country: 'Asia', year: '1950', value: 4400 },
        { country: 'Asia', year: '1999', value: 3634 },
        { country: 'Asia', year: '2050', value: 947 },
        { country: 'Africa', year: '1750', value: 106 },
        { country: 'Africa', year: '1800', value: 107 },
        { country: 'Africa', year: '1850', value: 111 },
        { country: 'Africa', year: '1900', value: 1766 },
        { country: 'Africa', year: '1950', value: 221 },
        { country: 'Africa', year: '1999', value: 767 },
        { country: 'Africa', year: '2050', value: 133 },
        { country: 'Europe', year: '1750', value: 163 },
        { country: 'Europe', year: '1800', value: 203 },
        { country: 'Europe', year: '1850', value: 276 },
        { country: 'Europe', year: '1900', value: 628 },
        { country: 'Europe', year: '1950', value: 547 },
        { country: 'Europe', year: '1999', value: 729 },
        { country: 'Europe', year: '2050', value: 408 },
        { country: 'Oceania', year: '1750', value: 200 },
        { country: 'Oceania', year: '1800', value: 200 },
        { country: 'Oceania', year: '1850', value: 200 },
        { country: 'Oceania', year: '1900', value: 460 },
        { country: 'Oceania', year: '1950', value: 230 },
        { country: 'Oceania', year: '1999', value: 300 },
        { country: 'Oceania', year: '2050', value: 300 },
      ],
    };
  }
  componentDidMount() {
    this.readHistogram();
  }
  readHistogram() {
    const chart = new Chart({
      container: 'multi-area-chart-container',
      autoFit: true,
      height: 500,
    });

    chart.data(this.state.data);
    chart.scale('year', {
      type: 'linear',
      tickInterval: 50,
    });
    chart.scale('value', {
      nice: true,
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.area().adjust('stack').position('year*value').color('country');
    chart.line().adjust('stack').position('year*value').color('country');

    chart.interaction('element-highlight');

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
        <div style={itemStyle} id="multi-area-chart-container"></div>
      </div>
    );
  }
}

export default MultiAreaChart;
