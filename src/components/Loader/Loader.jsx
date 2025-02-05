import s from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className={s.loader}>
      <TailSpin height="60" width="60" color="#4fa94d" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
