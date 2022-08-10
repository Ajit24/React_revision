
// Output:
// "1"
// "2 3"
// "4 5 6"
// "7 8 9 10"
// "11 12 13 14 15"

let floydTriangle = (rows) => {
    let k = 0;
   
    for(let i = 1; i <= rows; i++){
      
      let str = '';
      
      for(let j = 1; j <= i; j++){
        //Increment the no;
        k += 1;
        
        //Add the no for each row
        str += k + ' ' ;
      }
      
      //Print the numbers for each row
      console.log(str.trim());
    }
 };
 //floydTriangle(rows)
 floydTriangle(5);

