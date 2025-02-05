import s from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={s.gallery}>
      {images.map((img) => (
        <li key={img.id} className={s.item}>
          <ImageCard image={img} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
