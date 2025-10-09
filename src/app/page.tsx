import Image from "next/image";
import NavBar from "@/components/layout/navbar";
import DarkVeil from "@/components/layout/darkveil";
import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import GlassButton from "@/components/GlassButton";

export default function Home() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>

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
              <br/>
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
    </>
  );
}
