export default function Home() {
  return (
    <main style={{ maxWidth: 700, margin: "2rem auto", fontFamily: "sans-serif" }}>
      {/* Sample Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0",
          borderBottom: "1px solid #eee",
          marginBottom: "2rem",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Saad's Portfolio</span>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="#" style={{ textDecoration: "none", color: "#333" }}>Home</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "#333" }}>Projects</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "#333" }}>Contact</a></li>
        </ul>
      </nav>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="/window.svg"
          alt="Profile"
          style={{ width: 100, borderRadius: "50%" }}
        />
        <h1>Saad</h1>
        <p style={{ color: "#555" }}>Frontend Developer & Designer</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          Hi! I'm Saad, a passionate frontend developer with a love for crafting beautiful and accessible web experiences. I enjoy working with React, Next.js, and modern CSS.
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Portfolio Website</strong> – A personal site built with Next.js and Tailwind CSS.
          </li>
          <li>
            <strong>Weather App</strong> – Real-time weather dashboard using OpenWeatherMap API.
          </li>
          <li>
            <strong>Task Manager</strong> – Productivity app for managing daily tasks.
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:saad@example.com">saad@example.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/saad">github.com/saad</a>
        </p>
      </section>
      {/* Sample Footer */}
      <footer
        style={{
          marginTop: "3rem",
          padding: "1rem 0",
          borderTop: "1px solid #eee",
          textAlign: "center",
          color: "#888",
          fontSize: "0.95rem",
        }}
      >
        &copy; {new Date().getFullYear()} Saad. All rights reserved.
      </footer>
    </main>
  );
}
