import React from "react";
import ReactEcharts from "echarts-for-react";


const Chart = ({hPFR}: any) => {
    console.log(hPFR)
    const option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:['Growth', 'Budget 2011', 'Budget 2012'],
            itemGap: 5
        },
        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [hPFR[0][0],hPFR[1][0]]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [hPFR[0][1],hPFR[1][1]],
                type: 'bar'
            }
        ]
    };
    return <ReactEcharts option={option}/>;
}

export {Chart}
