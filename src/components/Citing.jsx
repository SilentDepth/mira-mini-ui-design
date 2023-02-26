export default function Citing () {
  return (
    <div className="pt-1 fixed bottom-4 right-4 group">
      <a id="citing" className="text-white drop-shadow">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </a>
      <div className="px-2 py-1 absolute bottom-full right-0 text-sm whitespace-nowrap bg-black/60 text-white rounded invisible group-hover:visible">
        <p>Heavily inspired by <a href="https://github.com/Nyaacinth/Mira" className="text-sky-400 underline">Nyaacinth’s Project Mira</a>.</p>
        <p>Audios credited to <a href="https://github.com/mingcheng/Rainville" className="text-sky-400 underline">Rainville</a>.</p>
      </div>
    </div>
  )
}
