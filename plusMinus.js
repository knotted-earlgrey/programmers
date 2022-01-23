function solution(absolutes, signs) {
    for (var i=0; i<absolutes.length; i++) {
        if (!signs[i])
            absolutes[i] *= (-1);
    }
    
    var answer = absolutes.reduce(function(a, b) {
        return a+b;
    });
    
    return answer;
}
