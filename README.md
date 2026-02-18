# FinanceFlow - Budget Planner Application

A comprehensive web-based budget planner that helps you track income, expenses, and savings with beautiful visualizations and export capabilities.

## Features

✨ **Income Management**
- Add multiple income sources
- Edit and remove income entries
- Automatic total calculation

💰 **Expense Tracking**
- Categorize expenses (Housing, Food, Transport, Utilities, Entertainment, Healthcare, Shopping, Education, Other)
- Add, edit, and remove expenses
- Track spending by category

📊 **Visual Analytics**
- Pie chart showing expense distribution by category
- Bar chart comparing income vs expenses
- Real-time updates as you modify data

💾 **Data Management**
- Save budgets with custom names
- Load previously saved budgets
- Delete unwanted budgets
- Automatic localStorage persistence

📁 **Export Options**
- Download budget data as CSV file
- Generate formatted PDF reports
- Export with a single click

📱 **Responsive Design**
- Mobile-friendly layout (< 640px)
- Tablet optimization (640px - 1024px)
- Full desktop experience (> 1024px)
- Dark theme with vibrant accent colors

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Data visualization library
- **Papa Parse** - CSV handling
- **jsPDF** - PDF generation

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/parvezmosaraf/financeflow.git
cd financeflow

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Project Structure

```
financeflow/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── BudgetForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── Charts.jsx
│   │   ├── HistoryPanel.jsx
│   │   └── ExportButtons.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   └── utils/
│       ├── calculations.js
│       └── exportUtils.js
```

## Usage

1. **Add Income**: Click "Add Income" and enter the source name and amount
2. **Add Expenses**: Select a category, enter the expense name and amount
3. **View Charts**: See your expense distribution and income vs expense comparison
4. **Save Budget**: Name your budget and click Save to store it
5. **Export Data**: Download your budget as CSV or PDF format

## Color Palette

- **Primary**: `#6366f1` (Indigo-500)
- **Secondary**: `#8b5cf6` (Violet-500)
- **Accent**: `#ec4899` (Pink-500)
- **Success**: `#10b981` (Emerald-500)
- **Warning**: `#f59e0b` (Amber-500)
- **Danger**: `#ef4444` (Red-500)
- **Background**: `#0f172a` (Slate-900)
- **Card Background**: `#1e293b` (Slate-800)

## Features in Detail

### Summary Cards
Four cards display:
- Total Income with trend
- Total Expenses with trend
- Net Savings
- Savings Rate percentage

### Budget Form
Sidebar form for adding:
- Income sources with amounts
- Expenses with category selection

### Charts Section
- **Pie Chart**: Shows expense breakdown by category with percentages
- **Bar Chart**: Compares total income, expenses, and savings

### Expense List
- Organized by category
- Category color indicators
- Per-category subtotals
- Quick delete buttons

### History Panel
- Lists all saved budgets
- Shows budget name and timestamp
- Displays income/expense summary
- Load or delete saved budgets

## Data Persistence

All data is automatically saved to your browser's localStorage:
- `financeflow_incomes` - Income entries
- `financeflow_expenses` - Expense entries
- `financeflow_budgets` - Saved budget snapshots

## Responsive Breakpoints

- **Mobile**: < 640px (single column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3+ columns with full layout)

## Future Enhancements

- [ ] Monthly budget goals
- [ ] Spending trends over time
- [ ] Budget comparison
- [ ] Investment tracking
- [ ] Cloud sync with account
- [ ] Multi-currency support
- [ ] Mobile app version

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by FinanceFlow Team