import React ,{useEffect, useState}from 'react'
import axios from "axios";
const FetchDataObj = () => {

    const [result, setResult] = useState([]);

    useEffect (() =>{
        // fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=392&date=02-06-2022')
        // .then(res =>{
        //     return res.json();
        // })
        // .then((data) =>{
        //     setResult(data);
        //     console.log(data);
        // })

        axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=392&date=02-06-2022").then((res)=> setResult(res.data.centers))

    },[])
console.log("result", result);

var arrr = []

var datafilter = result.map((e) => arrr.push(...e.sessions))

console.log("datafilter" , arrr)     

  return (
    <div>
      
    <h1>Fetch Data in Object !!</h1>
          
      

    </div>
  )
}

export default FetchDataObj
