import s from "./ImageCard.module.css";
import PropTypes from "prop-types";

function ImageCard({ image, onClick }) {
  const { urls, alt_description } = image;

  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={s.card} onClick={handleClick}>
      <img
        src={urls.small}
        alt={alt_description || "image"}
        className={s.image}
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
