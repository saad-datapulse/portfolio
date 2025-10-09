'use client'

import { useEffect, useState } from 'react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav
      style={{
        width: isScrolled ? "94%" : "100%",
        padding: "1rem 2rem",
        background: "rgba(30, 30, 30, 0.6)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: isScrolled ? "1rem" : 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: isScrolled 
          ? "0 8px 32px rgba(0,0,0,0.2)" 
          : "0 2px 16px rgba(0,0,0,0.08)",
        borderRadius: isScrolled ? "1rem" : "0",
        transition: "all 0.3s ease",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          letterSpacing: "0.05em",
          textShadow: "0 1px 8px rgba(0,0,0,0.15)",
          cursor: "pointer",
        }}
        onClick={scrollToTop}
      >
        Abdullah Portfolio
      </span>
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              transition: "all 0.2s",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(2px)",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              transition: "background 0.2s",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(2px)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              transition: "background 0.2s",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(2px)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;