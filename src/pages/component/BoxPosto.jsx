import React from 'react';


export default function BoxPosto(props)
{
    return (
        <div className='BoxPrincipal'>
            <div className='LogoPosto'>IMG</div>
            <div className='LabelBox'>
                <ul>
                    <li>
                        <h3>5,50</h3>
                        <h5>G <small>COMUM</small></h5>
                    </li>
                    <li>
                        <h5>A<small>COMUM</small></h5>
                        <h3>R$:5,50</h3>
                    </li>
                    <li>
                        <h5>D <small>COMUM</small></h5>
                        <h3>R$:5,50</h3>
                    </li>
                    <li>
                        <h5>E<small>COMUM</small></h5>
                        <h3>R$:5,50</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}