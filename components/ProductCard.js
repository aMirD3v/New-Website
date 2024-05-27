const ProductCard = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          transition: transform 0.3s ease;
          font-family: 'Arial', sans-serif;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card img {
          width: 100%;
          height: auto;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .card-content {
          padding: 20px;
        }
        .card h3 {
          margin-top: 0;
          margin-bottom: 10px;
          color: #333333;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          color: #666666;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
