'use client'

const NavBar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        background: "rgba(30, 30, 30, 0.6)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          letterSpacing: "0.05em",
          textShadow: "0 1px 8px rgba(0,0,0,0.15)",
        }}
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