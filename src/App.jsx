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
      <p className="text-white text-center animate-pulse transition-opacity duration-500">
        Mensaje enviado
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-2xl mx-auto p-8 bg-transparent rounded-md"
      id="contacto"
    >
      <h2 className="text-white text-center text-2xl font-semibold mb-4">
        Contacta conmigo
      </h2>
      <input
        id="nombre"
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className="p-2 rounded-md bg-[#1a1a1a] text-white"
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        className="p-2 rounded-md bg-[#1a1a1a] text-white"
      />

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Tu mensaje"
        required
        className="p-2 rounded-md bg-[#1a1a1a] text-white"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gray-600 hover:bg-gray-700 py-2 px-4 rounded-md text-white"
      >
        Enviar
      </button>
    </form>
  );
}

const VideoItem = ({ coverImage, videoUrl, title }) => {
  const [sound, setSound] = useState(false);
  const computedUrl = `${videoUrl}${sound ? "" : "&mute=0"}`;
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 mb-4 cursor-pointer"
      onClick={() => setSound(true)}
    >
      <div className="relative h-full flex flex-col justify-between rounded overflow-hidden">
        <div className="relative group">
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
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>
        <h5 className="py-3 mb-0 text-center text-lg font-bold uppercase tracking-wider text-white drop-shadow-lg">{title}</h5>
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
            className="mb-4 text-[40px] font-bold leading-tight text-white md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            PORTFOLIO PIANO BLAYNE
          </h1>
          <p
            className="mb-8 text-lg font-medium leading-relaxed text-white md:pr-14"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Aquí muestro mis covers que he ido haciendo, esta página está en
            DESARROLLO.
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
      <section className="max-w-8xl mx-auto grid grid-cols-1 gap-[200px] p-8 justify-items-center">
        {/* Item 1 */}
        <div
          id="item1"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-0 md:ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con efecto de entrada */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none animate-fadeIn"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
        <div  id="proximamente" className="my-8 border-b border-white/10"></div>
      </section>
      <section
        className="py-12" 
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.9) 100%), url(${fondoazul3})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center " >
          
          <div className="w-full lg:w-9/12 text-center data">
            <h2 className="text-4xl font-bold mb-4">Próximamente</h2>
            <p className="text-lg leading-relaxed mb-0">
              Covers que estarán disponibles próximamente. ¡Mantente atento!
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mt-6 max-w-screen-2xl mx-auto p-4 gap-10 " >
          {/* Ítem 1: The Benoni */}
          <VideoItem
            coverImage="https://i.ytimg.com/vi/vBfmQ2RJChE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBM_nciM-6q-CNnwZv6kw9mqF1RSA"
            videoUrl="https://www.youtube.com/embed/vBfmQ2RJChE?autoplay=1&controls=0&loop=1&playlist=vBfmQ2RJChE"
            title="The Benoni-Joshua Kyan Aalampour"
          />
          {/* Ítem 2: Empty Core 7-Tomy Sauvestre */}
          <VideoItem
            coverImage="https://i.ytimg.com/vi/Pl_iurD2mDg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbpfgoyFtEFM-ljYDloFLAw4AlXg"
            videoUrl="https://www.youtube.com/embed/Pl_iurD2mDg?autoplay=1&controls=0&loop=1&playlist=Pl_iurD2mDg"
            title="Empty Core 7-Tomy Sauvestre"
          />
          {/* Ítem 3: Drowning Love- Cover Erena */}
          <VideoItem
            coverImage="https://i.ytimg.com/vi/9yjWC45fAg8/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHIB4AC0AWKAgwIABABGHIgTShFMA8=&rs=AOn4CLBkd4GIi7o4FV-fcIwEgt8RO9gx1g"
            videoUrl="https://www.youtube.com/embed/9yjWC45fAg8?autoplay=1&controls=0&loop=1&playlist=9yjWC45fAg8"
            title="Drowning Love- Cover Erena"
          />
        </div>
      </section>
      {/* Modal para ver la imagen en grande */}
      {openImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="Imagen ampliada"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
      {/* Footer con ContactForm */}
      <footer
        id="contacto"
        className="text-white text-center py-8"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), transparent), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-8">
          <ContactForm />
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blayneraptor. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
