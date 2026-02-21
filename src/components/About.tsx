import amanda from "../assets/images/amanda.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container w-10/12 mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={amanda}
              alt="Amanda Cristina Ramos Nazareth"
              className=" object-cover rounded-xl shadow-2xl mt-4"
              width={'100%'}
              height={'100%'}
              loading="lazy"
            />
          </div>

          <div className="md:col-span-2 text-left">
            <h3 className="text-3xl font-bold mb-10">Sobre Nosso Escritório</h3>
            <h4 className="text-2xl text-center md:text-start font-bold mb-4">
              AMANDA CRISTINA RAMOS NAZARETH
            </h4>
            <p className="text-justify text-gray-300 text-md  leading-relaxed">
              A <b>Dra. Amanda Cristina Ramos Nazareth</b> é advogada
              regularmente inscrita na <b>OAB/PA sob o nº 17.691</b>, graduada
              em Direito pela <b>Universidade da Amazônia – UNAMA</b>, em Belém/PA, no ano de
              2012. Possui especialização em Direito e Processo do Trabalho pela 
              <b> Universidade Anhanguera – UNIDERP</b>, em São Paulo/SP,
              concluída em 2013, formação que consolida sua atuação técnica e
              estratégica na área trabalhista.
            </p>
            <p className="text-justify text-gray-300 text-md md:text-start  leading-relaxed pt-4">
              Com vasta experiência nas áreas de <b>Direito do Trabalho</b> e{" "}
              <b>Direito de Família</b>, a profissional atua de forma
              personalizada e responsável na prestação de{" "}
              <b>
                consultorias jurídicas, elaboração de cálculos trabalhistas,
                pareceres técnicos
              </b>{" "}
              e no desenvolvimento de
              <b>estratégias jurídicas eficazes</b>, sempre voltadas à proteção
              dos direitos e interesses de seus clientes.
            </p>
            <p className="text-justify text-gray-300 text-md md:text-start  leading-relaxed pt-4">
              Prestamos atendimento <b>presencial e telepresencial</b>, com estrutura adequada para acompanhar demandas <b>em todo o território nacional</b>, assegurando comodidade, eficiência e o mesmo padrão de excelência técnica, independentemente da localização do cliente.
            </p>
            <p className="text-justify text-gray-300 text-md md:text-start  leading-relaxed pt-4">
              Agende sua consulta jurídica e busque a Justiça com quem alia conhecimento técnico, experiência e dedicação!
            </p>
            <a
              href="https://wa.me/5591982267696?text=Ol%C3%A1%2C+venho+do+seu+site+e+gostaria+de+agendar+uma+reuni%C3%A3o%21"
              className="flex justify-self-center justify-center md:justify-self-start w-48 mt-4 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition"
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
        </div>
      </div>
    </section>
  );
}
