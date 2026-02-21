import draamandanazareth from "../assets/images/draamandanazareth.jpg";

export default function Hero() {
  return (
    <section className="bg-[#512733] text-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-44 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-start">
          <h1 className="text-2xl lg:text-3xl  font-bold leading-tight mb-4">
            Excelência e Compromisso Jurídico na Proteção de seus Direitos.
          </h1>

          <p className="text-justify text-md text-indigo-50 mb-4">
            O <b>Escritório Amanda Nazareth Advocacia</b> oferece assessoria
            jurídica especializada em <b>Direito do Trabalho</b>, com atuação
            estratégica e segura na defesa de empregados e empregadores, sempre
            voltada à prevenção e à solução eficiente de conflitos.
          </p>

          <p className="text-justify text-md text-indigo-50 mb-4">
            Atuamos, ainda, nas áreas de <b>Direito de Família e Sucessões</b>,
            pautados por uma advocacia humanizada, técnica e conciliatória, que
            prioriza o diálogo, a segurança jurídica e a preservação das
            relações pessoais.
          </p>
          <p className="text-justify text-md text-indigo-50 mb-4">
            Nosso trabalho é guiado pelos princípios do <b>respeito</b>,{" "}
            <b>da transparência</b> e <b>do compromisso</b>, contando com uma
            equipe de advogados experientes e qualificados, preparada para
            defender os interesses de nossos clientes com ética,
            responsabilidade e excelência técnica.
          </p>
          <ul>
            <li className="text-justify text-md text-indigo-50 mb-2">
              <b>• Direito do Trabalho</b>
            </li>
            <li className="text-justify text-md text-indigo-50 mb-2">
              <b>• Direito de Família e Sucessões</b>
            </li>
          </ul>

          <a
            href="https://wa.me/5591982267696?text=Ol%C3%A1%2C+venho+do+seu+site+e+gostaria+de+agendar+uma+reuni%C3%A3o%21"
            className="flex justify-self-center justify-center md:justify-self-start w-48 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            <span className="self-center pl-2">Fale comigo</span>
          </a>
        </div>

        <div className="hidden md:block">
          <img
            src={draamandanazareth}
            alt="Advogado trabalhando com documentos"
            className="rounded-xl shadow-2xl"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
