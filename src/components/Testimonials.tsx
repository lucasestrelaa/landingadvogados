import React from "react";

const testimonials = [
  {
    name: "Cliente Satisfeito",
    text: "Excelente profissionalismo e atenção impecável!",
  },
  {
    name: "Outro Cliente",
    text: "Fui atendido com seriedade e rapidez.",
  },
];

const Testimonials = () => (
  <section className="py-20 container w-10/12 mx-auto px-6">
    <h3 className="text-3xl font-bold text-center mb-10">Depoimentos</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
          <p className="text-gray-700 mb-4">“{t.text}”</p>
          <p className="font-semibold">{t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
