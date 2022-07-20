function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  const arr = ['20','120','111','215','54','78'];
  console.log(nextBiggest(arr));
  // output = 120;