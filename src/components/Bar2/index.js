// https://antv.vision/old-site/g2/doc/tutorial/start/axis.html
import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tDate: [
        { type: '中建国际投资', value: 34 },
        { type: '中国建筑兴业', value: 85 },
        { type: '中建香港', value: 103 },
        { type: '中建澳门', value: 142 },
      ],
    };
  }
  componentDidMount() {
    this.readt();
  }

  readt() {
    const chart = new Chart({
      container: 'container3',
      autoFit: true,
      height: 500,
    });
    chart.data(this.state.tDate);
    chart.scale({
      value: {
        max: 400,
        min: 0,
        alias: '各平台上报情况',
      },
    });

    chart.axis('type', {
      grid: null,
      title: null,
      tickLine: null,
      line: null,
      subTickLine: null,
    });

    chart.axis('value', {
      grid: null, //不显示刻度线
      label: null,
      tickLine: null,
      line: null,
      subTickLine: null,
      title: {
        // offset: 30,
        style: {
          fontSize: 12,
          fontWeight: 300,
        },
      },
    });
    chart.legend(false);
    chart.coordinate().transpose();
    // 珠子上数字
    chart
      .interval()
      .position('type*value')
      .size(26)
      .label('value', {
        style: {
          fill: '#8d8d8d',
        },
        offset: 10,
      });
    chart.interaction('element-active');
    chart.render();
  }
  render() {
    const itemStyle3 = {
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
        <div style={itemStyle3} id="container3"></div>
      </div>
    );
  }
}

export default Hello;
