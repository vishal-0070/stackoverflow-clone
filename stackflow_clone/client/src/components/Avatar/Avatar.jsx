import React from 'react'

export default function Avatar({children,backgroundColor,px,py,padding,color,borderRadius,fontSize,textAlign,cursor}) {
  const style={
   backgroundColor,
   padding: `${px} ${py}`,
   color: color || 'black',
   borderRadius,
   fontSize,
   textAlign: "center",
   cursor: cursor || null,
   textDecoration: "none",
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}
