function computeSumOfAllElements(arr) {
    return arr.reduce(
      function(acc,cur){
        return acc + cur;
      },0
    )
  }