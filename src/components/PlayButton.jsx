import css from './PlayButton.module.css'

export default function PlayButton ({ isPlaying, onClick, className }) {
  return (
    <button onClick={onClick} className={`${className} ${css.PlayButton} text-white hover:text-gray-300`}>
      <span className={`grid ${isPlaying ? 'scale-80' : ''} transition duration-500  ease-in-out`}>
        {/* ▶️ */}
        <svg viewBox="0 0 24 24" fill="url(#play-gradient)" className={`w-12 h-12 col-start-1 row-start-1 drop-shadow-lg ${isPlaying ? 'opacity-0' : ''} transition duration-300`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          <defs>
            <linearGradient id="play-gradient" gradientTransform="rotate(60)">
              <stop offset="0%"/>
              <stop offset="100%"/>
            </linearGradient>
          </defs>
        </svg>
        {/* ⏸ */}
        <svg viewBox="0 0 24 24" fill="currentColor" className={`w-12 h-12 col-start-1 row-start-1 drop-shadow-lg ${isPlaying ? '' : 'opacity-0'} transition-opacity duration-300`}>
          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
        </svg>
      </span>
    </button>
  )
}
