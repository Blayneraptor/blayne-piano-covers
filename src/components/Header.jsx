import { useState, useEffect, useRef } from "react";
import logoBlayne from "../assets/logoblayne.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoversHovered, setIsCoversHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(null);
  const headerRef = useRef(null);
  const submenuRef = useRef(null);
  const coverMenuItemRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setShowMobileOverlay(isMobile && isCoversHovered && isMenuOpen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [isMobile, isCoversHovered, isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsCoversHovered(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [isMobile, isMenuOpen]);

  const handleSubmenuItemHover = (index) => {
    setActiveSubmenuItem(index);
  };

  const handleCoversMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsCoversHovered(true);
  };

  const handleCoversMouseLeave = (e) => {
    if (submenuRef.current) {
      const submenuRect = submenuRef.current.getBoundingClientRect();
      if (
        e.clientY >= submenuRect.top - 20 &&
        e.clientX >= submenuRect.left - 20 &&
        e.clientX <= submenuRect.right + 20
      ) {
        return;
      }
    }

    closeTimerRef.current = setTimeout(() => {
      setIsCoversHovered(false);
      setActiveSubmenuItem(null);
    }, 150);
  };

  const handleSubmenuMouseLeave = (e) => {
    if (coverMenuItemRef.current) {
      const coverRect = coverMenuItemRef.current.getBoundingClientRect();
      if (
        e.clientY <= coverRect.bottom + 20 &&
        e.clientX >= coverRect.left - 20 &&
        e.clientX <= coverRect.right + 20
      ) {
        return;
      }
    }

    closeTimerRef.current = setTimeout(() => {
      setIsCoversHovered(false);
      setActiveSubmenuItem(null);
    }, 150);
  };

  const handleSubmenuMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const submenuItems = [
    { name: "Howl's Moving Castle", href: "#item1" },
    { name: "Waltz Nº 2 Shostakóvich", href: "#item2" },
    { name: "Empty Core 1", href: "#item3" },
    { name: "Love Story Indila", href: "#item4" },
    { name: "Idea 22 Gibran Alcocer", href: "#item5" },
    { name: "Idea 1 Gibran Alcocer", href: "#item6" },
    { name: "Koe no Katachi", href: "#item7" },
  ];

  return (
    <>
      {showMobileOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-40"
          onClick={() => {
            setIsCoversHovered(false);
            setActiveSubmenuItem(null);
          }}
        ></div>
      )}

      <nav
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 border-gray-200 transition-all duration-1000 dark:border-gray-700 ${
          isScrolled
            ? "bg-black bg-opacity-0 backdrop-blur-md"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoBlayne} className="h-10 w-10" alt="Logo Blayne" />
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
            id="navbar-dropdown"
            className={`w-full ${
              isMobile
                ? `${
                    isCoversHovered ? "overflow-visible" : "overflow-hidden"
                  } transition-all duration-500 ease-in-out ` +
                  (isMenuOpen
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0")
                : "block md:block md:w-auto"
            }`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-transparent">
              <li>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-white bg-transparent rounded-sm transition transform duration-300 hover:scale-110 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li
                ref={coverMenuItemRef}
                className="relative group"
                onMouseEnter={handleCoversMouseEnter}
                onMouseLeave={handleCoversMouseLeave}
              >
                <a
                  href={isMobile ? undefined : "#"}
                  onClick={(e) => {
                    if (isMobile) {
                      e.preventDefault();
                      setIsCoversHovered(!isCoversHovered);
                    }
                  }}
                  className="flex items-center justify-between w-full py-2 px-3 transition transform duration-300 hover:scale-110 bg-transparent rounded-sm hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white cursor-pointer group"
                >
                  <span className="relative overflow-hidden group-hover:text-blue-400 transition-colors duration-300">
                    Covers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></span>
                  </span>
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                      isCoversHovered ? "rotate-180" : ""
                    }`}
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
                  ref={submenuRef}
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                  className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-full mt-2 z-50 font-normal rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] backdrop-blur-md w-60 md:w-96 transition-all duration-500 ease-out ${
                    isCoversHovered
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                  } ${isMobile ? "w-full left-0 right-0" : ""}`}
                  style={{
                    background: "rgba(0, 0, 0, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 z-0"></div>
                  <div className="absolute inset-0 bg-[url('../assets/fondoazul.png')] bg-cover bg-center opacity-15 z-0"></div>
                  <div className="relative z-10 py-3 px-4 border-b border-gray-700/50 bg-black/40">
                    <h3 className="text-center text-lg font-semibold text-blue-300 animate-pulse">
                      Mis Interpretaciones
                    </h3>
                  </div>
                  <ul className="py-2 text-sm relative z-10">
                    {submenuItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          onClick={() => {
                            if (closeTimerRef.current) {
                              clearTimeout(closeTimerRef.current);
                            }
                            setIsCoversHovered(false);
                            setIsMenuOpen(false);
                            setActiveSubmenuItem(null);
                          }}
                          onMouseEnter={() => handleSubmenuItemHover(index)}
                          onMouseLeave={() => setActiveSubmenuItem(null)}
                          className={`relative block px-6 py-3 transition-all duration-300 overflow-hidden ${
                            activeSubmenuItem === index
                              ? "text-white bg-blue-900/40"
                              : "text-gray-200 hover:bg-blue-700/30"
                          } ${isMobile ? "text-base py-4" : ""}`}
                        >
                          <span className="relative z-10 transition-transform duration-300 inline-block transform group-hover:translate-x-2">
                            {item.name}
                          </span>
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out ${
                              activeSubmenuItem === index ? "w-full" : "w-0"
                            }`}
                          ></span>
                          {activeSubmenuItem === index && (
                            <>
                              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
                              <span className="absolute right-6 top-1/3 transform -translate-y-1/2 h-1 w-1 rounded-full bg-purple-400 animate-ping animation-delay-300"></span>
                            </>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 py-2 px-4 border-t border-gray-700/50 bg-black/30">
                    <p className="text-center text-xs text-gray-400 italic">
                      ✨ Selecciona una interpretación ✨
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#proximamente"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 transition transform duration-300 hover:scale-110 bg-transparent rounded-sm hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:p-0 text-white"
                >
                  Próximamente
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 transition transform duration-300 hover:scale-110 bg-transparent rounded-sm hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:p-0 text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
