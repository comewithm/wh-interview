function my_typeof(obj){
    return Array.prototype.toString.slice(8, -1).call(obj)
}