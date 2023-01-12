function getIndex(arr, num) {
    return arr.filter(
      function(i){
        if(i < num) return true
      }).length;
  }