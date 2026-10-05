import * as S from "./footer.module.scss";
import Logo from "../../assets/Logo_sem_fundo.png";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <section className={S.contMarca}>
        <div className={S.campMarca}>
          <img className={S.Logo} src={Logo} alt="Logo" />
          <p className={S.Texto}>
            Desenvolvendo interfaces modernas, intuitivas e de alta performance
          </p>
        </div>
      </section>

      <section className={S.contDados}>
        <div className={S.campDados}>
          <h1 className={S.titContatos}>Contatos</h1>
          <div className={S.whatsapp}>
            <FaWhatsapp className={S.iconWpp} />
            <Link
              to="https://wa.me/5512997591625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!"
              className={S.Link}
            >
              12 99759-1625
            </Link>
          </div>

          <div className={S.email}>
            <MdEmail className={S.iconEmail} />
            <a href="mailto:vandersonscjr.dev@gmail.com" className={S.Link}>
              vandersonscjr.dev@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className={S.contRedes}>
        <div className={S.campRedes}>
          <h1 className={S.titRedes}>Redes Sociais</h1>
          <div className={S.campGithub}>
            <FaGithub className={S.iconGithub} />
            <Link to="https://github.com/VandersonJr" className={S.Link}>
              VandersonJr
            </Link>
          </div>
          <div className={S.campLinkedin}>
            <FaLinkedin className={S.iconLinkedin} />
            <Link
              to="https://www.linkedin.com/in/vandersonsjr/"
              className={S.Link}
            >
              Vanderson Jr.
            </Link>
          </div>
          <div className={S.campInstagram}>
            <FaInstagram className={S.iconInstagram} />
            <Link
              to="https://www.instagram.com/vandersonsjr_dev/"
              className={S.Link}
            >
              vandersonsjr_dev
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
