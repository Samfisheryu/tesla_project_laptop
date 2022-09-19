import React from "react";
import ReactEcharts from "echarts-for-react";


const Chart = ({hPFR}: any) => {
    console.log(hPFR)
    const option = hPFR;
    return <ReactEcharts option={option}/>;
}

export default Chart
