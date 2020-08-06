; var moduleA = (function () {

    var obj = {};

    var name = 'Wnm';
    var age = 22;
    var flag = false;

    function sun(A, B) {
        return A + B;
    }

    obj.name = name;
    obj.flag = flag;
    obj.sun = sun;
    return obj;
})()
