'use client'

interface GlassButtonProps {
  variant?: 'filled' | 'outlined'
  children: React.ReactNode
  onClick?: () => void
}

const GlassButton = ({ variant = 'filled', children, onClick }: GlassButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.8rem 1.5rem',
        fontSize: '1.1rem',
        backgroundColor: variant === 'filled' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        color: '#fff',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.backgroundColor = variant === 'filled' ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {children}
    </button>
  )
}

export default GlassButton