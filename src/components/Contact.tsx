import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

declare global {
  interface Window {
    grecaptcha?: {
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusForm, setStatusForm] = useState<"success" | "error" | null>(
    null,
  );
  const [sendForm, setSendForm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name === "nome"
        ? "name"
        : name === "mensagem"
          ? "message"
          : name === "email"
            ? "email"
            : name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      alert(
        "ReCAPTCHA não está disponível no momento. Por favor, tente novamente mais tarde.",
      );
      return;
    }

    // const token = (window as any).grecaptcha.getResponse();

    const token = recaptchaRef.current ? recaptchaRef.current.getValue() : null;

    if (!token) {
      alert("Confirme que você não é um robô");
      return;
    }

    try {
      setSendForm(true);
      const response = await fetch("/api/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await response.json();
      if (data.success) {
        setStatusForm("success");
        recaptchaRef.current?.reset();
      } else {
        setStatusForm("error");
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatusForm("error");
      alert("Erro ao enviar mensagem. Por favor, tente novamente mais tarde.");
    } finally {
      // opcional: resetar captcha (se disponível)
      setSendForm(true);
      recaptchaRef.current?.reset();
    }
  };
  return (
    <section id="location" className="py-20 bg-black text-white">
      <div className="container w-10/12 mx-auto px-6">
        {/* LINHA SUPERIOR → 2 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUNA ESQUERDA → TEXTO */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Localização</h3>

            <p className="text-justify text-sm">
              Atuamos em diversas localidades, proporcionando{" "}
              <b>soluções jurídicas personalizadas e estratégicas.</b>
            </p>

            <p className="text-justify text-md pt-4">
              Avenida Governador José Malcher, nº 815, Edifício Paladium Center,
              Sala 213, CEP 66.055-260, Umarizal, Belém, Pará.
            </p>

            <p className="text-justify text-md pt-4">
              Horário de funcionamento: de segunda-feira a sexta-feira, de 8hs
              às 18hs.
            </p>

            <div className="flex gap-6 mt-6">
              {/* seus ícones aqui (sem alteração) */}
            </div>
          </div>

          {/* COLUNA DIREITA → FORMULÁRIO */}
          <div className="bg-white p-8 rounded-xl shadow text-black space-y-4">
            {sendForm === false ? (
              <>
                <div className="hidden md:block">
                  <h3 className="text-3xl font-bold mb-4">Entre em contato</h3>
                  <p className="text-justify text-sm">
                    Preencha o formulário abaixo e entraremos em contato o mais
                    breve possível.
                  </p>
                </div>
                <form className="" onSubmit={handleSubmit}>
                  <input
                    className="w-full border p-4 rounded mb-2 border-gray-700"
                    placeholder="Nome"
                    type="text"
                    name="nome"
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="w-full border p-4 rounded mb-2 border-gray-700"
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    className="w-full border p-4 rounded mb-2 border-gray-700"
                    placeholder="Mensagem"
                    name="mensagem"
                    onChange={handleChange}
                    required
                  />
                  {/* <div
              className="g-recaptcha"
              data-sitekey="6LdrR1ksAAAAAMv-T3yx6S8rp0ngSxHPajvfPAs-"
            ></div> */}
                  <ReCAPTCHA
                    sitekey="6LdrR1ksAAAAAMv-T3yx6S8rp0ngSxHPajvfPAs-"
                    ref={recaptchaRef}
                  />
                  <button
                    type="submit"
                    className={`w-full py-4 rounded font-semibold text-white flex items-center justify-center ${
                      !form.name ||
                      !form.email ||
                      !form.message ||
                      //!(window as any).grecaptcha?.getResponse() ||
                      sendForm
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-900 hover:bg-indigo-700"
                    }`}
                    disabled={
                      !form.name ||
                      !form.email ||
                      !form.message ||
                      //!(window as any).grecaptcha?.getResponse() ||
                      sendForm
                    }
                  >
                    {sendForm ? (
                      <span>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 inline"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="white"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </button>
                </form>
              </>
            ) : (
                <>
                {statusForm === null ? (
                  <div className="flex items-center justify-center text-gray-600">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    />
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Enviando...
                  </div>
                ) : (
                  <>
                  {statusForm === "success" && (
                    <div className="text-green-500 text-center">
                    Mensagem enviada com sucesso!
                    </div>
                  )}
                  {statusForm === "error" && (
                    <div className="text-red-500 text-center">Erro ao enviar mensagem.</div>
                  )}
                  </>
                )}
                </>
            )}
          </div>
        </div>

        {/* MAPA → EMBAIXO, FULL WIDTH */}
        <div className="mt-12">
          <iframe
            className="w-full h-80 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5396699896082!2d-48.48907132603997!3d-1.4506029985357336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48f3113decf95%3A0x5738ee1ec46ba9df!2sAmanda%20Nazareth%20Advogada%20Trabalhista%20e%20Familiarista.!5e0!3m2!1spt-BR!2sbr!4v1769098711378!5m2!1spt-BR!2sbr"
            loading="lazy"
            title="Localização no Google Maps"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
