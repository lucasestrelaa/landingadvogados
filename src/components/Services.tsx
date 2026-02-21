const services = [
  {
    title: "Reclamações Trabalhistas",
    description: "Atuação na defesa dos trabalhadores em ações destinadas à reparação de direitos trabalhistas violados, tais como horas extras, verbas rescisórias, indenizações por danos morais, bem como em demandas de rescisão indireta do contrato de trabalho, com vistas à liberação do FGTS e demais verbas legalmente asseguradas."
  },
  {
    title: "Contestação Trabalhista",
    description: "Atuação na defesa de empregadores, com a elaboração de contestações técnicas e estrategicamente fundamentadas, impugnação de pedidos e provas, análise de riscos processuais e adoção das medidas necessárias à preservação dos direitos e interesses da parte reclamada."
  },
  {
    title: "Recursos Trabalhistas",
    description: "Elaboração e acompanhamento de recursos nas diversas fases do processo do trabalho, com atuação técnica e estratégica perante as instâncias competentes, visando à reforma, invalidação ou adequação das decisões judiciais, sempre com foco na segurança jurídica e na defesa eficaz dos interesses do cliente."
  },
  {
    title: "União Estável. Divórcio Consensual ou Litigioso. Partilha de Bens.",
    description: "Atuação jurídica especializada na formalização e dissolução de união estável, bem como na condução de divórcios consensuais e litigiosos, com assessoria completa na partilha de bens, sempre pautada pela segurança jurídica, pela proteção patrimonial e pela busca de soluções equilibradas e eficazes."
  },
  {
    title: "Pensão Alimentícia. Guarda e Direito de Convivência.",
    description: "Atuação especializada na fixação, revisão e exoneração de pensão alimentícia, bem como na definição de guarda e na regulamentação do direito de convivência, sempre priorizando o melhor interesse do menor, a segurança jurídica e a solução equilibrada dos conflitos familiares."
  },
  {
    title: "Inventário Judicial ou Extrajudicial. ",
    description: "Atuação completa na condução de inventários judiciais e extrajudiciais, com assessoria técnica desde a abertura até a partilha dos bens, assegurando celeridade, regularidade legal e segurança jurídica aos herdeiros."
  }
];

const Services = () => (
  <section id="services" className="py-28 bg-gray-300 text-black">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
      <p className="text-justify text-gray-800 mb-16 max-w-5xl mx-auto">
        Atuação jurídica estratégica nas áreas de Direito do Trabalho e Direito
        de Família e Sucessões, voltada à construção de soluções eficazes e à
        obtenção de resultados concretos, com segurança jurídica e excelência
        técnica.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-black text-[#ce9f41] rounded-xl p-8 shadow-lg hover:shadow-lg hover:shadow-[#ce9f41] transition"
          >
            <div className="mb-4 text-3xl">⚖️</div>
            <h3 className="text-xl font-semibold h-20 md:h-15">{item.title}</h3>
            <p className="text-justify text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
