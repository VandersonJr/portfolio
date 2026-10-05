import { useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./contactform.module.scss";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  // As chaves precisam ser iguais ao "name" dos campos do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpa o erro do campo que está sendo editado
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.nome.trim().length < 3) {
      newErrors.nome = "O nome deve ter pelo menos 3 caracteres.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, insira um endereço de email válido.";
    }

    if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");

    // Valida ANTES de ativar o loading, senão o botão fica travado
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Os nomes aqui devem ser os mesmos usados no template do EmailJS: {{nome}}, {{email}}, {{mensagem}}
    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      mensagem: formData.mensagem,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
      .then(
        (result) => {
          console.log("Email enviado com sucesso!", result.text);
          setStatusMessage(
            "Mensagem enviada com sucesso! Entrarei em contacto em breve.",
          );
          setFormData({ nome: "", email: "", mensagem: "" });
        },
        (error) => {
          // Mostra o motivo real do EmailJS no console (status e text)
          console.error("Erro ao enviar:", error?.status, error?.text || error);
          setStatusMessage(
            "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
          );
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={S.formContainer}>
      <form onSubmit={handleSubmit} className={S.form} noValidate>
        <div className={S.formGroup}>
          <label className={S.label} htmlFor="nome">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={`${S.input} ${errors.nome ? S.error : ""}`}
          />
          {errors.nome && <span className={S.errorText}>{errors.nome}</span>}
        </div>

        <div className={S.formGroup}>
          <label className={S.label} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${S.input} ${errors.email ? S.error : ""}`}
          />
          {errors.email && <span className={S.errorText}>{errors.email}</span>}
        </div>

        <div className={S.formGroup}>
          <label className={S.label} htmlFor="mensagem">
            Mensagem:
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className={`${S.textarea} ${errors.mensagem ? S.error : ""}`}
          />
          {errors.mensagem && (
            <span className={S.errorText}>{errors.mensagem}</span>
          )}
        </div>

        <button type="submit" disabled={loading} className={S.butEnviar}>
          {loading ? "A enviar..." : "Enviar Mensagem"}
        </button>

        {statusMessage && <p className={S.status}>{statusMessage}</p>}
      </form>
    </div>
  );
}
