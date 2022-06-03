import React, { useEffect, useState } from 'react'
import "./ImageSlider.css"

export default function ImageSlider() {

    const sliderData = [
        {
            image: "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            index: 0
        },
        {
            image: "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
            index: 1
        },
        {
            image: "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            index: 2
        }
    ]

    const [current, setCurrent] = useState(0)
    // console.log("currrrr", current)
    let imgInterval;

    function auto() {
        imgInterval = setInterval(nextImg, 3000)
    }

    useEffect(() => {
        auto()
        return () => clearInterval(imgInterval)
    }, [current])

    
    const nextImg = () => {
        setCurrent(current === sliderData.length - 1 ? 0 : current + 1)
    }

    const prevImg = () => {
        setCurrent(current === 0 ? sliderData.length-1 : current-1 )
    }

    return (
        <div>
            <h1>Image Slider</h1>

            <div className='Icon'>
                <div onClick={() => prevImg() }>Prev</div>
                <div onClick={() => nextImg() }>Next</div>
            </div>

            <div>
                
                <img src={sliderData[current].image} alt="" width={500} height={200} />
            </div>

        </div>
    )
}