import { SoundProvider } from './components/SoundContext.jsx'
import TheWindow from './components/TheWindow.jsx'
import Citing from './components/Citing.jsx'
import BG from './assets/bg.jpg'

export default function App () {
  return (
    <SoundProvider>
      <div className="h-screen bg-cover bg-center grid place-items-center" style={{ backgroundImage: `url(${BG})` }}>
        <TheWindow/>
        <Citing/>
      </div>
    </SoundProvider>
  )
}
