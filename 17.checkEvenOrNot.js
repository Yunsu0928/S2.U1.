function checkEvenOrNot(arr) {
    return arr.map(
      function(x){
        if(x % 2 === 0 && x !== 0 ) return 'ok'
        else return 'no'
      }
    )
  }