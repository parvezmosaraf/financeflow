export function calculateTotalIncome(incomes) {
  return incomes.reduce((sum, income) => sum + (parseFloat(income.amount) || 0), 0)
}

export function calculateTotalExpenses(expenses) {
  return expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0)
}

export function calculateNetSavings(totalIncome, totalExpenses) {
  return totalIncome - totalExpenses
}

export function calculateSavingsRate(netSavings, totalIncome) {
  if (totalIncome === 0) return 0
  return (netSavings / totalIncome) * 100
}

export function getExpensesByCategory(expenses) {
  return expenses.reduce((acc, expense) => {
    const existing = acc.find(e => e.category === expense.category)
    if (existing) {
      existing.total += parseFloat(expense.amount)
      existing.items.push(expense)
    } else {
      acc.push({
        category: expense.category,
        total: parseFloat(expense.amount),
        items: [expense]
      })
    }
    return acc
  }, [])
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}