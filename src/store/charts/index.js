import * as echarts from "echarts";

export default {
    namespaced: true,
    state: {
        charts: [
            {
                title: 'numberOne',
                unit: 'Kbps',
                names: ['出口', '入口'],
                lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
                value: [
                    [451, 240, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
                    [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
                ]
            },
            {
                title: 'numberTwo',
                title: 'numberOne',
                unit: 'Kbps',
                names: ['出口', '入口'],
                lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
                value: [
                    [451, 240, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
                    [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
                ]
            },
            {
                title: 'numberTwo',
                unit: 'Kbps',
                names: ['出口', '入口'],
                lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
                value: [
                    [451, 240, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
                    [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
                ]
            },
            {
                title: 'numberTwo',
                unit: 'Kbps',
                names: ['出口', '入口', '利息'],
                lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
                value: [
                    [451, 352, 303, 534, 195, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
                    [360, 445, 80, 192, 230, 280, 192, 480, 250, 253, 162, 28, 325, 345, 65, 325, 468, 108, 253, 98],
                    [160, 245, 210, 292, 330, 580, 322, 280, 150, 453, 452, 228, 125, 45, 165, 525, 168, 228, 413, 98],
                ]
            },
            {
                title: 'numberThree',
                unit: 'Kbps',
                names: ['出口', '入口', '流量'],
                lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
                value: [
                    [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
                    [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98],
                    [40, 145, 340, 192, 130, 780, 123, 180, 50, 353, 152, 28, 325, 245, 65, 525, 268, 408, 153, 98],
                ]
            },
            {
                title: 'numberFour',
                unit: 'Kbps',
                names: ['出口', '入口'],
                lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
                value: [
                    [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
                    [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
                ]
            },
        ],
        color: ['rgb(0, 201, 157', 'rgb(255, 242, 0', 'rgb(255, 77, 77']
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        datas(state) {
            let arr = state.charts.map(item => {
                let lineY = []
                let color = state.color;
                for (let i = 0; i < item.names.length; i++) {
                    let x = i
                    if (x > color.length - 1) {
                        x = color.length - 1
                    }
                    let data = {
                        name: item.names[i],
                        type: 'line',
                        color: color[x] + ')',
                        // smooth: true,
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: color[x] + ', 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: color[x] + ', 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        symbol: 'circle',
                        symbolSize: 5,
                        data: item.value[i],
                        markPoint: {
                            data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }]
                        }
                    }
                    lineY.push(data)
                }

                return {
                    title: {
                        text: item.title,
                        textStyle: {
                            color: '#fff'
                        },
                        show: false
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: item.names,
                        textStyle: {
                            fontSize: 12,
                            color: 'rgb(0,253,255,0.6)'
                        },
                        // right: '4%'
                        top: '9.5%'
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                        },
                        right: '2%',
                        iconStyle: {

                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside',
                            throttle: 20
                        }
                    ],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: item.lineX,
                        axisLabel: {
                            textStyle: {
                                color: 'rgb(0,253,255,0.6)'
                            },
                            formatter: function (params) {
                                return params.split(' ')[0] + '\n' + params.split(' ')[1]
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgb(0,253,255,0.6)',
                                width: 2
                            }
                        }
                    },
                    yAxis: {
                        name: item.unit,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}',
                            textStyle: {
                                color: 'rgb(0,253,255,0.6)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgb(23,255,243,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgb(0,253,255,0.6)',
                                width: 2
                            }
                        }
                    },
                    series: lineY
                }
            })
            return arr;
        }
    }
}