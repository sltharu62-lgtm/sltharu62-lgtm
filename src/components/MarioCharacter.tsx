import React from 'react'

interface MarioCharacterProps {
  direction: number
  isJumping: boolean
}

export function MarioCharacter({ direction, isJumping }: MarioCharacterProps) {
  return (
    <div
      className="w-10 h-12 relative"
      style={{
        transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >
      {/* Pixel art Mario using CSS */}
      <div className="w-full h-full relative">
        {/* Head */}
        <div className="absolute top-0 left-1 w-6 h-6 bg-red-600 rounded-sm"></div>
        <div className="absolute top-1 left-2 w-2 h-2 bg-yellow-100 rounded-full"></div>
        <div className="absolute top-2 left-4 w-1 h-1 bg-black"></div>

        {/* Body */}
        <div className="absolute top-6 left-1 w-8 h-4 bg-red-600 rounded-sm"></div>

        {/* Arms */}
        <div className="absolute top-6 left-0 w-1 h-3 bg-yellow-100 rounded-sm"></div>
        <div className="absolute top-6 right-0 w-1 h-3 bg-yellow-100 rounded-sm"></div>

        {/* Legs */}
        <div className="absolute bottom-0 left-2 w-2 h-4 bg-blue-600 rounded-sm"></div>
        <div className="absolute bottom-0 right-2 w-2 h-4 bg-blue-600 rounded-sm"></div>

        {/* Shoes */}
        <div className="absolute bottom-0 left-1 w-3 h-1 bg-yellow-600 rounded-sm"></div>
        <div className="absolute bottom-0 right-1 w-3 h-1 bg-yellow-600 rounded-sm"></div>
      </div>
    </div>
  )
}