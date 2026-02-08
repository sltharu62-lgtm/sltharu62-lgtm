import React from 'react'

interface GameState {
  score: number
  coins: number
  lives: number
  level: number
  marioX: number
  marioY: number
}

interface MarioHUDProps {
  gameState: GameState
}

export function MarioHUD({ gameState }: MarioHUDProps) {
  return (
    <div className="w-full bg-black px-8 py-4 flex justify-between items-center font-bold text-white text-sm tracking-widest"
         style={{ fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <span className="text-red-500">❤️</span>
          <span>MARIO</span>
          <span className="text-yellow-300">{gameState.score.toString().padStart(6, '0')}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🪙</span>
          <span className="text-yellow-300">{gameState.coins.toString().padStart(3, '0')}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span>LIVES</span>
        <span className="text-red-400">{gameState.lives}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>WORLD</span>
        <span className="text-yellow-300">1-{gameState.level}</span>
      </div>
    </div>
  )
}