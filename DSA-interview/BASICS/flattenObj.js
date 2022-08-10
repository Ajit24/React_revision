const flatten = (obj, prefix) => {
    //store the result
    let output = {};
    
    //iterate the object 
    for(let k in obj){
      let val = obj[k];
      
      //get the type
      const type = Object.prototype.toString.call(val);
      
      //object
      if(type === "[object Object]"){
        //new key
        const newKey = prefix ? prefix + "." + k : k;
        const newObj = flatten(val, newKey);
        output = {...output, ...newObj};
        
      }
      //array
      else if(type === "[object Array]"){
        //iterate array
        for(let i = 0; i < val.length; i++){
          //new key
          const newKey = prefix ? prefix + "." + k + "." + i : k + "." + i;
          output = {...output, [newKey]: val[i]};
        }
      }
      // normal value
      else{
        //new key
        const newKey = prefix ? prefix + "." + k : k;
        output = {...output, [newKey]: val};
      }
    }
    
    return output;
  }

 // Input:
const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
};

console.log(flatten(nested));

// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }

// ------------------- 2nd approach ------------------



const flatten2 = (obj, prefix) => {
    //store the result
    let output = {};
    
    //iterate the object 
    for(let k in obj){
      let val = obj[k];
      
      //new key
      const newKey = prefix ? prefix + "." + k : k;
      
      //array and object both are object in js
      if(typeof val === "object"){
        // if it is array
        if(Array.isArray(val)){
          //use rest & spread together to convert 
          //array to object
          const { ...arrToObj } = val;
          const newObj = flatten2(arrToObj, newKey);
          output = {...output, ...newObj};
        }
        //if it is object
        else{
          const newObj = flatten2(val, newKey);
          output = {...output, ...newObj};  
        }
      }
      // normal value
      else{
        output = {...output, [newKey]: val};
      }
    }
    
    return output;
  }

  //Input:
const nested2 = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
};

console.log(flatten2(nested2));

// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }