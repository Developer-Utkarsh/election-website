import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-[#3D588B] text-white py-3 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">आपका वोट एक बेहतर भविष्य बनाता है</span>
        </div>
        <div className="flex justify-center items-center mb-2 sm:mb-0">
          <span className="text-sm">हमें कॉल करें: +91 9560973844 | info@campaigningsource.com</span>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-2">
            <a href="https://www.facebook.com/alimehdiinc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10.025C20 4.488 15.512 0 9.975 0S0 4.488 0 10.025c0 4.97 3.657 9.078 8.438 9.828v-6.964H5.9v-2.864h2.538V7.736c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.774l-.443 2.864h-2.33v6.964C16.343 19.103 20 14.995 20 10.025z" />
              </svg>
            </a>
            <a href="https://twitter.com/alimehdi_inc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://www.instagram.com/alimehdi_inc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCW12YOrb1C0ZY7qpaim0Y2w" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10C20 4.477 15.523 0 10 0zm3.11 14.083c-1.187.075-3.863.075-6.22 0-1.187-.075-2.037-.937-2.112-2.112-.075-1.187-.075-3.863 0-6.22.075-1.187.937-2.037 2.112-2.112 1.187-.075 3.863-.075 6.22 0 1.187.075 2.037.937 2.112 2.112.075 1.187.075 3.863 0 6.22-.075 1.187-.937 2.037-2.112 2.112z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;