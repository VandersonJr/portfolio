import * as S from "./home.module.scss";
import PerfilUm from "../../assets/perfilum.png";
import PerfilDois from "../../assets/perfildois.png";
import { FaCode, FaPalette, FaBolt, FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineOpenInNew, MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import LogoUm from "../../assets/logo_copy.png";
import LogoDois from "../../assets/logo.png";
import LogoTres from "../../assets/logo_med.png";
import LogoQuatro from "../../assets/LogoQuatro.png";
import ContactForm from "../../components/contactform/ContactForm";
const Home = () => {
  return (
    <main className={S.Main}>
      <section className={S.contUm} id="home">
        <div className={S.campApresenta}>
          <div className={S.campTexto}>
            <h1 className={S.Titulo}>Olá, eu sou</h1>
            <h2 className={S.titNome}>Vanderson Jr.</h2>
            <h3 className={S.subTitulo}>Desenvolvedor Web</h3>
            <p className={S.texto}>
              Criando experiências digitais incríveis através de código limpo e
              design inovador. Especializado em desenvolvimento web moderno e
              interfaces de usuário responsivas.
            </p>
            <div className={S.campButs}>
              <a
                className={S.butContato}
                href="https://wa.me/5512997591625?text=Ol%C3%A1!%20Vim%20pelo%20seu%20site%20e%20tenho%20interesse%20em%20um%20projeto%20de%20desenvolvimento%20web.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F%20%F0%9F%99%82"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale comigo agora
              </a>
              <a className={S.butProjeto} href="#projetos">
                Veja meus projetos
              </a>
            </div>
          </div>
          <div className={S.campImg}>
            <img src={PerfilUm} alt="Perfil" />
          </div>
        </div>
      </section>

      <section className={S.contDois} id="sobre">
        <h1 className={S.titSobre}> Sobre Mim</h1>
        <div className={S.campSobre}>
          <div className={S.campImgSobre}>
            <img className={S.perfilDois} src={PerfilDois} alt="Perfil" />
          </div>
          <div className={S.campTextoSobre}>
            <p className={S.textoSobre}>
              Sou um desenvolvedor apaixonado por tecnologia e inovação, com
              experiência em criar soluções web modernas e eficientes. Meu foco
              está em desenvolver aplicações que não apenas funcionam
              perfeitamente, mas também proporcionam uma experiência excepcional
              ao usuário.
            </p>
            <p className={S.textoSobre}>
              Com conhecimento em diversas tecnologias e frameworks, estou
              sempre buscando aprender e me adaptar às últimas tendências do
              mercado. Acredito que a combinação de código de qualidade e design
              intuitivo é a chave para projetos bem-sucedidos.
            </p>
            <div className={S.cardsSobre}>
              <div className={S.cardCode}>
                <FaCode className={S.iconCode} />
                <h3 className={S.TitCardCode}>Código Limpo</h3>
                <p className={S.PagCardCode}>
                  Escrevo código organizado e manutenível
                </p>
              </div>
              <div className={S.cardDesign}>
                <FaPalette className={S.iconDesign} />
                <h3 className={S.TitCardDesign}>Design</h3>
                <p className={S.PagCardDesign}>
                  Interfaces bonitas e funcionais
                </p>
              </div>
              <div className={S.cardTunder}>
                <FaBolt className={S.iconTunder} />
                <h3 className={S.TitCardTunder}>Performance</h3>
                <p className={S.PagCardTunder}>
                  Aplicações rápidas e otimizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={S.contTres} id="projetos">
        <h1 className={S.titProjetos}>Projetos</h1>
        <div className={S.campCards}>
          <div className={S.projUm}>
            <div className={S.campimgUm}>
              <img
                src={LogoUm}
                alt="Logo do projeto Connect"
                className={S.imgLogoUm}
              />
            </div>
            <h3 className={S.titProjUm}>Projeto Connect</h3>
            <p className={S.pagTitUm}>
              Página desenvolvida como atividade do curso de programação
              ministrado pela Kodie Academy
            </p>
            <div className={S.butPag}>
              <MdOutlineOpenInNew className={S.butLink} />
              <a
                href="https://desafio-connect-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={S.link}
              >
                Ir para a página
              </a>
            </div>
          </div>
          <div className={S.projDois}>
            <div className={S.campimgDois}>
              <img
                src={LogoTres}
                alt="Logo do projeto Medicos & Dentistas"
                className={S.imgLogoDois}
              />
            </div>
            <h3 className={S.titProjDois}>Projeto Medicos & Dentistas</h3>
            <p className={S.pagTitDois}>
              Página desenvolvida como atividade do curso de programação
              ministrado pela Kodie Academy
            </p>
            <div className={S.butPag}>
              <MdOutlineOpenInNew className={S.butLink} />
              <a
                href="https://medicos-dentistas-bice.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={S.link}
              >
                Ir para a página
              </a>
            </div>
          </div>
          <div className={S.projTres}>
            <div className={S.campimgTres}>
              <img
                src={LogoDois}
                alt="Logo do projeto BN Detailer"
                className={S.imgLogoTres}
              />
            </div>
            <h3 className={S.titProjTres}>Projeto BN Detailer</h3>
            <p className={S.pagTitTres}>
              Página desenvolvida para a estética automotiva BN Detailer
            </p>
            <div className={S.butPag}>
              <MdOutlineOpenInNew className={S.butLink} />
              <a
                href="https://bn-detailer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={S.link}
              >
                Ir para a página
              </a>
            </div>
          </div>
          <div className={S.projQuatro}>
            <div className={S.campimgQuatro}>
              <img
                src={LogoQuatro}
                alt="Logo do projeto Travel.com"
                className={S.imgLogoQuatro}
              />
            </div>
            <h3 className={S.titProjQuatro}>Projeto Travel</h3>
            <p className={S.pagTitQuatro}>
              Página desenvolvida como projeto autônomo de treino.
            </p>
            <div className={S.butPag}>
              <MdOutlineOpenInNew className={S.butLink} />
              <a
                href="https://react-curso-travel-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={S.link}
              >
                Ir para a página
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={S.contQuatro} id="contato">
        <h1 className={S.titContato}>Entre em Contato</h1>
        <div className={S.containerContato}>
          <div className={S.contContatoUm}>
            <div>
              <h2 className={S.TitCardCont}>Tem uma ideia?</h2>
              <h2 className={S.TitCardCont}>Vamos tirá-la do papel.</h2>
            </div>

            <p className={S.pagCardCont}>
              Estou aberto a novos projetos, ideias criativas e oportunidades
              para colaborar na construção de soluções que façam a diferença.
            </p>

            <div className={S.contCardsContato}>
              <ul className={S.cardsContato}>
                <li className={S.cardMail}>
                  <MdOutlineMail className={S.iconMail} />

                  <div className={S.contactInfo}>
                    <h3 className={S.TitMail}>Email</h3>
                    <p className={S.pagMail}>vandersonscjr.dev@gmail.com</p>
                  </div>
                </li>
                <li className={S.cardPhone}>
                  <FiPhone className={S.iconPhone} />
                  <div className={S.contactInfo}>
                    <h3 className={S.TitPhone}>Telefone</h3>
                    <p className={S.pagPhone}>+55 12 99759-1625</p>
                  </div>
                </li>
                <li className={S.cardLocation}>
                  <FaMapLocationDot className={S.iconLocation} />

                  <div className={S.contactInfo}>
                    <h3 className={S.TitLocation}>Localização</h3>
                    <p className={S.pagLocation}>Aparecida, SP</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={S.contContatoDois}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
