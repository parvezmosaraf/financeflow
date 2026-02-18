export function generateCSVContent(incomes, expenses) {
  const headers = ['Type', 'Name', 'Amount', 'Category']
  
  const incomeRows = incomes.map(i => [
    'Income',
    i.name,
    i.amount,
    'Income'
  ])
  
  const expenseRows = expenses.map(e => [
    'Expense',
    e.name,
    e.amount,
    e.category
  ])
  
  const allRows = [...incomeRows, ...expenseRows]
  
  const csvContent = [
    headers.join(','),
    ...allRows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n')
  
  return csvContent
}

export function downloadFile(content, filename, type) {
  const element = document.createElement('a')
  element.setAttribute('href', `data:${type};charset=utf-8,${encodeURIComponent(content)}`)
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}