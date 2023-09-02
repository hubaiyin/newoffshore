export default {
    namespaced: true,
    state: {
        data: [{
            title: {
                text: 'Stacked Line',
                textStyle: {
                    color: '#fff'
                },
                show: false
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video ßAds', 'Direct', 'Search Engine'],
                textStyle: {
                    color: '#fff',
                    fontSize: '15px',
                },
                top: '8%',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right: '2%',
                iconStyle: {

                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5dcaec',
                        width: 2
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false // 不显示分段线
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5dcaec',
                        width: 2
                    }
                }
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        {
            title: {
                text: 'Stacked Line',
                textStyle: {
                    color: '#fff'
                },
                show: false
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video ßAds', 'Direct', 'Search Engine'],
                textStyle: {
                    color: '#fff',
                    fontSize: '15px'
                },
                top: '8%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5dcaec',
                        width: 2
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false // 不显示分段线
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5dcaec',
                        width: 2
                    }
                }
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        {
            title: {
                text: 'Stacked Line',
                textStyle: {
                    color: '#fff'
                },
                show: false
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video ßAds', 'Direct', 'Search Engine'],
                textStyle: {
                    color: '#fff',
                    fontSize: '15px'
                },
                top: '8%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5dcaec',
                        width: 2
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false // 不显示分段线
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5dcaec',
                        width: 2
                    }
                }
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
        ]
    },
    actions: {},
    mutations: {

    }
}