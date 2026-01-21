export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Somos um escritório de advocacia com atuação estratégica,
            focado na excelência técnica, ética profissional e soluções
            jurídicas personalizadas.
          </p>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/6077449/pexels-photo-6077449.jpeg"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
