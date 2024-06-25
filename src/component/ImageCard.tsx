import React from 'react';
import { Image } from '../models/Image';

interface ImageCardProps {
  image: Image; // Define props interface for ImageCard component, expecting an Image object
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  // Destructure image prop to access url, title, and description
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} className="image" /> {/* Display image with url and alt text */}
      <div className="image-info">
        <h2>{image.title}</h2> {/* Display image title */}
        <p>{image.description}</p> {/* Display image description */}
      </div>
    </div>
  );
};

export default ImageCard;
