import React from 'react';

// Define the props interface (optional if no props are needed)
interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "" }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        {/* Loading spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 border-opacity-75"></div>
        {/* Loading message */}
        {
            message && 
            <p className="mt-4 text-gray-800 text-lg font-semibold">{message}</p>
        }
      </div>
    </div>
  );
};

export default Loading;
