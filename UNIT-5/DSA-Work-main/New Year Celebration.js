function newYearCele(arr1,arr2){

    var stack = [];
    var queue = [];
    // console.log(arr1,arr2)
   
    for(var i = 0; i < arr1.length; i++){

        if( arr1[i] == 1){
            queue.push(arr2[i]);
        }
        if( arr1[i] == 2){
            stack.push(arr2[i]);
        }

        if(arr1[i] == 3){
            if(queue.length == 0){
                console.log("-1");
            }else{
                console.log(queue[0]);
            }
            
        }

        if(arr1[i] == 4){
            if(stack.length == 0){
                console.log("-1");
            }else{
                console.log(stack[stack.length - 1]);
            }
            
        }

        if(arr1[i] == 5){
                stack.push(queue[0]);
               
                queue.shift();
        }
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var arr1 = []
   var arr2 = [];
   var line = 1;

   for(var i = 0; i < testCases; i++){
       var arr = input[line].trim().split(" ").map(Number);

       arr1.push(arr[0]);
       arr2.push(arr[1]);
       line++;

      
   }

    newYearCele(arr1, arr2);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }