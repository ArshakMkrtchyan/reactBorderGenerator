import React from 'react'

export default function BorderStyle({ border, setdefaultborder }) {
    return (
        <div>
            {border.map(item => {
                return (
                    <button onClick={() => { setdefaultborder(item) }}>{item}</button>
                )
            })}
        </div>
    )
}
