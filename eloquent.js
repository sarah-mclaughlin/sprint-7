  var min = function(x, y) {
    return Math.min(x, y);
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10


  function isEven(num) {
    num = Math.abs(num);
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false


  function countBs(bbc) {
    let x = bbc.split('');
    let count = 0;
    for (var i = 0; i < x.length; i++) {
      if (x[i] == 'B') {
          count += 1;
      } 
    }
    return count;
  }
              

  function countChar(a, b) {
    let y = a.split('');
    let count = 0;
    for (var i = 0; i < y.length; i++) {
      if (y[i] == b) {
          count += 1;
      }
    }
    return count;
  }
      
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4