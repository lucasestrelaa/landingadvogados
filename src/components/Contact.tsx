const Contact = () => (
  <section id="contact" className="py-20 bg-indigo-900 text-white">
    <div className="container w-10/12 mx-auto px-6 text-center md:text-left md:flex md:items-center md:justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-3xl font-bold mb-4">Contato</h3>
        <p className="text-lg">Agende uma consulta ou tire suas dúvidas.</p>
      </div>
      <form className="bg-gray-100 rounded-2xl text-center p-2 md:w-1/2 space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border p-3 rounded text-gray-900"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full border p-3 rounded text-gray-900"
        />
        <textarea
          placeholder="Mensagem"
          className="w-full border p-3 rounded text-gray-900"
        ></textarea>
        <button className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded">
          Enviar Mensagem
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
