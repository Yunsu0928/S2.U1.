function getOnlyAllowedToDrink(arr) {
    return arr.filter(
      function(a){
        return a.age >= 18
      }
    ).map(
      function(obj){
        return obj['name'];
      }
    )
  }