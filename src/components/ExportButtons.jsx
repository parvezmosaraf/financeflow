import React, { useState } from 'react'
import Papa from 'papaparse'
import jsPDF from 'jspdf'
import 'jspdf/dist/jspdf.umd.min.js'

function ExportButtons({ incomes, expenses }) {
  const [isExporting, setIsExporting] = useState(false)

  const handleCSVExport = () => {
    setIsExporting(true)
    
    const incomeData = incomes.map(i => ({
      Type: 'Income',
      Name: i.name,
      Amount: i.amount,
      Category: 'Income'
    }))
    
    const expenseData = expenses.map(e => ({
      Type: 'Expense',
      Name: e.name,
      Amount: e.amount,
      Category: e.category
    }))
    
    const allData = [...incomeData, ...expenseData]
    const csv = Papa.unparse(allData)
    
    const link = document.createElement('a')
    link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
    link.download = `budget_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    
    setIsExporting(false)
  }

  const handlePDFExport = () => {
    setIsExporting(true)
    
    const pdf = new jsPDF()
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    let yPos = 10
    
    // Header
    pdf.setFontSize(20)
    pdf.text('FinanceFlow Budget Report', 10, yPos)
    yPos += 10
    
    pdf.setFontSize(10)
    pdf.text(`Generated: ${new Date().toLocaleString()}`, 10, yPos)
    yPos += 10
    
    // Summary
    const totalIncome = incomes.reduce((sum, i) => sum + parseFloat(i.amount), 0)
    const totalExpenses = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0)
    const netSavings = totalIncome - totalExpenses
    
    pdf.setFontSize(12)
    pdf.text('Summary', 10, yPos)
    yPos += 7
    
    pdf.setFontSize(10)
    pdf.text(`Total Income: $${totalIncome.toFixed(2)}`, 10, yPos)
    yPos += 5
    pdf.text(`Total Expenses: $${totalExpenses.toFixed(2)}`, 10, yPos)
    yPos += 5
    pdf.text(`Net Savings: $${netSavings.toFixed(2)}`, 10, yPos)
    yPos += 10
    
    // Income section
    if (incomes.length > 0) {
      pdf.setFontSize(12)
      pdf.text('Income Sources', 10, yPos)
      yPos += 7
      
      pdf.setFontSize(10)
      incomes.forEach(income => {
        pdf.text(`${income.name}: $${parseFloat(income.amount).toFixed(2)}`, 15, yPos)
        yPos += 5
        if (yPos > pageHeight - 10) {
          pdf.addPage()
          yPos = 10
        }
      })
    }
    
    yPos += 5
    
    // Expense section
    if (expenses.length > 0) {
      pdf.setFontSize(12)
      pdf.text('Expenses', 10, yPos)
      yPos += 7
      
      pdf.setFontSize(10)
      expenses.forEach(expense => {
        pdf.text(`${expense.name} [${expense.category}]: $${parseFloat(expense.amount).toFixed(2)}`, 15, yPos)
        yPos += 5
        if (yPos > pageHeight - 10) {
          pdf.addPage()
          yPos = 10
        }
      })
    }
    
    pdf.save(`budget_${new Date().toISOString().split('T')[0]}.pdf`)
    setIsExporting(false)
  }

  return (
    <div className="bg-slate-800 p-6 rounded-lg space-y-3">
      <h3 className="text-lg font-semibold text-white">Export Data</h3>
      <button
        onClick={handleCSVExport}
        disabled={isExporting}
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
      >
        {isExporting ? 'Exporting...' : 'Export as CSV'}
      </button>
      <button
        onClick={handlePDFExport}
        disabled={isExporting}
        className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
      >
        {isExporting ? 'Exporting...' : 'Export as PDF'}
      </button>
    </div>
  )
}

export default ExportButtons