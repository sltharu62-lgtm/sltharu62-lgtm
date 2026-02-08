import React, { useState } from 'react'
import { MarioHUD } from './MarioHUD'
import { GameScene } from './GameScene'

export function MarioGame() {
  const [gameState, setGameState] = useState({
    score: 0,
    coins: 0,
    lives: 3,
    level: 1,
    marioX: 50,
    marioY: 300,
  })

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-400 to-blue-300 overflow-hidden flex flex-col">
      <MarioHUD gameState={gameState} />
      <GameScene gameState={gameState} setGameState={setGameState} />
    </div>
  )
}