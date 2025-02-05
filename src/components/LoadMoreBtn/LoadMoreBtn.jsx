import s from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";

function LoadMoreBtn({ onClick }) {
  return (
    <button className={s.button} onClick={onClick}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
