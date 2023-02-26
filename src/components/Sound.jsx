import { useRef, useEffect } from 'react'
import { Howl } from 'howler'

import sounds from '../assets/sounds.json'

function createHowl (src) {
  return new Howl({
    src,
    preload: true,
    loop: true,
  })
}

export default function Sound ({ soundId, play }) {
  const src = sounds[soundId].url
  const howl = useRef()

  useEffect(() => {
    if (howl.current) {
      howl.current.unload()
      howl.current = undefined
    }
    if (play) {
      howl.current = createHowl(src)
      howl.current.play()
    }
  }, [soundId])

  useEffect(() => {
    if (play) {
      howl.current ??= createHowl(src)
      howl.current.play()
    } else {
      howl.current?.pause()
    }
  }, [play])
}
