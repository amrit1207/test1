function add(x){
    let sum = x;
    return function result(y){
        if(arguments.length){ 
            sum += y;
            return result;
        }
        return sum;
    }
}
console.log(add(1)(2)(3)(12)(4)());
