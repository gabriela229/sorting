describe('Split Array function', function() {
  it('is able to split an array into two halves', function(){
    expect(split([1,3])).toEqual([[1],[3]]) 
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function (){
    expect(merge([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  });
});

describe('The Real Merge Sort', function(){
  it('is able to do black magic', function(){
    expect(mergeSort([12,5,1,3,6])).toEqual([1,3,5,6,12]);
  });
});
