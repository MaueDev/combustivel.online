import React from 'react'
import {GoLocation} from "react-icons/go"
import "./input.css"
function TextLocation(props)
{
    return (
        <>
        <input type="text" className='InputLocation' placeholder="Cidade"/>
        <GoLocation className="IconLocation"/>
        </>
    )
}

export default TextLocation