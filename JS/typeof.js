function my_typeof(obj){
    return Object.prototype.toString.slice(8, -1).call(obj)
}