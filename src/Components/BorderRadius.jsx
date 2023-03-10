import React from 'react'

export default function BorderRadius({ setdefaulborderTopLeftRadius, setdefaulborderTopRightRadius, setdefaulborderBottomLeftRadius, setdefaulborderBottomRightRadius }) {
    return (
        <div>
            <input type='range' onChange={(e) => {
                setTimeout(() => {
                    { setdefaulborderTopLeftRadius(`${e.target.value}%`) }
                }, 700);
            }} />
            <input type='range' onChange={(e) => {
                setTimeout(() => {
                    { setdefaulborderTopRightRadius(`${e.target.value}%`) }
                }, 700);
            }} />
            <input type='range' onChange={(e) => {
                setTimeout(() => {
                    { setdefaulborderBottomLeftRadius(`${e.target.value}%`) }
                }, 700);
            }} />
            <input type='range' onChange={(e) => {
                setTimeout(() => {
                    { setdefaulborderBottomRightRadius(`${e.target.value}%`) }
                }, 700);
            }} />
        </div>
    )
}
