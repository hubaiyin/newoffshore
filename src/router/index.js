import VueRouter from "vue-router";

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/before/home'
        },
        {
            path: '/before',
            component: () => import('../views/IndexVc.vue'),
            children: [
                {
                    path: '/before/home',
                    component: () => import('../views/HomeVc.vue')
                },
                {
                    path: '/before/data',
                    component: () => import('../views/DataVc/DataVc.vue'),
                    redirect: '/before/data/realtime',
                    meta: {
                        title: '数据监测'
                    },
                    children: [
                        {
                            path: '/before/data/realtime',
                            component: () => import('../views/DataVc/RealTime/RealTime.vue'),
                            meta: {
                                title: '实时监测'
                            }
                        },
                        {
                            path: '/before/data/history',
                            component: () => import('../views/DataVc/HistoryData/HistoryData.vue'),
                            meta: {
                                title: '历史数据'
                            }
                        },
                        {
                            path: '/before/data/analysis',
                            component: () => import('../views/DataVc/AnalysisData/AnalysisData.vue'),
                            meta: {
                                title: '数据分析'
                            }
                        }
                    ]
                },
                {
                    path: '/before/device',
                    component: () => import('../views/DeviceVc/DeviceVc.vue')
                },
                {
                    path: '/before/monitor',
                    component: () => import('../views/MonitorVc/MonitorVc.vue')
                },
                {
                    path: '/before/report',
                    component: () => import('../views/ReportVc/ReportVc.vue')
                },
                {
                    path: '/before/log',
                    component: () => import('../views/LogVc/LogVc.vue')
                },
                {
                    path: '/before/warn',
                    component: () => import('../views/WarnVc/WarnVc.vue')
                }
            ]
        }
    ]
})

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
//重写VueRouter.prototype身上的方法了
VueRouter.prototype.push = function (location, resolve, reject) {
    //第一个形参：路由跳转的配置对象（query|params）
    //第二个参数：undefined|箭头函数（成功的回调）
    //第三个参数:undefined|箭头函数（失败的回调）
    if (resolve && reject) {
        //push方法传递第二个参数|第三个参数（箭头函数）
        //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
        originPush.call(this, location, resolve, reject);
    } else {
        //push方法没有产生第二个参数|第三个参数
        originPush.call(
            this,
            location,
            () => { },
            () => { }
        )
    }
}
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => { },
            () => { }
        );
    }
};

export default router