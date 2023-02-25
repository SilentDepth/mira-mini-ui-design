const SOUNDS = [
  'Rain 1',
  'Rain 2',
  'Rain 3',
]

export default function SoundSelect ({ value, onChange, className }) {
  return (
    <label className={`${className} relative group`}>
      <span className="text-sm flex items-center text-white group-hover:bg-white group-hover:text-black group-hover:rounded">
        <span className="px-1 font-medium drop-shadow">{value}</span>
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 drop-shadow-sm">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </span>
      <select value={value} className="absolute inset-0 opacity-0" onChange={ev => onChange(ev.target.value)}>
        {SOUNDS.map(name => <option key={name} value={name}>{name}</option>)}
      </select>
    </label>
  )
}
