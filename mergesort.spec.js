describe('Split Array function', function() {
  it('is able to split an array into two halves', function(){
    expect(split([1,3])).toEqual([[1],[3]]) 
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function (){
    expect(merge([3,1,2,5])).toEqual([1,2,3,5]);
  });
});