import React from 'react'

const CATEGORY_COLORS = {
  'Housing': 'bg-red-500',
  'Food': 'bg-orange-500',
  'Transport': 'bg-blue-500',
  'Utilities': 'bg-yellow-500',
  'Entertainment': 'bg-purple-500',
  'Healthcare': 'bg-green-500',
  'Shopping': 'bg-pink-500',
  'Education': 'bg-indigo-500',
  'Other': 'bg-gray-500'
}

function ExpenseList({ expenses, onRemoveExpense }) {
  const categoryGroups = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = []
    }
    acc[expense.category].push(expense)
    return acc
  }, {})

  const categoryTotals = Object.keys(categoryGroups).map(category => ({
    category,
    total: categoryGroups[category].reduce((sum, exp) => sum + parseFloat(exp.amount), 0),
    count: categoryGroups[category].length
  }))

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Expense Breakdown</h2>
      
      <div className="space-y-4">
        {categoryTotals.map(({ category, total, count }) => (
          <div key={category} className="border-l-4 border-indigo-500 pl-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-white font-semibold">{category}</h3>
                <p className="text-slate-400 text-sm">{count} item{count !== 1 ? 's' : ''}</p>
              </div>
              <span className="text-lg font-bold text-indigo-400">${total.toFixed(2)}</span>
            </div>
            
            <div className="space-y-2 ml-4">
              {categoryGroups[category].map(expense => (
                <div key={expense.id} className="flex justify-between items-center text-sm bg-slate-700 p-2 rounded">
                  <span className="text-slate-200">{expense.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-300">${parseFloat(expense.amount).toFixed(2)}</span>
                    <button
                      onClick={() => onRemoveExpense(expense.id)}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseList