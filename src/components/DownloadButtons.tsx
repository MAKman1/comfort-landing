import React from 'react';
import { Apple, Smartphone } from 'lucide-react';

interface DownloadButtonsProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const iconSize = {
    small: 18,
    medium: 20,
    large: 24
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* App Store Button */}
      <a
        href="#"
        className={`${sizeClasses[size]} bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3`}
        aria-label="Download on App Store"
      >
        <Apple size={iconSize[size]} />
        <div className="text-left">
          <div className="text-xs opacity-90">Download on the</div>
          <div className="font-bold">App Store</div>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className={`${sizeClasses[size]} bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3`}
        aria-label="Get it on Google Play"
      >
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
        </svg>
        <div className="text-left">
          <div className="text-xs opacity-90">Get it on</div>
          <div className="font-bold">Google Play</div>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
