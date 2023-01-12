function pipe(...funcs) {
    return function(num){
      let a = num;
      for(let i = 0; i < funcs.length; i++){
        a = funcs[i](a)
      }
      return a;
    }
  }