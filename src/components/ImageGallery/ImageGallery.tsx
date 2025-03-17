import ImageCard from "../ImageCard/ImageCard";
import { PictureCard } from "../services/unsplash-api";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: PictureCard[];
  onImageClick: (image: string) => void;
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.el}>
            <ImageCard
              img={image.urls.small}
              description={image.description || image.alt_description || 'image'}
              onClick={onImageClick}
              image={image.urls.regular}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
