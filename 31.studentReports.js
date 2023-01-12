function studentReports(students) {
    const filtered = students.filter(
      function(x){
        if(x.gender === 'female') return true;
      }
    )
  
    return filtered.map(
      function(x){
        x.grades = x.grades.reduce(
          function(acc,cur){
            return (acc + cur)
          }) / x.grades.length;
      return x;
      }
    )
  }