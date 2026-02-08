import React from 'react'

interface PlatformProps {
  x: number
  y: number
  width: number
}

export function Platform({ x, y, width }: PlatformProps) {
  const blockSize = 20
  const numBlocks = Math.ceil(width / blockSize)

  return (
    <div
      className="absolute flex"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {Array.from({ length: numBlocks }).map((_, i) => (
        <div
          key={i}
          className="w-5 h-5 bg-yellow-700 border-2 border-yellow-900 box-border"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.1) 75%)
            `,
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0',
          }}
        ></div>
      ))}
    </div>
  )
}