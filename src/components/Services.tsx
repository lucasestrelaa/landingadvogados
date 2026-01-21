import React from "react";

const services = [
  "Direito Civil",
  "Direito Trabalhista",
  "Direito Empresarial",
  "Direito de Família",
  "Consultoria Jurídica",
];

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container w-10/12 mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Áreas de Atuação</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">{item}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
