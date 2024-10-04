const VideoThumbnail = ({ isMain = false }) => (
  <div
    className={`bg-neutral-500 rounded-lg relative ${isMain ? "w-full h-96" : "w-52 h-32"}`}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-gray-800"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-8">
          Ali Mehdi's Vision for Mustafabad
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <VideoThumbnail isMain={true} />
            <div className="mt-12">
              <h3 className="text-4xl font-bold text-secondary mb-4">
                Vikas-e-Mustafabad
              </h3>
              <p className="text-gray-600">
                Ali Mehdi's comprehensive plan for the development of
                Mustafabad, focusing on economic growth, education reform, and
                improved healthcare services. Watch as he outlines his vision
                for a prosperous and inclusive Mustafabad.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col gap-6 items-center">
            <div className="relative">
              <button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
