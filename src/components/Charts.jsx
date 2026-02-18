import React from 'react'
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#14b8a6', '#f97316']

function Charts({ expenses, totalIncome, totalExpenses }) {
  const expensesByCategory = expenses.reduce((acc, expense) => {
    const existing = acc.find(e => e.name === expense.category)
    if (existing) {
      existing.value += parseFloat(expense.amount)
    } else {
      acc.push({ name: expense.category, value: parseFloat(expense.amount) })
    }
    return acc
  }, [])

  const comparisonData = [
    {
      name: 'Summary',
      Income: totalIncome,
      Expenses: totalExpenses,
      Savings: totalIncome - totalExpenses
    }
  ]

  return (
    <div className="space-y-6">
      {expensesByCategory.length > 0 && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Expense Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expensesByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expensesByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {(totalIncome > 0 || totalExpenses > 0) && (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                formatter={(value) => `$${value.toFixed(2)}`}
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
              />
              <Legend />
              <Bar dataKey="Income" fill="#10b981" />
              <Bar dataKey="Expenses" fill="#ef4444" />
              <Bar dataKey="Savings" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {expensesByCategory.length === 0 && totalIncome === 0 && totalExpenses === 0 && (
        <div className="bg-slate-800 rounded-2xl p-12 shadow-lg text-center">
          <p className="text-slate-400 text-lg">Add income and expenses to see charts</p>
        </div>
      )}
    </div>
  )
}

export default Charts