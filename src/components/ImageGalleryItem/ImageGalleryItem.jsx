// import { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  ImageGalleryItemEl,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled'

const ImageGalleryItem = ({ alt, src, modalUrl, showModal }) => {
  return (
    <ImageGalleryItemEl>
      <ImageGalleryItemImage
        onClick={() => showModal(modalUrl)}
        alt={alt}
        src={src}
      />
    </ImageGalleryItemEl>
  )
}

// ImageGalleryItem.propTyes = {
//   src: PropTypes.string,
//   alt: PropTypes.string,
//   url: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };
export default ImageGalleryItem
