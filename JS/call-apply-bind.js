
function myCall(context){
    
    if(typeof this !== 'function') {
        throw new Error('error')
    }

    context = context || window

    context.fn = this; // f.myCall 的 f

    const args = [...arguments].slice(1);

    let result = context.fn(...args);

    delete context.fn;

    return result;
}

function myApply(context){
    if(typeof this !== 'function'){
        throw new Error('error')
    }

    context = context || window

    context.fn = this

    let result;

    result = arguments[1] ? context.fn(...arguments[1]) : context.fn()

    delete context.fn

    return result
}

function myBind(context){
    if(typeof this !== 'function'){
        throw new Error('error')
    }

    const _this = this

    const args = [...arguments].slice(1)

    let F = function(...fnArgs){
        // 判断this是否为F的实例
        if(this instanceof F){
            return new _this(...args, ...fnArgs)
        }
        return _this.apply(context, args.concat(...fnArgs))
    }

    if(_this.prototype){
        F.prototype = Object.create(_this.prototype)
    }
    
    return F
}