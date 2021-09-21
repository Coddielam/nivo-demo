import { useState } from 'react';
import { ScatterPlotProps, ResponsiveScatterPlot, Node, Serie } from '@nivo/scatterplot'

const CustomTooltip = ({node, closeTooltipHndlr}:{node?:Node | any, closeTooltipHndlr: Function }) => {
  return node && <div className="tooltip" 
  style={{ position: 'absolute', top:`${node.y + 24}px`, left:`${node.x + 120}px` }}>
    <button onClick={() => closeTooltipHndlr()}>x</button>
    <h3>Anson Chan</h3>
    <div className="tooltip-title">本年度</div>
    <div className="stat">
      <span>平均消費單價</span>
      <span>$298</span>
    </div>
    <div className="stat">
      <span>平均消費次數</span>
      <span>7次</span>
    </div>
    <a href="/">會員詳情</a>
  </div>
}

const ScatterPlot = ({ data } : {data:Serie[]}) => {

  const scatterPlotProps: ScatterPlotProps = {
    data,
    margin: { top: 24, right: 150, bottom: 80, left: 120 },
    nodeSize: 10,
    blendMode: 'normal',
    axisBottom: {
      tickSize: 0,
      tickRotation: 0,
      tickPadding: 30,
      tickValues: [13],
      ticksPosition: 'after',
      format: (val) => `最大值${val}`
    }, // this removes the axis ticks and labels
    tooltip: () => null,
    axisLeft: {
      tickSize: 0,
      tickRotation: 0,
      tickPadding: 30,
      tickValues: [0, 4],
      format: (val) => val === 0 ? val : `最大值${val}`
    },
    legends: [
        {
            anchor: 'right',
            direction: 'column',
            translateY: 0,
            translateX: 160,
            itemWidth: 130,
            itemHeight: 16,
            symbolSize: 16,
            symbolShape: 'square',
        },
    ],
    theme: {
      grid: {
        line: {
          strokeDasharray: "4 4"
        }
      },
      axis: {
        ticks: {
          text: {
            fontSize: 16,
          }
        }
      }
    },
  }

  const onClickHanlder = (node:Node, event:React.MouseEvent) => {
    console.log(event);
    const tooltipConfig = {...node, size: 20, mouseX: event.clientX, mouseY: event.clientY};
    setShowTooltip(tooltipConfig);
  }

  const closeTooltipHndlr = (node: any) => {
    node.size = 10; // reset size
    setShowTooltip({});
  }

  const [ showTooltip, setShowTooltip ] = useState({});

  return (
    <div className="chart-container">
      <div className="chart-frame">
        { Object.keys(showTooltip).length > 0 && <CustomTooltip node={showTooltip} closeTooltipHndlr={() => closeTooltipHndlr(showTooltip)}/>  }
        <ResponsiveScatterPlot 
        {...scatterPlotProps}
        markers={[
          {
            axis: 'y',
            value: 3,
            legend: '中間值 ($3)',
            legendPosition: 'left',
            lineStyle: {
              stroke: 'grey',
              strokeDasharray: '4 4',
            },
            textStyle: {}
          },
          {
            axis: 'x',
            value: 7,
            legend: '中間值 ($3)',
            legendPosition:'bottom',
            lineStyle: {
              stroke: 'grey',
              strokeDasharray: '4 4'
            },
            textStyle: {
              transform: 'translateY(235px)',
            }
          },
        ]}
        onClick={(node, event) => onClickHanlder(node, event)}
        />
      </div>
    </div>
  )
}

export default ScatterPlot;