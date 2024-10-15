import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return product ? (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
export default ProductDetails;