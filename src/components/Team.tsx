
import amanda from '../assets/images/amanda.jpg';

// const team = [
//   { name: "Dr. João Silva", role: "Sócio Fundador" },
//   { name: "Dra. Maria Oliveira", role: "Advogada Sênior" },
//   { name: "Dr. Carlos Souza", role: "Consultor Jurídico" },
// ];


const Team = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container w-10/12 mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Quem sou eu?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={amanda}
            alt="Amanda Cristina Ramos Nazareth"
            className="h-48 w-48 rounded-full object-cover shadow-md"
          />
        </div>

        <div className="md:col-span-2 text-left">
          <h4 className="text-2xl font-bold mb-4">AMANDA CRISTINA RAMOS NAZARETH</h4>
          <p className="text-gray-700 leading-relaxed">
            Advogada Graduada pela Universidade da Amazônia, UNAMA, 2012, Belém - PA. Especialista em Direito e Processo do Trabalho, pela Universidade Anhanguera, UNIDERP, São Paulo - SP, 2013. Advogada correspondente com escritório próprio e regularmente inscrita no sistema do PJE, PROJUDI-Pa e TRF 1ª Região, através de certificado digital. Atuação nos Foros de Belém, Ananindeua, Icoaraci, Marituba, Benevides, Castanhal, Abaetetuba e Mosqueiro. Serviços Prestados: confecção de peças processuais, realização de audiências, acompanhamento de processos, extração de cópias, solicitação de certidões, etc.
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-semibold">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default Team;
