import { flag, sun } from './A.js'

if (flag) {
    console.log('我是天才，哈哈哈哈');
    console.log(sun(10, 50));
}

import { height } from './A.js'
console.log(height);

import { mul, Person } from './A.js'
console.log(mul(15, 20));

const p = new Person();
p.run();

import addr from './A.js'
console.log(addr);

//导出所有
import * as all from './A.js'
console.log(all.height);


