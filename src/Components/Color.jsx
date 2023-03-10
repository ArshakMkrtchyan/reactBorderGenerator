import React from 'react'

export default function Color({ setdefaultdefaultcolor }) {
    return (
        <div>
            <input type='color' onChange={(e) => {
                setTimeout(() => {
                    { setdefaultdefaultcolor(e.target.value) }
                }, 700);
            }} />
        </div>
    )
}
