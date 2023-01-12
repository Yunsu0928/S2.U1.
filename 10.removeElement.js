function removeElement(arr, discarder) {
    return arr.filter(
      function(i){
        return i !== discarder ? true : false;
      });
  }