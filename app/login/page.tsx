import React from 'react';
import HeroSection from '../components/HeroSection';

const Login = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/your-image.jpg')", // Put your image in the public folder
          // Or use an external URL like: "url('https://example.com/image.jpg')"
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Optional overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/30"></div> {/* Adjust opacity as needed */}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default Login; 