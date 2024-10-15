import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { isLoggedIn } = useSelector();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;