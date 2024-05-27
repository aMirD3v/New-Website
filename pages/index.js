import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link"; // Import Link from Next.js for client-side navigation
import Head from 'next/head';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>KINGS BUSINESS GROUP</h1>
            {/* Update Link to navigate to Products page */}
            <Link href="/products">
              <button className="cta-button">Explore Products</button>
            </Link>
          </div>
        </section>

        <section className="featured-videos">
          <h2>Material Videos</h2>
          <p>As our company is growing rapidly, we have been thanked for providing our entire region with paper and printing 
            works in an adequate form. We are also working to deliver to different parts of the country.
            </p>
            <p>
            In addition we have received a good response from neighboring countries such as Djibouti, 
            Somalia and Kenya by talking to various partner companies to provide them with quality and affordable prices.

            </p>
            <p>
            currently we  working  on both individuals and small businesses in my community grow and be financially successful.  
            and try to support local businesses through development opportunities and using my network to give access to essential 
            business connections and  we plan on reaching out to young working professionals who have recently entered the workforce, 
            by using my network connections within the hospitality industry to find those who need financial guidance. 
            we also plan to reach out to the rural communities, 
            as a company and small businesses, to give opportunities for investment and growth
            </p>
            <p>
            as an Ethiopian investor we working on to decrease the foreign currency expenditure by producing goods and recycling 
            which collects and processes waste paper for reuse in the production of new paper products.
            We believe our company Kings paper and printing factory can make a big impact.
            </p>
          <div className="video-grid">
            <div className="video">
              <video controls>
                <source src="/images/cons/vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video">
              <video controls>
                <source src="/images/cons/vid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: 'Arial', sans-serif;
          background-image: url('/images/bak/background.jpg'); 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
        }
        main {
          flex: 1;
          padding: 20px;
        }
        .hero {
          text-align: center;
          padding: 100px 20px;
          background: linear-gradient(rgba(12, 16, 19, 0.8), rgba(12, 16, 19, 0.8)), url('/images/background.jpg'); 
          background-size: cover;
          color: #fff;
          border-radius: 15px;
          margin: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .hero p {
          font-size: 1.5rem;
          margin: 0;
        }
        .cta-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 12px 24px;
          font-size: 1.2rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #0056b3;
        }
        .featured-videos {
          text-align: center;
          padding: 40px 20px;
          background-color: #fff;
          color: #333;
        }
        .featured-videos h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
        }
        .featured-videos p {
          text-align: left; /* Align text to the left */
          font-family: 'Arial', sans-serif; /* Set the font family */
        }        
        .video-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .video {
          position: relative;
          overflow: hidden;
        }
        video {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
