function split(wholeArray){
  var splitArr = [];
  var middle = Math.floor(wholeArray.length/2);
  
  splitArr.push(wholeArray.slice(0, middle), wholeArray.slice(middle));

  return splitArr;
}