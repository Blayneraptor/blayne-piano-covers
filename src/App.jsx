import { useState, useEffect } from "react";
import Header from "./components/Header";
import bgImage from "./assets/bg3.png";
import castilloambu from "./assets/castilloambu.jpg";
import fondoazul from "./assets/fondoazul.png";
import { useForm, ValidationError } from "@formspree/react";
import bosque from "./assets/bosquecore.jpg";
import nubes1 from "./assets/nubes1.jpg";
import bosquehielo from "./assets/bosquehielo.jpg";
import nubes2 from "./assets/nubes2.jpg";
import nubes3 from "./assets/nubes3.jpg";
import nubes4 from "./assets/nubes4.jpg";
import portadakoe from "./assets/portadakoe.png";
import portadaidea1 from "./assets/portadaidea1.png";
import portadahowl from "./assets/portadahowl.png";
import portadawaltz from "./assets/portadawaltz.png";
import portadaidea22 from "./assets/portadaidea22.png";
import portadastory from "./assets/portadastory.png";
import portadaempty from "./assets/portadaempty.png";
import fondoazul3 from "./assets/fondoazul3.png";

function ContactForm() {
  const [state, handleSubmit] = useForm("xannaejy");
  
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-400">¡Mensaje enviado con éxito!</h3>
        <p className="text-gray-300">Gracias por contactarme. ¡Te responderé lo antes posible!</p>
      </div>
    );
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className="relative max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm shadow-xl shadow-blue-900/10 border border-white/5"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        Contacta conmigo
      </h2>
      
      <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-xl opacity-70"></div>
      <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full filter blur-xl opacity-50"></div>
      
      <div className="space-y-4 relative z-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            className="w-full pl-10 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            className="w-full pl-10 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
        
        <div className="relative">
          <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="Tu mensaje"
            required
            rows="4"
            className="w-full pl-10 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-white placeholder-gray-400 transition-all duration-300"
          ></textarea>
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
        
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <span className="relative z-10">
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
          </span>
          <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>
      </div>
    </form>
  );
}

const VideoItem = ({ coverImage, videoUrl, title }) => {
  const [sound, setSound] = useState(false);

  // Si sound es false, cambiamos autoplay a 0; si es true, dejamos autoplay=1.
  const computedUrl = sound
    ? videoUrl
    : videoUrl.replace(/autoplay=1/, "autoplay=0");

  // Lista de items en los que NO queremos overlay
  const hideOverlayTitles = [
    "The Benoni - Joshua Kyan Aalampour",
    "Empty Core 7 - Tomy Sauvestre",
    "Cordelia - Juan Arenosa",
  ];

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 mb-4"
      data-aos="fade-up"
      data-aos-duration="1000"
      onClick={() => setSound(true)}
    >
      <div className="relative h-full flex flex-col justify-between rounded overflow-hidden">
        {!hideOverlayTitles.includes(title) && (
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}
        <div
          className="relative group"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            className="my-4 w-full"
            src={coverImage}
            alt={title}
            style={{
              filter: "blur(0px)",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          />
          <iframe
            key={`video-${sound}`}
            src={computedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              sound ? "opacity-100" : "group-hover:opacity-100"
            }`}
          ></iframe>
        </div>
        <h5
          className="py-3 mb-0 text-center text-lg font-bold uppercase tracking-wider text-white"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {title}
        </h5>
      </div>
    </div>
  );
};
const VideoCover = ({
  videoUrl,
  coverImage,
  title,
  width = "350",
  height = "681",
}) => {
  const [played, setPlayed] = useState(false);

  return played ? (
    <iframe
      width={width}
      height={height}
      src={videoUrl}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-lg"
    ></iframe>
  ) : (
    <div className="relative cursor-pointer" onClick={() => setPlayed(true)}>
      <img
        src={coverImage}
        alt={title}
        className="portadas object-cover rounded-lg mx-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white"
          viewBox="0 0 64 64"
          fill="currentColor"
        >
          <circle cx="32" cy="32" r="32" opacity="0.7" />
          <polygon points="26,20 26,44 46,32" fill="white" />
        </svg>
      </div>
    </div>
  );
};

const App = () => {
  const [openImage, setOpenImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-black text-white scroll-smooth overflow-x-hidden">
      <Header />
      {/* Portada grande debajo del Header */}
      <section className="relative w-full h-[950px] bg-cover bg-bottom overflow-hidden">
        {/* Fondo animado */}
        <div
          className="absolute inset-0 animate-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Capa para el gradiente o overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)",
            filter: "blur(0px)",
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        ></div>
        {/* Bloque de descripción en la parte izquierda */}
        <div className="absolute left-5 md:left-20 lg:left-40 xl:left-60 2xl:left-80 top-1/2 transform -translate-y-1/2 mb-12 max-w-[570px] p-6 bg-black bg-opacity-0 rounded-lg shadow-lg z-20 animate-blur">
          <h1
            className="mb-4 text-[40px] font-bold leading-tight text-white font-display md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            PORTFOLIO PIANO JOSE P. COUSO
          </h1>
          <p
            className="mb-8 text-lg font-medium leading-relaxed text-white md:pr-14"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Lista de interpretaciones que he aprendido a lo largo de mi
            trayectoria con el piano.
          </p>
          <div className="flex flex-wrap items-center">
            <a
              href="#item1"
              className="mr-5 mb-5 inline-flex items-center justify-center rounded-md bg-blue-900 py-3 px-7 text-base font-semibold text-white transition-all hover:bg-slate-900"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Explorar Ahora
            </a>
            <a
              href="#contacto"
              className="mb-5 inline-flex items-center justify-center rounded-md border-2 border-white py-3 px-7 text-base font-semibold text-white transition-all hover:border-blue-600"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Contacta Conmigo
            </a>
          </div>
        </div>
      </section>
      {/* Barra */}
      <div id="explorar" className="mb-6 border-b border-white/10">
        <div className="-mx-4 flex">
          <div className="w-full px-4"></div>
        </div>
      </div>

      {/* Grid en columna única para descripción, imagen y video */}
      <section className="max-w-8xl mx-auto grid grid-cols-1 gap-[20px] p-4 justify-items-center">
        {/* Item 1 */}
        <div
          id="item1"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={castilloambu}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(castilloambu)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Howl's Moving Castle
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación del estribillo de "Merry-Go-Round of Life"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              El Castillo Ambulante
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              En este video interpreto el estribillo de una hermosa pieza
              compuesta por Joe Hisaishi para la película homónima de Studio
              Ghibli. La película, dirigida por Hayao Miyazaki, nos transporta a
              un mundo mágico lleno de aventuras.
            </p>
          </div>
          {/* Columna: Video o Portada */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://player.vimeo.com/video/1029603232?h=2ae60bac1d"
              coverImage={portadahowl}
              title="Howl's Moving Castle"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 2 (mismo contenido que Item 1 con modificaciones en textos e imagen y video) */}
        <div
          id="item2"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={bosque}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(bosque)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Waltz No. 2 Shostakóvich
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación de la canción "Waltz No. 2"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              Waltz No.2
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              En este video interpreto la icónica "Waltz No. 2" de Dmitri
              Shostakovich. Esta obra, conocida por su inconfundible mezcla de
              melancolía y elegancia, captura a la perfección la dualidad
              emocional característica del compositor.
            </p>
          </div>
          {/* Columna: Video o Portada */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://www.youtube.com/embed/1WghDkHuIjc?vq=hd2160"
              coverImage={portadawaltz}
              title="Waltz No. 2"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 3 */}
        <div
          id="item3"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={nubes1}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(nubes1)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Empty Core 1
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación de la canción "Empty Core 1"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              Empty Core 1
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              La canción "Empty Core 1", creada por Tomy Sauvestre, está
              inspirada en la emotiva pieza "Drowning Love". En este video,
              interpreto el estribillo de esta composición única, que captura la
              melancolía y la belleza de la obra original, pero con un enfoque
              personal y renovado.
            </p>
          </div>
          {/* Columna: Video */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://player.vimeo.com/video/1029711298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              coverImage={portadaempty}
              title="Empty Core 1"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 4 */}
        <div
          id="item4"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={bosquehielo}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(bosquehielo)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Love Story
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación de la canción "Love Story"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              Love Story
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              En este video interpreto una emotiva pieza de la cantante francesa
              Indila, "Love Story". Esta canción, incluida en su álbum Mini
              World (2014), combina una melodía delicada con una narrativa
              poética que evoca emociones profundas.
            </p>
          </div>
          {/* Columna: Video */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://player.vimeo.com/video/1029706840?ts=0&share=copy"
              coverImage={portadastory}
              title="Love Story"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 5 */}
        <div
          id="item5"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={nubes2}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(nubes2)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Idea 22
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación de la canción "Idea 22"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              Idea 22
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              En este video interpreto la cautivadora pieza "Idea 22" de Gibran
              Alcocer. Esta composición destaca por su atmósfera introspectiva y
              su capacidad para transmitir una profundidad emocional única,
              invitando al oyente a un viaje sonoro lleno de matices y
              sensibilidad.
            </p>
          </div>
          {/* Columna: Video */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://player.vimeo.com/video/1043432123?ts=0&share=copy"
              coverImage={portadaidea22}
              title="Idea 22"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 6 */}
        <div
          id="item6"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={nubes3}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(nubes3)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Idea 1
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación de la canción "Idea 1"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              Idea 1
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              En este video interpreto la cautivadora pieza "Idea 1" de Gibrán
              Alcocer. Esta composición destaca por su atmósfera introspectiva y
              su capacidad para transmitir una profundidad emocional única,
              invitando al oyente a un viaje sonoro lleno de matices y
              sensibilidad.
            </p>
          </div>
          {/* Columna: Video */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://player.vimeo.com/video/1043437260?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              coverImage={portadaidea1} // o la imagen que corresponda
              title="Idea 1"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 7 */}
        <div
          id="item7"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.9) contrast(1.1)",
              boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
              borderRadius: "50%"
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 w-full md:w-[31%] h-[250px] md:h-[650px] pb-10 md:pb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={nubes4}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg cursor-pointer transition-all duration-300 filter hover:grayscale"
              onClick={() => setOpenImage(nubes4)}
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-4 md:px-8 pb-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-2 md:mb-4">
              Koe no Katachi
            </h1>
            <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
              Interpretación de la canción de la película "A Silent Voice"
            </h2>
            <h1 className="text-xl md:text-4xl font-semibold mb-2 md:mb-4">
              Koe no Katachi
            </h1>
            <p className="hidden md:block text-base md:text-xl">
              En este video interpreto la emotiva pieza de piano de "Koe no
              Katachi"(A Silent Voice). Esta obra, cargada de sensibilidad y
              profundidad, refleja a la perfección los sentimientos de conexión
              y redención que impregnan la historia, evocando una delicada
              mezcla de nostalgia y esperanza.
            </p>
          </div>
          {/* Columna: Video o Portada */}
          <div
            className="relative z-10 portadas w-full md:w-1/3 h-[250px] md:h-[650px] pb-10 md:pb-0 mx-auto md:pl-16"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <VideoCover
              videoUrl="https://www.youtube.com/embed/mh-0zVAUNx4?vq=hd2160&autoplay=1"
              coverImage={portadakoe} // Usa la misma portada que en los otros ítems
              title="Koe No Katachi"
              width={isMobile ? "300" : "360"}
              height={isMobile ? "530" : "650"}
            />
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="proximamente" className="my-8 border-b border-white/10"></div>
      </section>
      <section
        className="py-12"
        style={{
          backgroundImage: `url(${fondoazul3})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.9) contrast(1.1)",
          boxShadow: "inset 0 0 100px 90px rgba(0,0,0,0.9)",
          borderRadius: "50%"
        }}
      >
        <div className="flex justify-center ">
          <div
            className="w-full lg:w-9/12 text-center data"
            data-aos="fade-up"
            y
            data-aos-duration="1000"
          >
            <h2 className="text-5xl font-bold mb-4">Próximamente</h2>
            <p className="text-lg leading-relaxed mb-0">
              Covers que estarán disponibles próximamente. ¡Mantente atento!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-6 max-w-screen-2xl mx-auto p-4 gap-10 ">
          {/* Ítem 1: The Benoni */}
          <VideoItem
            coverImage="https://i.ytimg.com/vi/vBfmQ2RJChE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBM_nciM-6q-CNnwZv6kw9mqF1RSA"
            videoUrl="https://www.youtube.com/embed/vBfmQ2RJChE?autoplay=1&controls=0&loop=1&playlist=vBfmQ2RJChE"
            title="The Benoni - Joshua Kyan Aalampour"
          />
          {/* Ítem 2: Empty Core 7-Tomy Sauvestre */}
          <VideoItem
            coverImage="https://i.ytimg.com/vi/Pl_iurD2mDg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbpfgoyFtEFM-ljYDloFLAw4AlXg"
            videoUrl="https://www.youtube.com/embed/Pl_iurD2mDg?autoplay=1&controls=0&loop=1&playlist=Pl_iurD2mDg"
            title="Empty Core 7 - Tomy Sauvestre"
          />
          {/* Ítem 3: Cordelia - Juan Arenosa */}
          <VideoItem
            coverImage="https://i.ytimg.com/vi/YMhOEQ4B4xg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD7ysY0lZCeCk65w1RbuDHRk8hZOQ"
            videoUrl="https://www.youtube.com/embed/YMhOEQ4B4xg?autoplay=1&controls=0&loop=1&playlist=YMhOEQ4B4xg"
            title="Cordelia - Juan Arenosa"
          />
        </div>
      </section>
      {/* Modal para ver la imagen en grande con mejoras de UX/UI para móvil */}
      {openImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-50 p-4 animate-fadeIn"
          onClick={() => setOpenImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <button 
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setOpenImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={openImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl transform transition-all duration-500 animate-scaleIn"
            />
          </div>
        </div>
      )}
      
      {/* Footer con ContactForm mejorado para móvil */}
      <footer
        id="contacto"
        className="relative text-white text-center py-12 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.85)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Elementos decorativos para el fondo */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 left-1/4 transform -translate-x-1/2 w-20 h-20 rounded-full bg-purple-500/10 filter blur-2xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 transform translate-x-1/2 w-30 h-30 rounded-full bg-cyan-500/10 filter blur-2xl animate-pulse animation-delay-500"></div>
        
        <div className="relative p-8 z-10">
          <ContactForm />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 mt-8 px-6">
          <div className="flex space-x-4 mb-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-400">Blayneraptor</span>. Todos los derechos reservados.
          </p>
          
         
        </div>
      </footer>
    </div>
  );
};

export default App;
