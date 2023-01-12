function square(number) {
    return number * number;
  }
  
  function getSquaredElementsAtProperty(obj, property) {
    if(!Array.isArray(obj[property])) return [];
    return obj[property].map(
      function(k){
        return square(k); 
      }
    )
  }