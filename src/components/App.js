import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { AppStyled } from './App.styled';
import getPixabay from './services/pixabay-api';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImage] = useState([]);
  const [modal, setModal] = useState('');
  const [loader, setLoader] = useState(false);

  const closeModalByEsc = e => {
    if (e.key === 'Escape') {
      setModal('');
    }
  };
  useEffect(() => {
    if (modal) {
      window.addEventListener('keyup', closeModalByEsc);
    } else {
      window.removeEventListener('keyup', closeModalByEsc);
    }
  }, [modal]);
  const handleSetQuery = e => {
    setQuery(e.target.value);
  };

  const handleGetImages = async e => {
    e.preventDefault();

    setPage(1);
    setLoader(true);
    if (query.trim() === '') {
      setLoader(false);
      setQuery('');
      return toast.warning('Please enter something!');
    } else {
      setLoader(false);

      const { hits } = await getPixabay(query, 1);

      setLoader(false);
      setImage(hits);

      if (hits.length < 1) {
        setQuery('');
        return toast.warning(
          `Your search - ${query} - did not match any images`,
        );
      }

      setPage(prev => prev + 1);
    }
  };
  const handleLoadMore = async () => {
    const { hits } = await getPixabay(query, page);
    setImage(prev => [...prev, ...hits]);
    setPage(prev => prev + 1);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleShowModal = url => {
    setModal(url);
  };
  const handleCloseModal = e => {
    if (e.target.nodeName !== 'IMG') {
      setModal('');
    }
  };

  return (
    <AppStyled>
      <Searchbar
        onChange={handleSetQuery}
        query={query}
        onSubmit={handleGetImages}
      />
      <ImageGallery showModal={handleShowModal} images={images} />

      {images.length >= 12 && <Button onLoadMore={handleLoadMore} />}
      {modal && <Modal closeModal={handleCloseModal} modalImg={modal} />}
      {loader && <Loader />}

      <ToastContainer />
    </AppStyled>
  );
}
