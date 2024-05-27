import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="contact-section">
          <div className="container">
            <div className="card">
              <h1>Contact Us</h1>
              <p>Email: sibi97347@gmail.com</p>
              <p>Phone: +251 944 54222</p>
              <p>Address: Jigjiga, Ethiopia</p>
              <div className="social-links">
                <p>Connect with us:</p>
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          padding: 50px;
          
        }
        .contact-section {
          background-image: url('/images/background.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
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
          text-align: center;
          width: 100%;
        }
        .card h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .card p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        .social-links p {
          margin-bottom: 10px;
        }
        .social-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        .social-links li {
          margin: 0 10px;
        }
        .social-links a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }
        .social-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Contact;
