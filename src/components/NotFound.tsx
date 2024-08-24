import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-lg text-gray-600">We're sorry, but the product you are looking for doesn't exist.</p>
      <img
        src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg"
        alt="Product Not Found"
        className="mt-6"
      />
      <button 
        onClick={() => window.history.back()}
        className="mt-8 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
