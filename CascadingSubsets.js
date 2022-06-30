function eachCons (array, n){
    const r = [];
    for ( let i = 0; i <= array.length - n; i++){
        const chunk = [];
        for ( let j = i; j < i + n; j++){
            chunk.push(array[j])
        }
        r.push(chunk)
    }
    return r;
}
console.log(eachCons([3,5,6,8],2))
