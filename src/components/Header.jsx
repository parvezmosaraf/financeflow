import React from 'react'

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 p-6 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">💰 FinanceFlow</h1>
        <p className="text-indigo-100 mb-6">Your personal budget planning companion</p>
        
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-white text-indigo-600'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'history'
                ? 'bg-white text-indigo-600'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            History
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header