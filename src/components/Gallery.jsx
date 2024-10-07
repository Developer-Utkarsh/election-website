import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import ScrollAnimation from "./ScrollAnimation";
import { Loader2, Play, ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const VideoThumbnail = ({ video, onClick, isPlaying = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-neutral-500 rounded-lg relative cursor-pointer w-52 h-32 overflow-hidden ${
      isPlaying ? "border-4 border-blue-500" : ""
    }`}
    style={{
      backgroundImage: `url(${video.snippet.thumbnails.medium.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    onClick={onClick}
  >
    <div className="absolute inset-0 p-4  flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-20">
      <div className="p-3 bg-white/60 rounded-full">
        <Play className="w-6 h-6 text-neutral-800" />
      </div>
    </div>
  </motion.div>
);

const Gallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

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
          },
        );
        setVideos(response.data.items);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch videos");
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
    setIsVideoLoading(true);
    setIsPlaying(true);
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

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="animate-spin h-12 w-12 text-primary" />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation delay={0} duration={0.75}>
          <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-8">
            Ali Mehdi&apos;s Vision for Mustafabad
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
                      autoplay: isPlaying ? 1 : 0,
                    },
                  }}
                  onReady={() => setIsVideoLoading(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6"
                >
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {videos[currentVideoIndex].snippet.title}
                  </h3>
                  <p className="text-gray-600">
                    {videos[currentVideoIndex].snippet.description}
                  </p>
                </motion.div>
              </>
            )}
          </ScrollAnimation>
          <ScrollAnimation
            animation="fadeLeft"
            className="lg:w-1/3 flex flex-col gap-4 items-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollUp}
              className="bg-white rounded-full p-2 shadow-md"
              disabled={startIndex === 0}
            >
              <ChevronUp className="w-6 h-6 text-gray-800" />
            </motion.button>
            {videos.slice(startIndex, startIndex + 3).map((video, index) => (
              <VideoThumbnail
                key={video.id.videoId}
                video={video}
                onClick={() => handleVideoSelect(startIndex + index)}
                isPlaying={startIndex + index === currentVideoIndex}
              />
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollDown}
              className="bg-white rounded-full p-2 shadow-md"
              disabled={startIndex + 4 >= videos.length}
            >
              <ChevronDown className="w-6 h-6 text-gray-800" />
            </motion.button>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
