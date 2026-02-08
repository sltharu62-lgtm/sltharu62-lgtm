import React, { useState, useEffect } from 'react'

interface EnemyProps {
  x: number
  y: number
}

export function Enemy({ x, y }: EnemyProps) {
  const [position, setPosition] = useState(x)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newPos = prev + direction * 2
        if (newPos < x - 100 || newPos > x + 100) {
          setDirection((d) => -d)
          newPos = prev + direction * 2
        }
        return newPos
      })
    }, 50)

    return () => clearInterval(interval)
  }, [direction, x])

  return (
    <div
      className="absolute"
      style={{
        left: `${position}px`,
        top: `${y}px`,
        transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >
      {/* Goomba enemy */}
      <div className="w-8 h-6 bg-amber-900 rounded-b-lg relative">
        <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>
    </div>
  )
}