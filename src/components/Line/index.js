// import React, { Component } from 'react';
// import { Chart } from '@antv/g2';
// class Hello extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         { month: 'Jan', city: 'Tokyo', temperature: 7 },
//         { month: 'Jan', city: 'London', temperature: 3.9 },
//         { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
//         { month: 'Feb', city: 'London', temperature: 4.2 },
//         { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
//         { month: 'Mar', city: 'London', temperature: 5.7 },
//         { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
//         { month: 'Apr', city: 'London', temperature: 8.5 },
//         { month: 'May', city: 'Tokyo', temperature: 18.4 },
//         { month: 'May', city: 'London', temperature: 11.9 },
//         { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
//         { month: 'Jun', city: 'London', temperature: 15.2 },
//         { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
//         { month: 'Jul', city: 'London', temperature: 17 },
//         { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
//         { month: 'Aug', city: 'London', temperature: 16.6 },
//         { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
//         { month: 'Sep', city: 'London', temperature: 14.2 },
//         { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
//         { month: 'Oct', city: 'London', temperature: 10.3 },
//         { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
//         { month: 'Nov', city: 'London', temperature: 6.6 },
//         { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
//         { month: 'Dec', city: 'London', temperature: 4.8 },
//       ],
//     };
//   }
//   componentDidMount() {
//     this.readHistogram();
//   }
//   readHistogram() {
//     const chart = new Chart({
//       container: 'line-chart',
//       autoFit: true,
//       height: 500,
//     });

//     chart.data(this.state.data);
//     chart.scale({
//       month: {
//         range: [0, 1],
//       },
//       temperature: {
//         nice: true,
//       },
//     });

//     chart.tooltip({
//       showCrosshairs: true,
//       shared: true,
//     });

//     chart.axis('temperature', {
//       label: {
//         formatter: (val) => {
//           return val + ' °C';
//         },
//       },
//     });

//     chart.line().position('month*temperature').color('city').shape('smooth');

//     chart.point().position('month*temperature').color('city').shape('circle');
//   }

//   render() {
//     const itemStyle = {
//       width: '100vw',
//       height: '50vh',
//       border: '1px solid #ccc',
//     };
//     return <div style={itemStyle} id="line-chart"></div>;
//   }
// }

// export default Hello;

import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { month: 'Jan', code: '黄码', amount: 7 },
        { month: 'Jan', code: '绿码', amount: 3.9 },
        { month: 'Feb', code: '黄码', amount: 6.9 },
        { month: 'Feb', code: '绿码', amount: 4.2 },
        { month: 'Mar', code: '黄码', amount: 9.5 },
        { month: 'Mar', code: '绿码', amount: 5.7 },
        { month: 'Apr', code: '黄码', amount: 14.5 },
        { month: 'Apr', code: '绿码', amount: 8.5 },
        { month: 'May', code: '黄码', amount: 18.4 },
        { month: 'May', code: '绿码', amount: 11.9 },
        { month: 'Jun', code: '黄码', amount: 21.5 },
        { month: 'Jun', code: '绿码', amount: 15.2 },
        { month: 'Jul', code: '黄码', amount: 25.2 },
        { month: 'Jul', code: '绿码', amount: 17 },
        { month: 'Aug', code: '黄码', amount: 26.5 },
        { month: 'Aug', code: '绿码', amount: 16.6 },
        { month: 'Sep', code: '黄码', amount: 23.3 },
        { month: 'Sep', code: '绿码', amount: 14.2 },
        { month: 'Oct', code: '黄码', amount: 18.3 },
        { month: 'Oct', code: '绿码', amount: 10.3 },
        { month: 'Nov', code: '黄码', amount: 13.9 },
        { month: 'Nov', code: '绿码', amount: 6.6 },
        { month: 'Dec', code: '黄码', amount: 9.6 },
        { month: 'Dec', code: '绿码', amount: 4.8 },
      ],
    };
  }
  componentDidMount() {
    this.readHistogram();
  }
  readHistogram() {
    const chart = new Chart({
      container: 'line-chart',
      autoFit: true,
      height: 500,
    });

    chart.data(this.state.data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      amount: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    // chart.axis("amount", {
    //   label: {
    //     formatter: (val) => {
    //       return val + " °C"
    //     },
    //   },
    // })

    chart.line().position('month*amount').color('code').shape('smooth');

    chart.point().position('month*amount').color('code').shape('circle');
  }

  render() {
    const itemStyle = {
      width: '100vw',
      height: '50vh',
      border: '1px solid #ccc',
    };
    return <div style={itemStyle} id="line-chart"></div>;
  }
}

export default Hello;
