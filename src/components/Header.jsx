import { useState, useEffect } from "react";
import logoBlayne from "../assets/logoblayne.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoversHovered, setIsCoversHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-gray-200 transition-all duration-1000 dark:border-gray-700 ${
        isScrolled
          ? "bg-black bg-opacity-0 backdrop-blur-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoBlayne} className="h-12" alt="Logo Blayne" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Blayne Covers
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-transparent">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-transparent rounded-sm transition transform duration-300 hover:scale-110 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-transparent md:dark:bg-transparent"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            {/* Contenedor para Covers y el dropdown sin brechas */}
            <li
              className="relative"
              onMouseEnter={() => setIsCoversHovered(true)}
              onMouseLeave={() => setIsCoversHovered(false)}
            >
              <a
                href="#"
                className="flex items-center justify-between w-full py-2 px-3 transition transform duration-300 hover:scale-110 bg-transparent rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white cursor-pointer"
              >
                Covers{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </a>
              <div
                className={`absolute left-[-10px] top-full mt-0 z-10  font-normal bg-black divide-y divide-gray-100 rounded-lg shadow-sm w-44 transition-all duration-300 ease-out ${
                  isCoversHovered
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <ul className="py-2 text-sm text-white">
                  <li>
                    <a
                      href="#item1"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Howl's Moving Castle
                    </a>
                  </li>
                  <li>
                    <a
                      href="#item2"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Waltz Nº 2 Shostakóvich
                    </a>
                  </li>
                  <li>
                    <a
                      href="#item3"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Empty Core 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#item4"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Love Story Indila
                    </a>
                  </li>
                  <li>
                    <a
                      href="#item5"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Idea 22 Gibran Alcocer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#item6"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Idea 1 Gibran Alcocer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#item7"
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      Koe no Katachi
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#proximamente"
                className="block py-2 px-3 transition transform duration-300 hover:scale-110 bg-transparent rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white"
              >
                Próximamente
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block py-2 px-3 transition transform duration-300 hover:scale-110 bg-transparent rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
