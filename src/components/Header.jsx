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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black bg-opacity-70 backdrop-blur-md py-2 shadow-lg shadow-blue-900/20"
            : "bg-transparent backdrop-blur-0 py-4"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-full">
              <img 
                src={logoBlayne} 
                className="h-10 w-10 transition-transform duration-500 transform group-hover:scale-110" 
                alt="Logo Blayne" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-full"></div>
            </div>
            <span className="self-center text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
              Blayne Covers
            </span>
          </a>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden relative overflow-hidden group"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Abrir menú</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            <svg
              className={`w-5 h-5 text-white transition-all duration-300 ${isMenuOpen ? "transform rotate-90 scale-110" : ""}`}
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
                d={isMenuOpen ? "M1 1L16 13M1 13L16 1" : "M1 1h15M1 7h15M1 13h15"}
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
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0">
              <li className="my-1 md:my-0">
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative block py-2 px-3 text-white rounded-lg md:bg-transparent md:p-0 overflow-hidden group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">Inicio</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 rounded-md"></span>
                </a>
              </li>
              <li
                ref={coverMenuItemRef}
                className="relative group my-1 md:my-0"
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
                  className="flex items-center justify-between w-full py-2 px-3 md:p-0 text-white cursor-pointer group relative overflow-hidden rounded-lg md:bg-transparent md:hover:bg-transparent"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">Covers</span>
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300 ${
                      isCoversHovered ? "rotate-180 text-blue-400" : ""
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 rounded-md"></span>
                </a>
                
                <div
                  ref={submenuRef}
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                  className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-full mt-2 z-50 font-normal rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full md:w-80 transition-all duration-300 ease-out ${
                    isCoversHovered
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                  }`}
                  style={{
                    background: "rgba(13, 17, 23, 0.95)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 z-0"></div>
                  <div className="relative z-10 py-3 px-4 border-b border-gray-700/50">
                    <h3 className="text-center text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
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
                              : "text-gray-200 hover:bg-blue-700/20"
                          } ${isMobile ? "text-base py-4" : ""}`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity duration-300 ${
                            activeSubmenuItem === index ? "opacity-100" : ""
                          }`}></div>
                          <span className="relative z-10 transition-transform duration-300 inline-block transform">
                            {item.name}
                          </span>
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out ${
                              activeSubmenuItem === index ? "w-full" : "w-0"
                            }`}
                          ></span>
                          {activeSubmenuItem === index && (
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="my-1 md:my-0">
                <a
                  href="#proximamente"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative block py-2 px-3 text-white rounded-lg md:bg-transparent md:p-0 overflow-hidden group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">Próximamente</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 rounded-md"></span>
                </a>
              </li>
              <li className="my-1 md:my-0">
                <a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative block py-2 px-3 text-white rounded-lg md:bg-transparent md:p-0 overflow-hidden group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-400">Contacto</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 rounded-md"></span>
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
