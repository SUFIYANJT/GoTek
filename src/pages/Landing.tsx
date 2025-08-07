import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setStartAnimation(true), 3000); // Show reveal
    const timer2 = setTimeout(() => navigate('/home'), 7500); // Redirect

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div className="landing-container">
      {!startAnimation ? (
        <div className="initial-text-animated">
          <span className="word word1">Powering</span>
          <span className="word word2" style={{fontWeight:'1000'}}><b>Controlling</b></span>
          <span className="word word3">Securing</span>
        </div>
      ) : (
        <div className="reveal-wrapper">
          <div className="reveal-box" />
          <div className="reveal-text">Gowritek.com</div>
        </div>
      )}
    </div>
  );
};

export default Landing;
