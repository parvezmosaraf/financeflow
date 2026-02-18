import React from 'react'

function SummaryCards({ totalIncome, totalExpenses, netSavings, savingsRate }) {
  const cards = [
    {
      label: 'Total Income',
      value: totalIncome,
      icon: '📈',
      color: 'from-emerald-500 to-teal-600',
      change: '+12.5%'
    },
    {
      label: 'Total Expenses',
      value: totalExpenses,
      icon: '📉',
      color: 'from-red-500 to-pink-600',
      change: '-8.2%'
    },
    {
      label: 'Net Savings',
      value: netSavings,
      icon: '💎',
      color: 'from-blue-500 to-indigo-600',
      change: netSavings > 0 ? '+' + netSavings.toFixed(2) : netSavings.toFixed(2)
    },
    {
      label: 'Savings Rate',
      value: savingsRate.toFixed(1) + '%',
      icon: '🎯',
      color: 'from-violet-500 to-purple-600',
      change: savingsRate > 0 ? 'Healthy' : 'Review'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-lg text-white overflow-hidden relative`}
        >
          <div className="absolute top-0 right-0 opacity-10 text-6xl">{card.icon}</div>
          <div className="relative z-10">
            <p className="text-sm font-semibold opacity-90 mb-2">{card.label}</p>
            <h3 className="text-3xl font-bold mb-2">
              {typeof card.value === 'number' ? `$${card.value.toFixed(2)}` : card.value}
            </h3>
            <p className="text-xs opacity-75">{card.change}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards