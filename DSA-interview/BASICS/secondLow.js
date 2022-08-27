var arr = [ 6, 3, 5, 2, 9 ];
//3 
		var smallest = arr[0]; 
		var secondSmallest = arr[1]; 

		for(var i = 0; i < arr.length; i++) { 
			if(arr[i] < smallest) {  
				smallest = arr[i];  
			}  

			if(arr[i] > smallest && arr[i] < secondSmallest ) { 
				secondSmallest = arr[i]; 
			} 
		} 

		console.log(secondSmallest);  //3