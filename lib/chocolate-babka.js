function counterCreator(startingNum){
  var count = startingNum;
  return function(){
    count++;
    return count;
  }
}

function countAnnouncer(line, counter){
  var line = line,
      counter = counter;
  return function(){
    return 'Now serving ' + line + ' number ' + counter() + '!';
  }
}