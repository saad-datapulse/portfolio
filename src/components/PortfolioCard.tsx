'use client'

import Image from 'next/image'

interface PortfolioCardProps {
  title: string
  image: string
  description: string
}

const PortfolioCard = ({ title, image, description }: PortfolioCardProps) => {
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '1rem',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: 'translateY(0)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.transform = 'translateY(-10px)';
        target.style.background = 'rgba(255, 255, 255, 0.1)';
        target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.transform = 'translateY(0)';
        target.style.background = 'rgba(255, 255, 255, 0.05)';
        target.style.boxShadow = 'none';
        target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
      }}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '0.5rem',
          marginBottom: '1.5rem'
        }}
      />
      <h3 style={{
        color: '#fff',
        fontSize: '1.5rem',
        marginBottom: '1rem'
      }}>{title}</h3>
      <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '1rem',
        lineHeight: '1.6'
      }}>{description}</p>
    </div>
  )
}

export default PortfolioCard