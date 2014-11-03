function counterCreator(startingNum){
  var count = startingNum;
  return function(){
    count++;
    return count;
  }
}