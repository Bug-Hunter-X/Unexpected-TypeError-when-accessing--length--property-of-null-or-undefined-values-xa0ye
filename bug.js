function foo(x){
  if (x === null) {
    return 0; 
  }
  return x.length; //Error occurs if x is not an object with a length property
}