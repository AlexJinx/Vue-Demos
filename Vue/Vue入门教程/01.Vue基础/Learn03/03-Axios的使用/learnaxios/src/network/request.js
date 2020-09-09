import axios from 'axios'

export function request(config) {

    // 1.创建一个axios实例,并做好配置
    const instanceDefault = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.发送网络请求
    return instanceDefault(config)
}


//手写回调
export function instanceHandleCallBack(config, success, failure) {

    // 1.创建一个axios实例,并做好配置
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance(config)
        .then(res => {
            console.log(res);
            //这里相当于，在其他地方请求这个方法的时候，我们要求必须给我们传两个函数(success和failure)，以供我们来进行回调
            success(res) //这里在执行 success 的时候，相当于我们去调用传入方的函数，并且把res返回给传入方。
        })
        .catch(err => {
            console.log(err);
            failure(err) //这里跟上面同理，去调用传入方的函数。
        })
}


//手写回调(简写)
export function instanceHandleCallBackSimple(config) {

    // 1.创建一个axios实例,并做好配置
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance(config.baseConfig)
        .then(res => {
            console.log(res);
            //这里相当于，在其他地方请求这个方法的时候，我们要求必须给我们传两个函数(success和failure)，以供我们来进行回调
            config.success(res) //这里在执行 success 的时候，相当于我们去调用传入方的函数，并且把res返回给传入方。
        })
        .catch(err => {
            config.console.log(err);
            failure(err) //这里跟上面同理，去调用传入方的函数。
        })
}

//使用Promise封装
export function instanceForPromise(config) {

    return new Promise((resolve, rejest) => {

        // 1.创建一个axios实例,并做好配置
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })

        instance(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                rejest(err)
            })
    })

}