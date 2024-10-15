import React from 'react';

const Products = () => {
  return (
    <div className="container mx-auto bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        { Products }
        <div className="overflow-hidden rounded-lg border bg-white">
          <img
            className="h-48 w-full object-cover"
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt="Product 1"
          />
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Premium Jacket</h3>
            <p className="mb-4 text-gray-600">$99.99</p>
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>

        { Products }
        <div className="overflow-hidden rounded-lg border bg-white">
          <img
            className="h-48 w-full object-cover"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Product 2"
          />
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Stylish Backpack</h3>
            <p className="mb-4 text-gray-600">$49.99</p>
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>

        { Products }
        <div className="overflow-hidden rounded-lg border bg-white">
          <img
            className="h-48 w-full object-cover"
            src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            alt="Product 3"
          />
          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Classic Shoes</h3>
            <p className="mb-4 text-gray-600">$79.99</p>
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;