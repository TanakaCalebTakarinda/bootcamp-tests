function mostProfitableDepartment (insert){
    let DepMap = {}
    for (var i = 0; i< insert.length; i++){
      const depart = insert[i];
      DepMap[depart.department]=0
    }
      console.log(DepMap)
    
    for (var i = 0; i< insert.length; i++){
      const depart = insert[i];
      
      var current = DepMap[depart.department];
      current += depart.sales;
      DepMap[depart.department] = current;
    }
      console.log(DepMap);
     var cMaxSales = 0;
      var cDepartment= "";
      for(const DepartmentCol in DepMap){
       const currentVal = DepMap[DepartmentCol]
        // const theCurrentSales = DepMap[DepartmentCol];
        //if(theCurrentSales> cMaxSales){
          //cMaxSales = theCurrentSales
         // cDepartment = DepartmentCol; }
       if (currentVal>  cMaxSales){
           cMaxSales = currentVal
           cDepartment = DepartmentCol;
      }
     // console.log(cMaxSales)
     // console.log(depart.department)
       }
           //console.log(CmaxSales)
         console.log(cDepartment)
      return cDepartment
    }
    
    
    function mostProfitableDay (insert){
    let DepMap = {}
    for (var i = 0; i< insert.length; i++){
      const depart = insert[i];
      DepMap[depart.day]=0
    }
     // console.log(DepMap)
    
    for (var i = 0; i< insert.length; i++){
      const depart = insert[i];
      
      var current = DepMap[depart.day];
      current += depart.sales;
      DepMap[depart.day] = current;
    }
      console.log(DepMap);
     var cMaxSales = 0;
      var cDay= "";
      for(const DayCol in DepMap){
       const currentVal = DepMap[DayCol]
        
       if (currentVal>  cMaxSales){
           cMaxSales = currentVal
           cDay = DayCol;
      }
     
       }
         
         console.log(cDay)
      return cDay
    }
    