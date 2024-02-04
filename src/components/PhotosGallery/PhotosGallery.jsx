import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(image => (
        <PhotosGalleryItem key={image.id} {...image} />
      ))}
    </Grid>
  );
};
