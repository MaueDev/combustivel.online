import React from 'react';


export default function BoxPosto(props)
{
    return (
        <div className='BoxPrincipal'>
            <div className='LogoPosto'>IMG</div>
            <div className='LabelBox'>
                <ul>
                    <li>
                        <h5>5,50</h5>
                        <h6>G </h6><small>Comum</small>
                    </li>
                    <li>
                        <h5>5,50</h5>
                        <h6>G </h6><small>Aditivada</small>
                    </li>
                    <li>
                        <h5>5,50</h5>
                        <h6>A</h6>
                        <small></small>
                    </li>
                    <li>
                        <h5>5,50</h5>
                        <h6>Diesel </h6><small>Comun</small>
                    </li>
                    <li>
                        <h5>5,50</h5>
                        <h6>Diesel </h6><small>S10</small>
                    </li>
                </ul>
            </div>
        </div>
    )
}