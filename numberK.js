function solution(array, commands) {
    var answer = [];
    answer.length = commands.length;
    
    for (var a=0; a<commands.length; a++) {
        var newarr = array.slice(commands[a][0]-1, commands[a][1]).sort(function(a, b) {
            return a-b;
        });
        answer[a] = newarr[commands[a][2] - 1];
    }
    
    return answer;
}
