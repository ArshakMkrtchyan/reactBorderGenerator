import React from 'react'

export default function Width({ setdefaultwidth }) {
    return (
        <div>
            <input type='range' onChange={(e) => {
                setTimeout(() => {
                    { setdefaultwidth(`${e.target.value}px`) }
                }, 700);
            }} />
        </div>
    )
}
