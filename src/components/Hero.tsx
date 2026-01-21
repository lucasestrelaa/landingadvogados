export default function Hero() {
  return (
    <section className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Advocacia estratégica para decisões seguras
          </h1>

          <p className="text-lg text-indigo-100 mb-8">
            Atuação jurídica especializada, ética e focada em resultados
            concretos para você e sua empresa.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-indigo-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            Fale com um advogado
          </a>
        </div>

        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/6077588/pexels-photo-6077588.jpeg"
            className="rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
