import React from 'react';
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
};
export default Login;