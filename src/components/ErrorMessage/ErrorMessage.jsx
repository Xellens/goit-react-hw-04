import s from "./ErrorMessage.module.css";
import PropTypes from "prop-types";

function ErrorMessage({ message }) {
  return <p className={s.errorText}>{message}</p>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
