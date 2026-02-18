import React from 'react'

function HistoryPanel({ budgets, onLoadBudget, onDeleteBudget }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg max-w-2xl">
      <h2 className="text-2xl font-semibold text-white mb-6">Saved Budgets</h2>
      
      {budgets.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No saved budgets yet. Create and save a budget to see it here!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {budgets.map(budget => (
            <div
              key={budget.id}
              className="bg-slate-700 rounded-lg p-4 flex justify-between items-center hover:bg-slate-650 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold">{budget.name}</h3>
                <p className="text-slate-400 text-sm">{formatDate(budget.timestamp)}</p>
                <p className="text-slate-300 text-xs mt-1">
                  Income: ${budget.incomes.reduce((sum, i) => sum + (parseFloat(i.amount) || 0), 0).toFixed(2)} | 
                  Expenses: ${budget.expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onLoadBudget(budget)}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold text-sm"
                >
                  Load
                </button>
                <button
                  onClick={() => onDeleteBudget(budget.id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryPanel