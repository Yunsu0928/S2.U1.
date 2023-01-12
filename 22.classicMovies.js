function classicMovies(arr, year) {
    return arr.filter(
      function(x){
        return x['year'] < year
      }
    ).map(
      function(obj){
        return `${obj['title']} by ${obj['director']}`
      }
    )
  }