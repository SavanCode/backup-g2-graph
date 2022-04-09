import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { type: '流动人员', value: 56.4 },
        // { type: '女性', value: 43.6 },
      ],
    };
  }
  componentDidMount() {
    this.readHistogram();
  }
  readHistogram() {
    //渲染
    const chart = new Chart({
      container: 'containerCircle',
      autoFit: true,
    });
    //放数据
    chart.data(this.state.data);
    //美化
    chart.scale('休假出差流动人口', {
      nice: true,
    });
    chart.legend({
      position: 'bottom', // 设置图例的显示位置
      spacingX: 20, // 图例项之间的水平间距
    });
    chart.tooltip({
      showMarkers: false,
      shared: true,
    });
    chart.facet('rect', {
      fields: ['type'],
      padding: 20,
      showTitle: false,
      eachView: (view, facet) => {
        const data = facet.data;
        let color;
        if (data[0].type === '流动人员') {
          color = '#0a9afe';
        } else {
          color = '#f0657d';
        }
        data.push({ type: '固定人员', value: 100 - data[0].value });
        view.data(data);
        view.coordinate('theta', {
          radius: 0.8,
          innerRadius: 0.5,
        });
        view
          .interval()
          .adjust('stack')
          .position('value')
          .color('type', [color, '#eceef1'])
          .style({
            opacity: 1,
          });
        view.annotation().text({
          position: ['50%', '50%'],
          content: data[0].type,
          style: {
            fontSize: 12,
            fill: '#8c8c8c',
            fontWeight: 300,
            textBaseline: 'bottom',
            textAlign: 'center',
          },
          offsetY: -12,
        });

        view.annotation().text({
          position: ['50%', '50%'],
          content: data[0].value,
          style: {
            fontSize: 18,
            fill: '#000',
            fontWeight: 500,
            textAlign: 'center',
          },
          offsetY: 10,
        });

        view.interaction('element-active');
      },
    });
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
        <div style={itemStyle} id="containerCircle"></div>
      </div>
    );
  }
}

export default Hello;
