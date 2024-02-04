import { getPhotos } from 'apiService/photos';
import { Text, Form } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (!query) return;
    const fn = async () => {
      const result = await getPhotos(query, page);
      setImages(result);
    };
    fn();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
  };
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={handleSubmit} />
    </>
  );
};
