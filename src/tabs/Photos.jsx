import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button, Loader } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!query) return;
    const fn = async () => {
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page,
        );
        setImages(prev => [...prev, ...photos]);
        setDisabled(page >= Math.ceil(total_results / per_page));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fn();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setLoading(true);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={handleSubmit} />
      {images.length > 0 && (
        <>
          <PhotosGallery images={images} />
          <Button onClick={handleLoadMore} disabled={loading || disabled}>
            Load More
          </Button>
        </>
      )}
      {loading && <Loader />}
    </>
  );
};
