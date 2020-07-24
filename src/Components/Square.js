import React from 'react'

export const Square = ({black, children}) => {
    const fill = black ? "black" : "white";
    const stroke = black ? "white" : "black";
    console.log(fill);
    return (
        <div style={{
            background: fill,
            color: stroke,
            width: "100%",
            height: "100%",
            minHeight: "1em"
            }}>
            {children}
        </div>
    )
}
