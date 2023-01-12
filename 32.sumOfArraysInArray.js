function sumOfArraysInArray(arr) {
    return arr.flat().reduce(
      function(acc, cur){
        if(typeof cur === 'number') return acc + cur
        return acc
      },0
    )
  }
  // cur이 순회하는 값이니까 // 초기값도 줘야한다.