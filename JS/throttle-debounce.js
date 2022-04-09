// 防抖
function debounce(fn, delay = 1000){
    let timeId;

    return function(...args){
        timeId && clearTimeout(timeId)
        timeId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }

}
// 节流
function throttle(fn, delay){

    let last = 0;
    return function(...args){
        let now = Date.now();
        if(now - last > delay) {
            last = now;
            fn.apply(this, args)
        }

    }
}

