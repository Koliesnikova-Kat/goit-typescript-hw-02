import s from "./ImageCard.module.css";

interface ImageCardProps {
  img: string;
  description: string;
  onClick: (image: string) => void;
  image: string;
}

export default function ImageCard({ img, description, onClick, image }: ImageCardProps) {
  return (
    <div className={s.el}>
      <img
        src={img}
        alt={description || 'image'}
        className={s.img}
        onClick={() => onClick(image)}
      />
    </div>
  );
}
