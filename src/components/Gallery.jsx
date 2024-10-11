import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import ScrollAnimation from "./ScrollAnimation";
import { Loader2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VideoThumbnail = ({ video, onClick, isPlaying = false }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={isPlaying ? { scale: 1.1 } : { scale: 1 }}
    className={`bg-neutral-500 rounded-lg relative cursor-pointer w-[22%] aspect-[9/16] overflow-hidden ${
      isPlaying ? "border-4 border-blue-500" : ""
    }`}
    style={{
      backgroundImage: `url(${video.snippet.thumbnails.medium.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    onClick={onClick}
  >
    {isPlaying ? (
      <YouTube
        videoId={video.id.videoId}
        opts={{
          height: '100%',
          width: '100%',
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
          },
        }}
        className="absolute inset-0"
      />
    ) : (
      <div className="absolute inset-0 p-4 flex items-end bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-sm font-semibold line-clamp-2">{video.snippet.title}</h3>
      </div>
    )}
  </motion.div>
);

const Gallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
              maxResults: 20,
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
    const selectedVideo = videos[currentPage * 4 + index];
    setSelectedVideo(selectedVideo);
  };

  const handlePageChange = (direction) => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right" && (currentPage + 1) * 4 < videos.length) {
      setCurrentPage(currentPage + 1);
    }
    setCurrentVideoIndex(null);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <Loader2 className="animate-spin h-12 w-12 text-primary" />
    </div>
  );
  if (error) return <div>{error}</div>;

  const currentVideos = videos.slice(currentPage * 4, (currentPage + 1) * 4);

  return (
    <div className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation delay={0} duration={0.75}>
          <h2 className="text-primary text-4xl sm:text-5xl font-bold mb-8">
            Video Gallery
          </h2>
        </ScrollAnimation>
        <div className="flex flex-col gap-6">
          <ScrollAnimation
            animation="fadeUp"
            className="w-full relative"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageChange("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </motion.button>
            <div className="flex justify-between items-center space-x-4 py-4">
              {currentVideos.map((video, index) => (
                <VideoThumbnail
                  key={video.id.videoId}
                  video={video}
                  onClick={() => handleVideoSelect(currentPage * 4 + index)}
                  isPlaying={currentPage * 4 + index === currentVideoIndex}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageChange("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              disabled={(currentPage + 1) * 4 >= videos.length}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </motion.button>
          </ScrollAnimation>
          {currentVideoIndex !== null && (
            <ScrollAnimation animation="fadeUp" className="mt-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">
                {videos[currentVideoIndex].snippet.title}
              </h3>
              <p className="text-gray-600">
                {videos[currentVideoIndex].snippet.description}
              </p>
            </ScrollAnimation>
          )}
        </div>
      </div>
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
            style={{ top: `${window.scrollY-1048}px` }}
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full h-[100vh] md:w-4/5 md:h-[70vh] flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </button>
              <div className="w-full h-[85vh] md:w-4/5 md:h-[70vh]">
                <YouTube
                  videoId={selectedVideo.id.videoId}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 1,
                      modestbranding: 1,
                    },
                  }}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;