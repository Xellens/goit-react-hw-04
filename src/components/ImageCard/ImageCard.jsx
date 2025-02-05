import PropTypes from "prop-types";
import s from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  const { urls, alt_description } = image;

  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={s.card}>
      <img
        src={urls.small}
        alt={alt_description || "image"}
        className={s.image}
        onClick={handleClick}
      />
    </div>
  );
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
