import { MdKeyboardArrowUp } from "react-icons/md";
import S from "./backnav.module.scss";

function BackToTop() {
  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={S.backToTop}
      onClick={voltarAoTopo}
      aria-label="Voltar ao topo"
    >
      <MdKeyboardArrowUp />
    </button>
  );
}

export default BackToTop;
