describe('Bubble Sort', function () {
  
//  before(function() {
//    spyOn(swap, 'swap').and.callThrough();
//  });
  
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] ); 
  });
  
  it('handles an one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] ); 
  });
  
  it('handles an multiple items', function(){
    expect( bubbleSort([1,5,2]) ).toEqual( [1,2,5] ); 
  });
});

