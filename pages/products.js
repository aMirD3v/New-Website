import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  {
    image: "/images/cons/4.jpg",
    name: "Factory Printing",
    description: "High-quality image print for all your project needs.",
  },
  {
    image: "/images/cons/2.jpg",
    name: "Bricks",
    description: "Durable bricks for building strong structures.",
  },
  {
    image: "/images/cons/1.jpg",
    name: "Loading paper and ink",
    description: "Types of Material Loading in to Warehouse.",
  },
  {
    image: "/images/cons/3.jpg",
    name: "3D Printer",
    description: "A 3D printer is a sophisticated device that constructs physical objects layer by layer based on digital designs.",
  },
  {
    image: "/images/cons/8.jpg",
    name: " Painting T-Shirt",
    description: "Wash and dry your fabric prior to painting if possible, then paint away.",
  },
  {
    image: "/images/proc/1.jpg",
    name: "",
    description: "Printer We use to Paint",
  },
  {
    image: "/images/proc/2.jpg",
    name: "",
    description: "T-Shirt Printing Machine",
  },
  {
    image: "/images/proc/3.jpg",
    name: "",
    description: "lining machine",
  },
  {
    image: "/images/proc/4.jpg",
    name: "",
    description: "Operation lab",
  },
  {
    image: "/images/proc/5.jpg",
    name: "",
    description: "3D Machine  ",
  }
];

const Products = () => {
  return (
    <div>
      <Header />
      <main>
        <h1 className="page-title">Services</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 20px;
          text-align: center;
          background-color: #f0f0f0;
          font-family: 'Arial', sans-serif;
        }
        .page-title {
          font-size: 3rem;
          margin-bottom: 40px;
          color: #333;
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          justify-items: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Products;
