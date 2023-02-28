import { createContext, useState } from 'react'

export const SoundContext = createContext()

export function SoundProvider ({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [soundId, setSoundId] = useState(0)

  const value = {
    isPlaying,
    setIsPlaying,
    soundId,
    setSoundId,
  }

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  )
}
