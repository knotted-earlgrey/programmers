function solution(lottos, win_nums) {
    var a = 6;  // 최고 등수
    var b = 6;  // 최저 등수
    
    // 최저등수
    var lowCount = 0;
    for (var i=0; i<lottos.length; i++) {
        for (var j=0; j<win_nums.length; j++) {
            if (lottos[i]==win_nums[j])
                lowCount++;
        }
    }
    if (lowCount>=2)
        b = b - lowCount + 1;
    
    var highCount = 0;
    for (var i=0; i<lottos.length; i++) {
        
        if (lottos[i]==0) {
            highCount++;
            continue;
        }
            
        for (var j=0; j<win_nums.length; j++) {
            if (lottos[i]==win_nums[j])
                highCount++;
        }
    }
    if (highCount>=2)
        a = a - highCount + 1;
    
    var answer = [a, b];    
    return answer;
}
