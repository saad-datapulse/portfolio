import Image from "next/image";
import NavBar from "@/components/layout/navbar";
import DarkVeil from "@/components/layout/darkveil";
import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import GlassButton from "@/components/GlassButton";
import PortfolioCard from '@/components/PortfolioCard'

export default function Home() {
  return (
    <main style={{
      height: '100vh',
      overflowY: 'auto',
      scrollBehavior: 'smooth',
      backgroundColor: '#121212'
    }}>
      <div style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        minHeight: '100vh'
      }}>

        <DarkVeil speed={1} />

        <NavBar />

        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 10
        }}>
          <h1 style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            marginBottom: '0',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}

              animationSpeed={1}

              showBorder={false}

              className="custom-class">Full Stack Developer </GradientText>
            <br />
          </h1>
          <p style={{
            fontSize: '3rem',
            opacity: 0.9,
            marginTop: '-6rem',
            marginBottom: '1rem'
          }}>
            & Content Creator
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus perferendis et expedita saepe sapiente eligendi. Quis ipsum rem similique reprehenderit soluta et consectetur autem doloribus nihil nemo animi dolorum doloremque repellendus possimus, porro obcaecati vel iure, ad ex aperiam?</p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            <GlassButton variant="filled">Contact Now</GlassButton>
            <GlassButton variant="outlined">More Info</GlassButton>
          </div>
        </div>


      </div>

      <div style={{
        minHeight: '100vh',
        backgroundColor: '#000000ff',
        padding: '10rem',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'column',
      }}>

        <h2 style={{ color: '#fff', fontSize: '4rem', fontWeight: 'bold' }}>Services</h2>

        <h3 style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>Web Development Services</h3>


        <div style={{
          color: '#fff',
          fontSize: '1.2rem',
          maxWidth: '80vw',
          marginTop: '3rem',
          display: 'flex',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <span style={{ flex: 1 }}>
            Whether you want your presence on the internet or scale your business, our website development services are tailored to meet your needs. We can help you in showcasing your idea to the world. From complex business requirements to designing and implementation, our expert team at Data Pulse Technologies ensures your website has the maximum reach. We also emphasize on performance optimization and scalability while developing your solutions. In our Website Design Services, we create robust and eye catching UIs by meticulously keeping an eye on the business requirements and best user experience. Our team leverages the latest technological tools to craft your idea to reality in our custom website development services.
          </span>

          <div style={{ flex: 1 }}>
            <Image
              src="/images/webservice.webp"
              alt="Web Development"
              width={800}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </div>

        <h3 style={{ marginTop: '3rem', color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>Website Design vs. Web Development</h3>


        <div style={{
          color: '#fff',
          fontSize: '1.2rem',
          maxWidth: '80vw',
          marginTop: '3rem',
          display: 'flex',
          gap: '4rem',
          alignItems: 'center'
        }}>

          <div style={{ flex: 1 }}>
            <Image
              src="/images/webdesign.webp"
              alt="Web Development"
              width={800}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            />
          </div>

          <span style={{ flex: 1 }}>
            Website development is the process of designing, building, and maintaining websites and web applications that run online on a browser. Oftentimes, Web development is confused with Website Design. However, the role of web designers is to create everything a user sees on a website or software product, including all visual, color, typography, and usability elements.Web designers work directly with a client to create designs or work as part of a team to develop a client's vision. A web developer is concerned with writing the code that makes a website function, whether it works on the front end or back end.Web developers need expert-level knowledge of a variety of programming languages to create websites.
          </span>
        </div>

        <h2 style={{ marginTop: '3rem', color: '#fff', fontSize: '4rem', fontWeight: 'bold' }}>Portfolio</h2>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          width: '100%',
          marginTop: '3rem'
        }}>
          {[
            {
              title: "AG Property Manager",
              image: "/images/webdesign.webp",
              description: "A comprehensive property management solution with tenant tracking, maintenance requests, and financial reporting."
            },
            {
              title: "PBT Payment Solutions",
              image: "/images/webdesign.webp",
              description: "Secure payment processing platform integrating multiple payment gateways and fraud detection systems."
            },
            {
              title: "Locum Smart",
              image: "/images/webdesign.webp",
              description: "Healthcare staffing platform connecting medical facilities with temporary healthcare professionals."
            },
            {
              title: "PBT Gateway New Stack",
              image: "/images/webdesign.webp",
              description: "Modern payment gateway solution built with microservices architecture and real-time processing."
            }
          ].map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>

      </div>

            <footer style={{
        backgroundColor: '#0a0a0a',
        padding: '4rem 10rem',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Abdullah's Portfolio</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Building innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Services</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Portfolio</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Web Development</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>UI/UX Design</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>API Integration</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                contact@example.com
              </li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                +1 (555) 123-4567
              </li>
              <li style={{ color: 'rgba(255,255,255,0.7)' }}>
                123 Web Street, Digital City
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.9rem'
        }}>
          © {new Date().getFullYear()} Abdullah's Portfolio. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
