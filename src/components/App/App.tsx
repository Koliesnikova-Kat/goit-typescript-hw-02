import { useState, useEffect } from 'react';
import { fetchedPictures, PictureCard } from '../services/unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import toast from 'react-hot-toast';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [pictures, setPictures] = useState<PictureCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setError(false);
        setLoading(true);
        const results = await fetchedPictures(query, page);
        setPictures((prev) => (page === 1 ? results : [...prev, ...results]));
      } catch {
        toast.error('Server is not responding!');
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query, page]);

  const handleSetQuery = (newQuery: string) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar query={query} onSubmit={handleSetQuery} />

      {error && (
        <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      )}

      {loading && <Loader />}

      {pictures.length > 0 && (
        <ImageGallery images={pictures} onImageClick={openModal} />
      )}

      {pictures.length > 0 && <LoadMoreBtn setPage={setPage} />}

      {modalOpen && selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}
