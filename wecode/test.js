//1부터 50의 자연수 중 짝수를 구하는 함수

function findEvenNum(num) {
    arr = []
    for(let i=1; i <=num; i++){
        if (i%2 ===0){
            arr.push(i)
        };
    }
    return arr
}

findEvenNum(50)
