import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo_alter.png";
import S from "./header.module.scss";
import { Menu } from "lucide-react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuAberto(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      {!isMobile && (
        <section className={S.Container}>
          <div className={S.Marca}>
            <Link to="/">
              <img className={S.Logo} src={Logo} />
            </Link>
          </div>
          <nav className={S.Nav}>
            <a href="#home" className={S.Link}>
              Início
            </a>
            <a href="#sobre" className={S.Link}>
              Sobre
            </a>
            <a href="#projetos" className={S.Link}>
              Projetos
            </a>
            <a href="#contato" className={S.Link}>
              Contato
            </a>
          </nav>
        </section>
      )}

      {isMobile && (
        <section className={S.Container}>
          <div className={S.Marca}>
            <Link to="/">
              <img className={S.Logo} src={Logo} />
            </Link>
          </div>
          <button
            className={S.MenuButton}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <Menu />
          </button>
          {isMobile && menuAberto && (
            <nav className={S.MobileNav}>
              <a
                href="#Home"
                className={S.linkMobile}
                onClick={() => setMenuAberto(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className={S.linkMobile}
                onClick={() => setMenuAberto(false)}
              >
                Sobre
              </a>
              <a
                href="#projetos"
                className={S.linkMobile}
                onClick={() => setMenuAberto(false)}
              >
                Projetos
              </a>
              <a
                href="#contato"
                className={S.linkMobile}
                onClick={() => setMenuAberto(false)}
              >
                Contato
              </a>
            </nav>
          )}
        </section>
      )}
    </header>
  );
};

export default Header;
