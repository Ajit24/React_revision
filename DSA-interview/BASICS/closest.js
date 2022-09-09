const closestNumbers = (numbers) => { 
    let result = [];
     let minimalDistance = Infinity;
      numbers.sort((a, b) => a - b);
       for (let i = 0; i < numbers.length - 1; i++) {
         const distance = Math.abs(numbers[i+1] - numbers[i]);
          if (distance < minimalDistance) { minimalDistance = distance;
             result = [];
             } if (distance === minimalDistance) { result.push([numbers[i], numbers[i + 1]]);
             }
             } return result;
            }
            console.log(closestNumbers([6,2,4,10]));