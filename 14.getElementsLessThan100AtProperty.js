function lessThan100(number) {
    return number < 100;
  }
  
  function getElementsLessThan100AtProperty(obj, property) {
      if(!Array.isArray(obj[property])) return [];
      else if(Array.isArray(obj[property])) return obj[property].filter(
      function(i){
        return typeof i === 'number' && lessThan100(i)
      }
    )  
  }