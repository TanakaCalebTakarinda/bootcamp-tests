function findItemsOver(insert, thresh){
    var answer = []
    for (var i = 0; i<insert.length; i++){
     let each = insert[i];
     if (each.qty >  thresh){
       answer.push(each);
       console.log(each.name + ' ' + each.qty)
     }
    }
    
    return answer
  }
      