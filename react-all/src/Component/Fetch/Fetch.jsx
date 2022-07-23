import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Fetch.css"

export default function Fetch() {
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get("https://reqres.in/api/users").then((res) => setData(res.data.data))

    }, [])

    console.log("data", data)
    return (
        <div>
            <div className='MainDIV'>

                {
                    data.map((e) => (
                        <div key={e.id} className="cardDiv" >
                            <img src={e.avatar} />
                            <p>{e.id}</p>
                            <p>{e.first_name}</p>
                            <p>{e.last_name}</p>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}