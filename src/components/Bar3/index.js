// https://antv.vision/old-site/g2/doc/tutorial/start/axis.html
import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tDate: [
        {
          time: '16 Q1',
          type: '移动游戏',
          value: 30,
        },
        {
          time: '16 Q1',
          type: '移动购物',
          value: 70,
        },
        {
          time: '16 Q2',
          type: '移动游戏',
          value: 30,
        },
        {
          time: '16 Q2',
          type: '移动购物',
          value: 70,
        },
        {
          time: '16 Q3',
          type: '移动游戏',
          value: 30,
        },
        {
          time: '16 Q3',
          type: '移动购物',
          value: 70,
        },
        {
          time: '16 Q4',
          type: '移动游戏',
          value: 20,
        },
        {
          time: '16 Q4',
          type: '移动购物',
          value: 80,
        },
        {
          time: '17 Q1',
          type: '移动游戏',
          value: 10,
        },
        {
          time: '17 Q1',
          type: '移动购物',
          value: 90,
        },
        {
          time: '17 Q2',
          type: '移动游戏',
          value: 10,
        },
        {
          time: '17 Q2',
          type: '移动购物',
          value: 90,
        },
      ],
    };
  }
  componentDidMount() {
    this.readt();
  }

  readt() {
    // Step 1: 创建 Chart 对象
    const chart = new Chart({
      container: 'containerBar3',
      autoFit: true,
      height: 500,
      padding: 'auto',
    });
    // Step 2: 载入数据源
    chart.data(this.state.tDate);
    chart.scale({
      value: {
        max: 100,
        min: 0,
        alias: '细分结构占比',
        nice: true,
      },
    });
    chart.tooltip({
      shared: true,
      showMarkers: false,
    });
    chart.axis('time', {
      label: {
        textStyle: {
          fill: '#aaaaaa',
        },
      },
      tickLine: {
        alignWithLabel: false,
        length: 0,
      },
    });

    chart.axis('value', false);

    chart.legend({
      position: 'bottom', // 设置图例的显示位置
      spacingX: 20, // 图例项之间的水平间距
    });

    chart.coordinate().transpose();
    // 珠子上数字
    // Step 3：创建图形语法，绘制柱状图，由 time 和 value 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart
      .interval()
      .adjust('stack')
      .position('time*value')
      .color('type', ['#40a9ff', '#1890ff'])
      .label('value', (val) => {
        if (val < 10) {
          return null;
        }
        return {
          position: 'middle',
          offset: 0,
          content: (originData) => {
            return originData.value + '%';
          },
          style: {
            fill: '#fff',
          },
        };
      });

    chart.interaction('active-region');
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
        <div style={itemStyle3} id="containerBar3"></div>
      </div>
    );
  }
}

export default Hello;
