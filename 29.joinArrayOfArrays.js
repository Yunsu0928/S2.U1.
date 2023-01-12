function joinArrayOfArrays(arr) {
    return arr.reduce(
      function(acc, cur){
        return acc.concat(cur);
      }
    )
  }