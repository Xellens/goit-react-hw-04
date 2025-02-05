import s from "./ImageModal.module.css";
import Modal from "react-modal";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, imageData }) {
  const { urls, alt_description, user, likes } = imageData || {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      closeTimeoutMS={200}
    >
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={s.closeBtn}>
          X
        </button>
        {urls && (
          <img
            src={urls.regular}
            alt={alt_description || "image"}
            className={s.image}
          />
        )}

        <div className={s.info}>
          <p>Likes: {likes}</p>
          {user && <p>Author: {user.name}</p>}
        </div>
      </div>
    </Modal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageData: PropTypes.object,
};

export default ImageModal;
