function split(wholeArray){
  var splitArr = [];
  var middle = Math.floor(wholeArray.length/2);

  splitArr.push(wholeArray.slice(0, middle), wholeArray.slice(middle));

  return splitArr;
}

function merge(arr1, arr2){
  var size = arr1.length + arr2.length;
  var mergedArr = [];
  var i = 0;
  var j = 0;

  while(size){
    if(!arr1[i]){
      mergedArr = mergedArr.concat(arr2.slice(j));
      break;
    } else if (!arr2[j]){
      mergedArr = mergedArr.concat(arr1.slice(i));
      break;
    } else if(arr1[i] < arr2[j]){
      mergedArr.push(arr1[i]);
      i++
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }

    size--;
  }
  return mergedArr;
}

function mergeSort(array){
  if (array.length < 2) return array;
  var splitArr = split(array);
  var left = splitArr[0];
  var right = splitArr[1];

  return merge(mergeSort(left), mergeSort(right));
}
