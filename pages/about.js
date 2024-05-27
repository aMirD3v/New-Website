import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="about-section">
          <div className="container">
            <div className="card">
              <h1>About Us</h1>
              <p>We are a leading supplier of construction materials, dedicated to providing high-quality products and services to our customers.</p>
              <p>At Mustafe Miad Construction Material Co., we strive for excellence in everything we do. Our mission is to deliver exceptional value to our clients by offering top-notch products, personalized service, and innovative solutions.</p>
              <p>Our team consists of experienced professionals who are passionate about construction and committed to meeting the needs of our customers. We take pride in our reputation for reliability, integrity, and customer satisfaction.</p>
              <p>Join us on our journey to build a better future!</p>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          font-family: 'Arial', sans-serif;
          flex: 1;
          padding: 50px;
        }
        .about-section {
          background-image: url('/images/background.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 20px;
          color: #fff;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .card {
          padding: 30px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          text-align: center;
        }
        .card h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .card p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default About;
