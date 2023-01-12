function computeAverageOfNumbers(arr) {
  
    if(arr.length === 0) return 0;
    
    return arr.reduce(
      function(acc, cur){
        return acc + cur;
      },0
    )/arr.length;
  }