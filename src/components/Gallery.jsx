import  { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import ScrollAnimation from "./ScrollAnimation";
import { Loader2 } from 'lucide-react';

const VideoThumbnail = ({ video, onClick, isPlaying = false }) => (
  <div
    className={`bg-neutral-500 rounded-lg relative cursor-pointer w-52 h-32 ${
      isPlaying ? 'border-4 border-blue-500' : ''
    }`}
    style={{
      backgroundImage: `url(${video.snippet.thumbnails.medium.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    onClick={onClick}
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
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_KEY = "AIzaSyDNnEToyx3z_gthwqlHrQj-1i31J7McKxc";
        const CHANNEL_ID = "UCW12YOrb1C0ZY7qpaim0Y2w";
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              channelId: CHANNEL_ID,
              maxResults: 10,
              order: "date",
              type: "video",
              key: API_KEY,
            },
          }
        );
        setVideos(response.data.items);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch videos");
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
    setIsVideoLoading(true);
  };

  const handleScrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleScrollDown = () => {
    if (startIndex + 3 < videos.length) {
      setStartIndex(startIndex + 1);
    }
  };
  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <Loader2 className="animate-spin h-12 w-12 text-primary" />
    </div>
  );
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-8">
            Ali Mehdi's Vision for Mustafabad
          </h2>
        </ScrollAnimation>
        <div className="flex flex-col lg:flex-row gap-6">
          <ScrollAnimation animation="fadeRight" className="lg:w-2/3">
            {videos.length > 0 && (
              <>
                {isVideoLoading && (
                  <div className="flex justify-center items-center h-[390px] bg-gray-200">
                    <Loader2 className="animate-spin h-12 w-12 text-primary" />
                  </div>
                )}
                <YouTube
                  videoId={videos[currentVideoIndex].id.videoId}
                  opts={{
                    height: "390",
                    width: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  onReady={() => setIsVideoLoading(false)}
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {videos[currentVideoIndex].snippet.title}
                  </h3>
                  <p className="text-gray-600">
                    {videos[currentVideoIndex].snippet.description}
                  </p>
                </div>
              </>
            )}
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeLeft"
            className="lg:w-1/3 flex flex-col gap-4 items-center"
          >
            <button
              onClick={handleScrollUp}
              className="bg-white rounded-full p-2 shadow-md"
              disabled={startIndex === 0}
            >
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
            {videos.slice(startIndex, startIndex + 3).map((video, index) => (
              <VideoThumbnail
                key={video.id.videoId}
                video={video}
                onClick={() => handleVideoSelect(startIndex + index)}
                isPlaying={startIndex + index === currentVideoIndex}
              />
            ))}
            <button
              onClick={handleScrollDown}
              className="bg-white rounded-full p-2 shadow-md"
              disabled={startIndex + 4 >= videos.length}
            >
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
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
