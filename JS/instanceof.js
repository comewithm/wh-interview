function my_instanceof(child, parent){
    let child_proto = child.__proto__;

    let parent_prototype = parent.prototype;

    if(child_proto == null) return false;

    if(child_proto === parent_prototype) {
        return true
    } else {
        return my_instanceof(child_proto, parent)
    }
}

function my_instance_iterate(child, parent){
    let child_proto = child.__proto__;
    
    while(child_proto !== null) {
        if(child_proto == parent.prototype) return true;
        child_proto = child_proto.__proto__;
    }

    return false
}