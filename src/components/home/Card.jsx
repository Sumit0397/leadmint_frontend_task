import React from 'react'

const Card = (props) => {
    return (
        <div className="card bg-blue-300 m-3">
            <div className="h-[100px]">
                <h2 className="text-left text-2xl font-bold">{props.header}</h2>
                <div className='text-right pt-2'>
                    <p className='text-3xl'>{props.number}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
