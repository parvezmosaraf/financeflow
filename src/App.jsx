import { useState, useEffect } from 'react'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import BudgetForm from './components/BudgetForm'
import ExpenseList from './components/ExpenseList'
import Charts from './components/Charts'
import HistoryPanel from './components/HistoryPanel'
import ExportButtons from './components/ExportButtons'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [incomes, setIncomes] = useLocalStorage('financeflow_incomes', [])
  const [expenses, setExpenses] = useLocalStorage('financeflow_expenses', [])
  const [savedBudgets, setSavedBudgets] = useLocalStorage('financeflow_budgets', [])
  const [budgetName, setBudgetName] = useState('')

  const totalIncome = incomes.reduce((sum, income) => sum + (parseFloat(income.amount) || 0), 0)
  const totalExpenses = expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0)
  const netSavings = totalIncome - totalExpenses
  const savingsRate = totalIncome > 0 ? (netSavings / totalIncome) * 100 : 0

  const addIncome = (income) => {
    setIncomes([...incomes, { ...income, id: Date.now() }])
  }

  const removeIncome = (id) => {
    setIncomes(incomes.filter(income => income.id !== id))
  }

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const saveBudget = () => {
    if (!budgetName.trim()) return
    const newBudget = {
      id: Date.now(),
      name: budgetName,
      incomes,
      expenses,
      timestamp: new Date().toISOString()
    }
    setSavedBudgets([...savedBudgets, newBudget])
    setBudgetName('')
    alert('Budget saved successfully!')
  }

  const loadBudget = (budget) => {
    setIncomes(budget.incomes)
    setExpenses(budget.expenses)
  }

  const deleteBudget = (id) => {
    setSavedBudgets(savedBudgets.filter(budget => budget.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'dashboard' ? (
        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            <SummaryCards 
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
              netSavings={netSavings}
              savingsRate={savingsRate}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <BudgetForm 
                  onAddIncome={addIncome}
                  onAddExpense={addExpense}
                  incomes={incomes}
                  expenses={expenses}
                  onRemoveIncome={removeIncome}
                  onRemoveExpense={removeExpense}
                />
              </div>
              
              <div className="lg:col-span-2">
                <Charts expenses={expenses} totalIncome={totalIncome} totalExpenses={totalExpenses} />
              </div>
            </div>

            {expenses.length > 0 && (
              <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Save Budget</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Budget name..."
                    value={budgetName}
                    onChange={(e) => setBudgetName(e.target.value)}
                    className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={saveBudget}
                    className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold"
                  >
                    Save
                  </button>
                </div>
              </div>

              <ExportButtons incomes={incomes} expenses={expenses} />
            </div>
          </div>
        </main>
      ) : (
        <main className="container mx-auto px-4 py-8">
          <HistoryPanel budgets={savedBudgets} onLoadBudget={loadBudget} onDeleteBudget={deleteBudget} />
        </main>
      )}
    </div>
  )
}

export default App