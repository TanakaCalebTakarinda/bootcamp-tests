function allPaarl(regNumbers){
  let Arr=[];
  var pArray = regNumbers.split(", ");
  for (var i = 0; i < pArray.length; i++){
   var regN = pArray[i].trim();
    if (regN.startsWith("CJ")){
    Arr.push(regN);
      console.log(Arr);
    }}
 return Arr;

  }