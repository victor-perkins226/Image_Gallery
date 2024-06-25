import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // for the extended matchers
import '@testing-library/jest-dom';

import ImageCard from './ImageCard';
import { Image } from '../models/Image';

// Sample image data for testing
const sampleImage: Image = {
  url: 'https://via.placeholder.com/150',
  title: 'Sample Image',
  description: 'This is a sample image description',
  width: 150, // Add width property
  height: 150, // Add height property
};

test('renders ImageCard with correct content', () => {
  const { getByAltText, getByText } = render(<ImageCard image={sampleImage} />);

  // Check if the image is rendered with the correct URL and alt text
  const imgElement = getByAltText(sampleImage.title);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', sampleImage.url);

  // Check if the title and description are rendered correctly
  const titleElement = getByText(sampleImage.title);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = getByText(sampleImage.description);
  expect(descriptionElement).toBeInTheDocument();
});
