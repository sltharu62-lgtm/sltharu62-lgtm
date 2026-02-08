import React, { useState, useEffect, useRef } from 'react'
import { MarioCharacter } from './MarioCharacter'
import { Platform } from './Platform'
import { Enemy } from './Enemy'

interface GameState {
  score: number
  coins: number
  lives: number
  level: number
  marioX: number
  marioY: number
}

interface GameSceneProps {
  gameState: GameState
  setGameState: (state: GameState) => void
}

export function GameScene({ gameState, setGameState }: GameSceneProps) {
  const [marioVelocityY, setMarioVelocityY] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [direction, setDirection] = useState(1)
  const keysPressed = useRef<{ [key: string]: boolean }>({})

  const GRAVITY = 0.5
  const JUMP_STRENGTH = -12
  const GROUND_Y = 400
  const MOVE_SPEED = 5

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameState((prevState) => {
        let newX = prevState.marioX
        let newVelocityY = marioVelocityY + GRAVITY

        if (keysPressed.current['ArrowLeft'] || keysPressed.current['a']) {
          newX = Math.max(0, newX - MOVE_SPEED)
          setDirection(-1)
        }
        if (keysPressed.current['ArrowRight'] || keysPressed.current['d']) {
          newX = Math.min(window.innerWidth - 40, newX + MOVE_SPEED)
          setDirection(1)
        }

        if ((keysPressed.current['ArrowUp'] || keysPressed.current['w'] || keysPressed.current[' ']) && !isJumping && prevState.marioY >= GROUND_Y) {
          newVelocityY = JUMP_STRENGTH
          setIsJumping(true)
        }

        let newY = prevState.marioY + newVelocityY

        if (newY >= GROUND_Y) {
          newY = GROUND_Y
          newVelocityY = 0
          setIsJumping(false)
        }

        setMarioVelocityY(newVelocityY)

        return {
          ...prevState,
          marioX: newX,
          marioY: newY,
        }
      })
    }, 30)

    return () => clearInterval(gameLoop)
  }, [isJumping, marioVelocityY])

  return (
    <div className="relative flex-1 bg-gradient-to-b from-blue-400 via-blue-300 to-green-600 overflow-hidden">
      <div className="absolute top-12 left-12 text-6xl opacity-80">☁️</div>
      <div className="absolute top-20 right-32 text-5xl opacity-60">☁️</div>
      <div className="absolute top-32 left-1/3 text-7xl opacity-70">☁️</div>

      <div
        className="absolute transition-none"
        style={{
          left: `${gameState.marioX}px`,
          top: `${gameState.marioY}px`,
        }}
      >
        <MarioCharacter direction={direction} isJumping={isJumping} />
      </div>

      <Platform x={100} y={480} width={600} />
      <Platform x={800} y={380} width={300} />
      <Platform x={50} y={300} width={150} />
      <Platform x={1000} y={420} width={200} />

      <Enemy x={400} y={450} />
      <Enemy x={900} y={350} />

      <div className="absolute bottom-24 right-12 text-5xl cursor-pointer hover:scale-110 transition-transform">
        🚩
      </div>
    </div>
  )
}