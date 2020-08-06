var name = 'Wnm';
var age = 22;
var flag = true;

function sun(A, B) {
    return A + B;
}

//导出方式一: 
export {
    flag, sun
}

//导出方式二:
export var height = 1.75;

//导出函数/类:
export function mul(a, b) {
    return a * b;
}

export class Person {
    run() {
        console.log('在裸奔');
    }
}

//export default
const address = '重庆';
export default {
    address
};