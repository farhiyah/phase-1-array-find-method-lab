// code your solution here

function superbowlWin(array) {
    for (let object of array) {
     if ( object.result === "W") {
      return object.year; 
        }
    } 
}