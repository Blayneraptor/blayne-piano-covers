import Header from "./components/Header";
import bgImage from "./assets/bg3.png";
import castilloambu from "./assets/castilloambu.jpg";
import profileImg from "./assets/pianoperfil.png";
import fondoazul from "./assets/fondoazul.png"; // Importamos el fondo azul
import { useForm, ValidationError } from "@formspree/react";

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
        pattern=".+@.+\..+"
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

const App = () => {
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
            data-aos="fade-up" // Título aparece desde la derecha
            data-aos-duration="1000" // Duración de la animación
          >
            PORTFOLIO PIANO BLAYNE
          </h1>
          <p
            className="mb-8 text-lg font-medium leading-relaxed text-white md:pr-14"
            data-aos="fade-up" // Desaparece desde la derecha
            data-aos-duration="1000"
          >
            Aquí muestro mis covers que he ido haciendo, esta página está en
            DESARROLLO.
          </p>
          <div className="flex flex-wrap items-center">
            <a
              href="#item1"
              className="mr-5 mb-5 inline-flex items-center justify-center rounded-md bg-indigo-500 shadow-lg shadow-indigo-600/50 py-3 px-7 text-base font-semibold text-white transition-all hover:bg-blue-700"
              data-aos="fade-up" // Desvanecimiento hacia arriba
              data-aos-duration="1000"
            >
              Explorar Ahora
            </a>
            <a
              href="#contacto"
              className="mb-5 inline-flex items-center justify-center rounded-md border-2 border-white py-3 px-7 text-base font-semibold text-white transition-all hover:border-blue-600 hover:bg-blue-600"
              data-aos="fade-up" // Desvanecimiento desde abajo
              data-aos-duration="1000"
            >
              Contacta Conmigo
            </a>
          </div>
        </div>
      </section>
      {/* Barra */}
      <div id="explorar" className="mb-12 border-b border-white/10">
        <div className="-mx-4 flex">
          <div className="w-full px-4"></div>
        </div>
      </div>
      {/* Grid en columna única para descripción, imagen y video */}
      <section className="max-w-8xl mx-auto grid grid-cols-1 gap-[200px] p-8">
        {/* Item 1 */}
        <div
          id="item1"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con tamaño reducido y mayor opacidad */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.3,
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="relative z-10 md:w-1/3 h-[650px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={castilloambu}
              alt="Descripción 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="relative z-10 md:w-1/3 flex flex-col justify-center items-center text-center px-8"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-5xl font-semibold mb-4">
              Howl's Moving Castle
            </h1>
            <h2 className="text-3xl font-semibold mb-4">
              Interpretación del estribillo de "Merry-Go-Round of Life"
            </h2>
            <h1 className="text-4xl font-semibold mb-4">
              El Castillo Ambulante
            </h1>
            <p className="text-xl">
              En este video interpreto el estribillo de una hermosa pieza
              compuesta por Joe Hisaishi para la película homónima de Studio
              Ghibli. La película, dirigida por Hayao Miyazaki, nos transporta a
              un mundo mágico lleno de aventuras.
            </p>
          </div>
          {/* Columna: Video */}
          <div
            className="relative z-10 md:w-1/3 h-[650px] p-0 m-0 ml-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1029603232?h=2ae60bac1d"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
        {/* Item 2 */}
        <div
          id="item2"
          className="relative scroll-mt-[215px] my-12 flex flex-col md:flex-row items-center justify-evenly md:space-x-4 ml-8"
        >
          {/* Overlay de fondo (fondoazul.png) con tamaño reducido y mayor opacidad */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{
              backgroundImage: `url(${fondoazul})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.3,
            }}
          ></div>
          {/* Columna: Imagen */}
          <div
            className="md:w-1/3 h-[650px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={castilloambu}
              alt="Descripción 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Columna: Descripción */}
          <div
            className="md:w-1/3 flex flex-col justify-center items-center text-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h1 className="text-5xl font-semibold mb-4">Título Item 2</h1>
            <h2 className="text-3xl font-semibold mb-4">Subtítulo Item 2</h2>
            <h1 className="text-4xl font-semibold mb-4">Otra Información</h1>
            <p className="text-xl">
              La última descripción. Aquí puedes agregar contenido relacionado
              con esta sección.
            </p>
          </div>
          {/* Columna: Video */}
          <div
            className="md:w-1/3 h-[650px] p-0 m-0 ml-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1029603232?h=2ae60bac1d"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        {/* Nueva Barra para separación */}
        <div id="more-items" className="my-8 border-b border-white/10"></div>
      </section>

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
