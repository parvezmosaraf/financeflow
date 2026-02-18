import React, { useState } from 'react'

const EXPENSE_CATEGORIES = [
  'Housing',
  'Food',
  'Transport',
  'Utilities',
  'Entertainment',
  'Healthcare',
  'Shopping',
  'Education',
  'Other'
]

function BudgetForm({ onAddIncome, onAddExpense, incomes, expenses, onRemoveIncome, onRemoveExpense }) {
  const [incomeForm, setIncomeForm] = useState({ name: '', amount: '' })
  const [expenseForm, setExpenseForm] = useState({ name: '', amount: '', category: 'Other' })

  const handleAddIncome = (e) => {
    e.preventDefault()
    if (incomeForm.name && incomeForm.amount) {
      onAddIncome({ name: incomeForm.name, amount: parseFloat(incomeForm.amount) })
      setIncomeForm({ name: '', amount: '' })
    }
  }

  const handleAddExpense = (e) => {
    e.preventDefault()
    if (expenseForm.name && expenseForm.amount) {
      onAddExpense({ 
        name: expenseForm.name, 
        amount: parseFloat(expenseForm.amount),
        category: expenseForm.category
      })
      setExpenseForm({ name: '', amount: '', category: 'Other' })
    }
  }

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Income Sources</h2>
        <form onSubmit={handleAddIncome} className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Income source (e.g., Salary)"
            value={incomeForm.name}
            onChange={(e) => setIncomeForm({ ...incomeForm, name: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Amount"
            value={incomeForm.amount}
            onChange={(e) => setIncomeForm({ ...incomeForm, amount: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold"
          >
            Add Income
          </button>
        </form>
        
        <div className="space-y-2">
          {incomes.length === 0 ? (
            <p className="text-slate-400 text-sm">No income sources added yet</p>
          ) : (
            incomes.map(income => (
              <div key={income.id} className="flex justify-between items-center bg-slate-700 p-3 rounded-lg">
                <span className="text-white">{income.name}: ${parseFloat(income.amount).toFixed(2)}</span>
                <button
                  onClick={() => onRemoveIncome(income.id)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <hr className="border-slate-700" />

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Expenses</h2>
        <form onSubmit={handleAddExpense} className="space-y-3 mb-4">
          <select
            value={expenseForm.category}
            onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            {EXPENSE_CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Expense description"
            value={expenseForm.name}
            onChange={(e) => setExpenseForm({ ...expenseForm, name: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseForm.amount}
            onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold"
          >
            Add Expense
          </button>
        </form>

        <div className="space-y-2">
          {expenses.length === 0 ? (
            <p className="text-slate-400 text-sm">No expenses added yet</p>
          ) : (
            expenses.map(expense => (
              <div key={expense.id} className="flex justify-between items-center bg-slate-700 p-3 rounded-lg">
                <span className="text-white">
                  <span className="text-xs bg-pink-500 px-2 py-1 rounded mr-2">{expense.category}</span>
                  {expense.name}: ${parseFloat(expense.amount).toFixed(2)}
                </span>
                <button
                  onClick={() => onRemoveExpense(expense.id)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default BudgetForm