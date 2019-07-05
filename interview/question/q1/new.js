function _new() {
    let target = {}
    let [constructor, ...args] = [...arguments]
    target.__proto__ = constructor.prototype
    let result = constructor.call(target,args)
    if(result && typeof(result === 'function') || typeof(result === 'Object')){
        return result
    } else {
        return target
    }
}

function msg(name,age) {
    this.name = name;
    this.age = age
}

var me = _new('cst',18)

console.log(me)