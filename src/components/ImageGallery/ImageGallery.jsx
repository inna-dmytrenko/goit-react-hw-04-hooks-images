import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

import { ImageGalleryList } from './ImageGallerystyled'

const ImageGallery = ({ images, showModal }) => {
  return (
    <div>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            alt={tags}
            src={webformatURL}
            modalUrl={largeImageURL}
            showModal={showModal}
          ></ImageGalleryItem>
        ))}
      </ImageGalleryList>
    </div>
  )
}

export default ImageGallery
