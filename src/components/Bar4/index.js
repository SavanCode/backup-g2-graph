import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tDate: [
        { type: '未知', value: 654, percent: 0.02 },
        { type: '17 岁以下', value: 654, percent: 0.02 },
        { type: '18-24 岁', value: 4400, percent: 0.2 },
        { type: '25-29 岁', value: 5300, percent: 0.24 },
        { type: '30-39 岁', value: 6200, percent: 0.28 },
        { type: '40-49 岁', value: 3300, percent: 0.14 },
        { type: '50 岁以上', value: 1500, percent: 0.06 },
      ],
    };
  }
  componentDidMount() {
    this.readt();
  }

  readt() {
    const chart = new Chart({
      container: 'containerBar4',
      autoFit: true,
      height: 500,
      padding: [50, 20, 50, 20],
    });
    chart.data(this.state.tDate);
    chart.scale('value', {
      alias: '销售额(万)',
    });

    chart.axis('type', {
      tickLine: {
        alignTick: false,
      },
    });
    chart.axis('value', false);

    chart.tooltip({
      showMarkers: false,
    });
    chart.interval().position('type*value');
    chart.interaction('element-active');

    // 添加文本标注
    this.state.tDate.forEach((item) => {
      chart
        .annotation()
        .text({
          position: [item.type, item.value],
          content: item.value,
          style: {
            textAlign: 'center',
          },
          offsetY: -30,
        })
        .text({
          position: [item.type, item.value],
          content: (item.percent * 100).toFixed(0) + '%',
          style: {
            textAlign: 'center',
          },
          offsetY: -12,
        });
    });
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
        <div style={itemStyle3} id="containerBar4"></div>
      </div>
    );
  }
}

export default Hello;
