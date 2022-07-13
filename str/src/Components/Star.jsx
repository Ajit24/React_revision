import React from 'react';
import { FaStar } from "react-icons/fa";

export default function Star({ filled, onClick }) {
    return (
        <div>
            <FaStar
                color={filled ? "orange" : "lightgray"}
                onClick={onClick} />
        </div>
    )
}

