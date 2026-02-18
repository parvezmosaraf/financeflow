export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        bgDark: '#0f172a',
        cardBg: '#1e293b',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        h1: ['32px', { fontWeight: 700 }],
        h2: ['24px', { fontWeight: 600 }],
        h3: ['18px', { fontWeight: 600 }],
        body: ['14px', { fontWeight: 400 }],
        small: ['12px', { fontWeight: 400 }]
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      },
      borderRadius: {
        card: '16px',
        input: '12px',
        button: '8px'
      },
      boxShadow: {
        card: '0 10px 40px -10px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: []
}