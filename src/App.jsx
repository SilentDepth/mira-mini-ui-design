import { useState } from 'react'

import css from './App.module.css'
import PlayButton from './components/PlayButton.jsx'
import SoundSelect from './components/SoundSelect.jsx'
import Sound from './components/Sound.jsx'
import BG from './assets/bg.jpg'

export default function App () {
  const [isPlaying, setIsPlaying] = useState(false)
  const [soundId, setSoundId] = useState(0)

  return (
    <div className="h-screen bg-cover bg-center grid place-items-center" style={{ backgroundImage: `url(${BG})` }}>
      {/* Window root */}
      <div
        id="mira-window"
        className={`grid grid-rows-[auto_1fr] grid-cols-1 overflow-hidden ${isPlaying ? 'bg-slate-500/40' : 'bg-zinc-400/60'} rounded-lg ring-1 ring-black/10 shadow-2xl ${isPlaying ? 'backdrop-blur' : 'backdrop-blur'} transition-all duration-500 ease-in-out`}
        style={{ width: 160, height: 160 }}
      >
        {/* Window background */}
        <div className={`row-span-full col-span-full ${css.WindowBg} ${isPlaying ? '' : 'opacity-0'}`}></div>
        {/* Window title */}
        <div className="row-start-1 col-start-1 flex items-center">
          <div className="flex-1 p-2 flex space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#B3B5B8' }}></div>
          </div>
          {/* <div className="flex-none text-sm text-white/90 drop-shadow-sm">Mira</div> */}
          {/* <div className="flex-1 p-2"></div> */}
        </div>
        {/* Window main */}
        <div className="row-start-2 col-start-1 flex flex-col justify-center items-center">
          <PlayButton className="" isPlaying={isPlaying} onClick={() => setIsPlaying(prev => !prev)}/>
          <SoundSelect value={soundId} onChange={name => setSoundId(name)} className="mt-2"/>
          <Sound soundId={soundId} play={isPlaying}/>
        </div>
      </div>
    </div>
  )
}
