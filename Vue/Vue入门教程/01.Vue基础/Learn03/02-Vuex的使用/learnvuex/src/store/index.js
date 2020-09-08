import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)


// 2.创建对象
const store = new Vuex.Store({
    //存放数据
    state: {
        counter: 1000,
        ageList: [18, 33, 23, 54, 41, 22],
        userInfo: {
            name: 'wnm',
            age: 22,
            hobby: 'play computer game'
        }
    },
    //类似于计算属性
    getters: {
        multCounter(state) {
            return state.counter * state.counter
        },
        //传入自定义值
        moreAgeList(state) {
            return age => state.ageList.filter(c => c >= age)

            //不推荐写法
            return function (age = 50) {
                return state.ageList.filter(c => c >= age)
            }
        }
    },
    //用于修改state中的数据，仅限于同步修改
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count
        },
        updateUserInfo(state) {
            /*
            测试在mutation中异步修改state中值(错误写法)，
            在这里修改之后，页面数据会刷新，
            但是devtools中的监听数据不会跟着改变
            */

            // setTimeout(() => {
            //     state.userInfo.name = '啾啾啾'
            // }, 1000);

            state.userInfo.name = '啾啾啾'
        }
    },
    //用于异步修改state中的值
    actions: {
        /*
            actions中一般用来处理需要异步修改 state 中的数据
            使用方法：
                在action中调用mutation中的方法，
                然后通过mutation来修改state。
                如果直接在mutation中异步修改state中的数据，
                devtools不会同步修改的数据。
         */
        //context:上下文，这里指上面的store对象
        // actionUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit('updateUserInfo')
        //         console.log(payload.msg)
        //         payload.success()
        //     }, 1000);
        // }

        actionUpdateInfo(context, payload) {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateUserInfo')
                    console.log(payload);
                    console.log('里面已经执行完成');
                    resolve('res返回值');
                }, 1000);
            })

        }
    },
    modules: {

    }
})

// 3.导出store对象
export default store
