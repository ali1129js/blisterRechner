import React from 'react'

export default function BlisterRechner() {
  const produkte = [
    { name: 'Yasmin20', teiler: 24, color: 'from-blue-700 to-blue-500' },
    { name: 'Yasmin30', teiler: 21, color: 'from-cyan-700 to-cyan-500' },
    { name: 'Angeliq28', teiler: 28, color: 'from-purple-700 to-purple-500' },
    { name: 'Angeliq14', teiler: 14, color: 'from-pink-700 to-pink-500' },
    { name: 'Microlut28', teiler: 28, color: 'from-green-700 to-green-500' },
    { name: 'Diane35', teiler: 21, color: 'from-orange-700 to-orange-500' },
    { name: 'Qlaira', teiler: null, color: 'from-red-700 to-red-500' },
  ]

  const [ausgewaehlt, setAusgewaehlt] = React.useState(null)
  const [x, setX] = React.useState('')
  const [darkMode, setDarkMode] = React.useState(true)

  const berechnung = () => {
    if (!ausgewaehlt || !x) return 0
    if (ausgewaehlt.name === 'Qlaira') return 'Sonderfall'

    return Math.floor(Number(x) / ausgewaehlt.teiler)
  }

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-zinc-900 via-gray-800 to-black text-white'
          : 'bg-gradient-to-br from-gray-100 to-white text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl shadow-2xl p-6 mb-6 border border-zinc-700 bg-zinc-900">
          <h1 className="text-4xl font-bold text-center tracking-wide">
            Blister Rechner
          </h1>

          <p className="text-center text-gray-400 mt-2 text-lg">
            Industrie Dashboard – Wanne Berechnung
          </p>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-bold shadow-lg text-white"
            >
              {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {produkte.map((produkt) => (
            <button
              key={produkt.name}
              onClick={() => setAusgewaehlt(produkt)}
              className={`
                h-28 rounded-2xl text-xl font-bold shadow-xl transition-all duration-200
                bg-gradient-to-r ${produkt.color}
                hover:scale-105 hover:shadow-2xl
                ${ausgewaehlt?.name === produkt.name ? 'ring-4 ring-white' : ''}
              `}
            >
              {produkt.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">
              Eingabe
            </h2>

            <div className="mb-4">
              <label className="block text-gray-400 mb-2 text-lg">
                Gewähltes Produkt
              </label>

              <div className="bg-zinc-800 rounded-xl p-4 text-2xl font-bold min-h-[70px] flex items-center">
                {ausgewaehlt ? ausgewaehlt.name : 'Produkt auswählen'}
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-lg">
                Anzahl Pillen in der Wanne (X)
              </label>

              <input
                type="number"
                value={x}
                onChange={(e) => setX(e.target.value)}
                placeholder="Menge eingeben"
                className="w-full h-20 bg-zinc-800 border border-zinc-600 rounded-2xl text-3xl px-6 outline-none focus:border-cyan-400 text-white"
              />
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 shadow-2xl flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-200 mb-6">
              Ergebnis
            </h2>

            <div className="w-full bg-gradient-to-br from-gray-700 to-zinc-900 rounded-3xl p-8 border border-zinc-600 text-center shadow-inner">
              <div className="text-gray-400 text-xl mb-2">
                Anzahl Blister
              </div>

              <div className="text-6xl font-extrabold text-cyan-400 tracking-wider">
                {berechnung()}
              </div>
            </div>

            {ausgewaehlt && ausgewaehlt.name !== 'Qlaira' && (
              <div className="mt-6 text-lg text-gray-400">
                Formel: X ÷ {ausgewaehlt.teiler}
              </div>
            )}

            {ausgewaehlt?.name === 'Qlaira' && (
              <div className="mt-6 text-red-400 text-xl font-semibold">
                Qlaira = Sonderfall
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}