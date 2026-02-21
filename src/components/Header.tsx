import logo from "../assets/images/logo.png";

const Header = () => (
  <header className="fixed w-full h-32 bg-black shadow-md z-50">
    <div className="bg-black border-b border-gray-800">
      <div className="container w-10/12 mx-auto flex items-center justify-between px-6 py-2 text-sm text-gray-300">
        <div className="hidden md:block">
          <span>
            Atendimento personalizado e orientação jurídica especializada
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="hidden md:block text-sm">Atendimento: </span>
          <a
            href="tel:+5591982267696"
            className="flex items-center text-gray-300 hover:text-[#ce9f41]"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h2.2a1 1 0 01.98.79l.54 3.24a1 1 0 01-.27.88L7.1 10.1a16 16 0 006.9 6.9l2.49-1.56a1 1 0 01.88-.27l3.24.54A1 1 0 0121 18.8V21a2 2 0 01-2 2A19 19 0 013 5z"
              />
            </svg>
            <span className="text-sm">+55 (91) 98226-7696 |</span>
          </a>

          <div className="flex items-center space-x-3">
            <a
              href="https://www.instagram.com/dra.amanda_nazareth_?igsh=MWNybHlvcnp5ZmtodQ=="
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              href="https://wa.me/5591982267696?text=Ol%C3%A1%2C+venho+do+seu+site+e+gostaria+de+agendar+uma+reuni%C3%A3o%21"
              aria-label="WhatsApp"
              className="text-white hover:text-green-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
            <a
              href="mailto:amandaramosnazareth@gmail.com"
              aria-label="Email"
              className="text-white hover:text-red-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
            <a
              href="https://maps.app.goo.gl/H3JCfMg5NRjVLK5M8"
              aria-label="Localização"
              className="text-white hover:text-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav className="container w-10/12 mx-auto relative content-start md:content-center px-6 py-1 flex items-center">
      <h1 className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2 md:-translate-x-0 z-10 md:static md:transform-none">
        <img
          src={logo}
          alt="Logo"
          className="h-16 mt-2"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </h1>
      <>
        <ul className="hidden md:flex ml-auto space-x-8 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-[#ce9f41]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#ce9f41]">
              Sobre
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#ce9f41]">
              Nossos Serviços
            </a>
          </li>
          {/* <li><a href="#team" className="hover:text-[#ce9f41]">Time</a></li> */}
          <li>
            <a href="#location" className="hover:text-[#ce9f41]">
              Localização
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden relative ml-auto">
          <input
            id="menu-toggle"
            type="checkbox"
            className="hidden peer"
            aria-hidden
          />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer p-2 inline-flex items-center"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul className="hidden peer-checked:flex flex-col absolute right-0 mt-2 bg-black shadow-md rounded p-4 space-y-2 w-48 z-50">
            <li>
              <a href="#" className="block text-sm hover:text-[#ce9f41]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block text-sm hover:text-[#ce9f41]">
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm hover:text-[#ce9f41]"
              >
                Nossos Serviços
              </a>
            </li>
            {/* <li><a href="#team" className="block text-sm hover:text-[#ce9f41]">Time</a></li> */}
            <li>
              <a
                href="#location"
                className="block text-sm hover:text-[#ce9f41]"
              >
                Localização
              </a>
            </li>
          </ul>
        </div>
      </>
    </nav>
  </header>
);

export default Header;
