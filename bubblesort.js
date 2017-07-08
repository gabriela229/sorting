function bubbleSort(array){
  if(array.length <= 1) return array;
  var j = 0;
  var i = 0;
  var hasRun = false
  while(i < array.length){
    if(hasRun === false){
      i++;
    }
    j = i
    
    hasRun = false;
    while(array[j] > array[j+1]){
      hasRun = true;
      swap(j, array);
      j++;
    }
    
  }
 return array;
}

function swap(index, array) {
 var temp = array[index];
 array[index] = array[index + 1];
 array[index + 1] = temp;
 
}
