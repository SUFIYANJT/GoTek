import { useEffect, useState } from 'react';
import BgVideo from '../logs/7020320_Black_Background_Cartoon_Animation_3840x2160.mp4';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100); // small delay to trigger animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 150, 255, 0.1) 40%, rgba(0, 0, 0, 0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: '1.2',
            marginBottom: '1rem',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <span style={{ color: '#00ffff' }}>Power. Precision. Perfection.</span>
          <br />
          Electrifying Kerala’s Future
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: '1.3rem',
            fontWeight: 300,
            maxWidth: '800px',
            marginTop: '0.5rem',
            lineHeight: '1.6',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s ease-out 0.2s',
          }}
        >
          Complete electrical solutions for residential, commercial, and industrial needs — trusted
          for high & low voltage systems, panel boards, and generator installations.
        </p>

        {/* Button */}
        <button
          style={{
            marginTop: '2rem',
            padding: '0.9rem 2.5rem',
            fontSize: '1.1rem',
            backgroundColor: '#00ffff',
            color: '#000',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 8px 20px rgba(0, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.4s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.opacity = '0.85';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.opacity = '1';
          }}
        >
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
