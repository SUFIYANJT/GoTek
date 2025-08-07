import WhoImage from '../logs/02.jpg';
import WhyImage from '../logs/01.jpg';
import VisionImage from '../logs/03.jpg';
import WhatImage from '../logs/04.jpg';

/**
 * @param {{ title: string, text: string, image: string, showButton?: boolean, link?: string }} props
 */
const InfoCard = ({ title, text, image, showButton, link }: { title: string; text: string; image: string; showButton?: boolean; link?: string; }) => (
  <div style={{
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}>
    <img src={image} alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
    <div style={{ padding: '1.5rem' }}>
      <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{text}</p>
      {showButton && link && (
        <a href={link} style={{ textDecoration: 'none' }}>
          <button style={{
            marginTop: '1rem',
            padding: '0.6rem 1.5rem',
            backgroundColor: '#00cccc',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '1rem',
          }}>
            Read More
          </button>
        </a>
      )}
    </div>
  </div>
);

const AboutGowritek = () => (
  <section style={{
    backgroundColor: '#f0faff',
    padding: '4rem 1rem',
    fontFamily: 'Poppins, sans-serif',
  }}>
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))',
        gap: '2rem',
      }}
    >
      <InfoCard
        title="Who We Are"
        text="For over 24 years, GOWRI TEK INDIA PVT LTD Energy Solutions has been at the forefront of the electrical industry in South India. We’re the acknowledged leader in our field — experts in every facet of electrical construction."
        image={WhoImage}
        showButton={true}
        link="/about/who-we-are"
      />
      <InfoCard
        title="Why Choose Us"
        text="Experts in every facet of electrical construction, maintenance, and service. Whether home, commercial, or industrial — GOWRI TEK is your trusted partner for reliable energy systems."
        image={WhyImage}
        showButton={true}
        link="/about/why-choose-us"
      />
      <InfoCard
        title="Our Vision"
        text="Our projects feature essential electrical, communication, and energy systems designed and maintained by GOWRI TEK. We serve local residences and large industries alike — no job is too big or small."
        image={VisionImage}
        showButton={false}
      />
      <InfoCard
        title="What We Do"
        text="Our team is well-trained and highly motivated to deliver outstanding performance. We coordinate carefully to protect your bottom line. From residential to industrial projects, we do it all."
        image={WhatImage}
        showButton={false}
      />
    </div>
  </section>
);

export default AboutGowritek;
