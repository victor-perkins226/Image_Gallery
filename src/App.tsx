import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchImages } from './api/fakerApi';
import { Image } from './models/Image';
import ImageCard from './component/ImageCard';

const App: React.FC = () => {
  // State to hold the list of images and loading state
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch images from API when component mounts
  useEffect(() => {
    const getImages = async () => {
      try {
        // Simulate fetching images from an API (replace with actual API call)
        const images = await fetchImages();
        setImages(images); // Update state with fetched images
      } catch (error) {
        console.error('Error fetching images:', error); // Log error if fetching images fails
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    getImages(); // Call the async function to fetch images
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Render loading message while images are being fetched
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Render the image gallery once images are fetched
  return (
    <div className="app-container">
      {/* Header section */}
      <header className="app-header">
        <h1>Image Gallery</h1>
      </header>

      {/* Image grid section */}
      <div className="image-grid">
        {/* Map over images array and render ImageCard component for each image */}
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default App;
