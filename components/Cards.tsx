import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-20 mb-20 ">
        <h2 className="text-6xl">Otros Matematicos</h2>
      </div>
      <section
        id="Matematicos"
        className="grid p-10  mt-5 mb-5 grid-cols-1 gap-5 md:grid-cols-3"
      >
        <div className="  grid md:col-span-1">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/adrian-paenza.png')] rounded-xl overflow-hidden">
            <div className="flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Adrian Paenza</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>
                Nacio en argentina Buenos Aires,es periodista, desde entonces
                trabajó en diversos diarios y tuvo todas las series educativas
                de matemáticas del canal Encuentro. Hoy lleva adelante alterados
                por pi.
              </p>
            </div>
          </div>
        </div>
        <div className="grid  md:col-span-2">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/cabezon.png')] rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Eduardo Sáenz de Cabezón</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>
                Eduardo Sáenz de Cabezón es un matemático, profesor de Lenguajes
                y Sistemas Informáticos y también teólogo, aunque en la
                actualidad no ejerza como tal y reconocido especialista en
                monólogos científicos. Desarrolla su investigación en el área
                del álgebra computacional, a la que ha contribuido con 25
                publicaciones de investigación y colaboraciones con matemáticos
                españoles y europeos como Henry P. Wynn. Tambien realiza una
                intensa labor de divulgación de las matemáticas mediante
                conferencias, espectáculos, charlas y talleres
              </p>
            </div>
          </div>
        </div>
        <div className=" grid md:col-span-2 pr-0">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover mx-auto bg-[url('/img/rene.png')] rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>René Descartes</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>
                René Descartes, fue un filósofo, matemático y físico francés
                considerado el padre de la geometría analítica y la filosofía
                moderna. Uno de los legados más perdurables de Descartes fue su
                desarrollo de la geometría cartesiana o analítica, que utiliza
                el álgebra para describir la geometría. Descartes inventó la
                convención de representar incógnitas en las ecuaciones con x , y
                , z y datos conocidos por a , b , c . También fue pionero en la
                notación estándar que usa superíndices para indicar los
                exponentes.Son conocidos los teoremas de Descartes acerca de los
                defectos angulares, teniendo similitudes con la teorema de Euler
                para poliedros y el teorema de los círculos de las cuatro
                tangentes.
              </p>
            </div>
          </div>
        </div>
        <div className="grid  md:col-span-1">
          <div className="w-full min-h-[350px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/isaac.png')] rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Isaac Newton</h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 max-h-32 overflow-y-scroll text-white">
              <p>
                Isaac Newton fue un físico, teólogo, inventor, alquimista y
                matemático inglés. Desde finales de 1664 trabajó intensamente en
                diferentes problemas matemáticos. Abordó entonces el teorema del
                binomio, a partir de los trabajos de John Wallis, y desarrolló
                un método propio denominado cálculo de fluxiones. Poco después
                regresó a la granja familiar a causa de una epidemia de peste
                bubónica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
