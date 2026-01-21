import React from "react";

const team = [
  { name: "Dr. João Silva", role: "Sócio Fundador" },
  { name: "Dra. Maria Oliveira", role: "Advogada Sênior" },
  { name: "Dr. Carlos Souza", role: "Consultor Jurídico" },
];

const Team = () => (
  <section id="team" className="py-20 bg-gray-100">
    <div className="container w-10/12 mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-10">Nosso Time</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h4 className="text-xl font-semibold">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
