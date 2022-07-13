import React from 'react';
import { useState } from "react";
import Star from './Star';
import "./main.css"

export default function StarRating({ onChange }) {
    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
        onChange?.(newRating);
    };

    return (
        <div >
            <span className='main'>
                {[1, 2, 3, 4, 5,6, 7].map((value) => (
                    <Star
                        key={value}
                        filled={value <= rating}
                        onClick={() => changeRating(value)}
                    />
                ))}
            </span>
        </div>
    )
}
