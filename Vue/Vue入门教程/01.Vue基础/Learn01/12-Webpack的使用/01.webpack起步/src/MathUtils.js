const { mul } = require("../../../11-前端模块化开发/02.ES6中的导入导出-Import-export/A");

function add(a, b) {
    return a + b;
};


//commonJS 导出方式

// module.exports = {
//     add
// }

module.exports = {
    add
};