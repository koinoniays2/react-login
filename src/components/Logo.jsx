import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({className}) {
    return (
        <h1>
            <Link to="/"><div className={`text-xl ${className}`}>LOGO</div></Link>
        </h1>
    )
}
