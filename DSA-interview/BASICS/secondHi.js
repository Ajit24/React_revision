// sort the array and find 2nd max number . 

function getSecondLargest(nums) {
    nums.sort(function(x,y){
           return y-x;
        });
    for(var j=1; j < nums.length; j++)
     {
        if(nums[j-1] !== nums[j])
        {
             return nums[j];
        }
     }
    }
    console.log(getSecondLargest([1,2,3,4,5,5]));
    // 4

    // ----------------------  using recursion 

    let input = [29, 75, 12, 89, 103, 65, 100, 78, 115, 102, 55, 214]

const secondLargest = (arr, first = -Infinity, second = -Infinity, firstPos = -1, secondPos = -1, idx = 0) => {
    arr = first === -Infinity ? [...arr] : arr;

    const el = arr.shift();
    if (!el) return { second, secondPos }

    if (el > first) {
        second = first;
        secondPos = firstPos;
        first = el;
        firstPos = idx;
    } if (el < first && el > second) {
        second = el;
        secondPos = idx;
    }  

    return secondLargest(arr, first, second, firstPos, secondPos, ++idx);
}

console.log(secondLargest(input));
//  {
//    second: 115,
//    secondPos: 8
//  }


// -------------------- 
// ---------------------   without using the inbuilt function.

var arr = [1,2, -3, 15, 77, 12, 55];
var highest = 0, secondHighest = 0;
// OR var highest = arr[0], secondHighest = arr[0];

for(var i=0; i<arr.length; i++){
  if(arr[i] > highest){
    secondHighest = highest;
    highest = arr[i]; 
  }

  if(arr[i] < highest && arr[i] > secondHighest){
    secondHighest = arr[i];
  }
}

console.log('>> highest number : ',highest); // 77
console.log('>> secondHighest number : ',secondHighest); // 55

// ------------------- 
//                              Time complexity is O(n)
function seconddLargest(arrrr) {
        let prev = [0]
        let i =1;
        let largest =0;
        while(i<arrrr.length){
            let current = arrrr[i];
            if(current > largest ) {
                largest = current;
                prev = arrrr[i-1];
            } else if (current > prev && current < largest) {
                prev = current
            }
            i++;
        }
        return prev;
    }
    
    let arrrr = [1,2,3,41,61,10,3,5,23];
    console.log(seconddLargest(arrrr));
    //41 

    //         
    //  --------------------        we can solve it with recursion*/
    let count = 0;    /* when find max then count ++ */
    findSecondMax = (arr)=> {
      let max = 0;  /* when recursive function call again max will reinitialize and we get latest max */
        arr.map((d,i)=>{
           if(d > max) {
               max = d;
           }
           if(i == arr.length -1) count++;
        })
/* when count == 1 then we got out max so remove max from array and call recursively again with rest array so now count will give 2 here we go with 2nd max from array */
      return count == 1 ? findSecondMax(arr.slice(0,arr.indexOf(max)).concat(arr.slice(arr.indexOf(max)+1))) : max;
   }

   console.log(findSecondMax([1,5,2,3]))
   // 3