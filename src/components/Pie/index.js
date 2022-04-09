import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';

const PieSample = ({
  containerName,
  itemStyle,
  data,
  legendStyle,
  colorMap,
  labelColor,
}) => {
  useEffect(() => {
    readHistogram(data);
  });

  function readHistogram() {
    //渲染
    const chart = new Chart({
      container: containerName,
      autoFit: true,
    }); //放数据
    chart.data(data);
    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%';
        return val;
      },
    }); //美化 // chart.scale('接触中高风险地区人数', { //   nice: true, // });
    chart.legend(legendStyle);
    chart.coordinate('theta', {
      radius: 0.75,
      innerRadius: 0.6,
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
    });

    chart
      .interval()
      .adjust('stack')
      .position('percentNum')
      .color('type') // .color('type', (val) => colorMap[val])
      .label('percentNum', (percentNum) => {
        return {
          content: (data) => {
            return `${data.type}: ${percentNum}%`;
          },
          style: {
            fill: labelColor,
          },
        };
      })
      .tooltip('type*precentNum', (type, precentNum) => {
        precentNum = precentNum + '%';
        return {
          name: type,
          value: precentNum,
        };
      })
      .state({
        active: {
          style: (element) => {
            const shape = element.shape;
            return {
              lineWidth: 10,
              stroke: shape.attr('fill'),
              strokeOpacity: shape.attr('fillOpacity'),
            };
          }, // 配置 active 样式，通过加粗边框实现放大效果
        },
      });

    chart.interaction('element-active');
    chart.render();
  }

  return <div style={itemStyle} id={containerName}></div>;
};

export default PieSample;
