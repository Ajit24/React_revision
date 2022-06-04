import React, { useEffect, useState, useSyncExternalStore } from 'react'
import "./DigitalClk.css"

const DigitalClock = () => {

const[hour , setHour] = useState(0)
const[sec , setSec] = useState(0)
const[mins , setMins] = useState(0)

const[day,setDay] = useState("")
const[year, setYear] = useState("")
const[month , setMonth] = useState("")

const[notation , setNotation] = useState("")

const current = new Date()
console.log("new" , current)

useEffect(() => {
    setHour(current.getHours())
    setMins(current.getMinutes())
    setSec(current.getSeconds())

    setDay(current.getDate())
    setMonth(current.getMonth())
    setYear(current.getFullYear())
    
},[])

useEffect(() => {
    setTimeout(() => {
        if(hour == 24){
            setHour(0)
        }
        if(mins == 60){
            setHour(hour + 1)
            setMins(0)
        }
        if(sec ==60){
            setMins(mins+1)
            setSec(0)
        }
        else{
            setSec(sec + 1)
        }

        var nor = (hour >= 12 ) ? "PM" : "AM";
        setNotation(nor)
    }, 1000);
},[sec, hour, mins])


  return (
    <div>
       <h1>Digital-Clock !!</h1>
       
       <div className='TimeClk'>
       <p>Hour: {hour}</p>
       <p>Mins : {mins}</p>
       <p>Sec : {sec}</p>
       <p>{notation}</p>
       </div>

       <div className='TimeClk'>
       <p>Day: {day}</p>
       <p>Month : {month + 1}</p>
       <p>Year : {year}</p>
       </div>
    </div>
  )
}

export default DigitalClock