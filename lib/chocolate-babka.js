
function counterCreator(num){
    var count = num + 1
    return function(){
      return count++
    }
}

function countAnnouncer(name, counter){
  return function(){
    return "Now serving " + name + " number " + counter() + "!"
  }
}
