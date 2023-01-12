function findShortestWord(arr) {

    const arrNew = arr.filter(
      function(x){
        if(typeof x === 'string') return true
        return false
      }
    )
    if(arr.length === 0) return ''
    else if (arrNew.length === 0 ) return ''
      return arrNew.reduce(
      function(acc, cur){
        if(acc.length <= cur.length) return acc
        return cur
      }
    )
  }
  //9번째 줄 생략해도 된다. 10번줄이 있으니까