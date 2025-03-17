import Modal from 'react-modal';
import s from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  description?: string;
}

export default function ImageModal({ isOpen, onClose, image, description }: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={image} alt={description || 'modal image'} className={s.img} />
    </Modal>
  );
}
