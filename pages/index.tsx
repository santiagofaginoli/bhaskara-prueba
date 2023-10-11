import DefaultLayout from "@/layouts/default";
import { ChatBox } from "../components/chat-box";
import { useState } from "react";
import { Divider, Input, Accordion, AccordionItem } from "@nextui-org/react";
import Swal from "sweetalert2";
import Cards from "@/components/Cards";
import Bhaskara from "@/components/Bhaskara";

export default function IndexPage() {
  const [inputs, setInputs] = useState({
    A: "",
    B: "",
    C: "",
  });
  const [stateA, setA] = useState("");
  const [stateB, setB] = useState("");
  const [stateC, setC] = useState("");
  const [resutaldo, setResultado] = useState(0);
  const [valorDelta, setDelta] = useState(0);

  function calcularDelta(a: number, b: number, c: number): number {
    return b * b - 4 * a * c;
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    if (e.target.name === "A") {
      setA(e.target.value);
    }
    if (e.target.name === "B") {
      setB(e.target.value);
    }
    if (e.target.name === "C") {
      setC(e.target.value);
    }
    console.log(e.target.value, e.target.name);
  };

  const handleSubmit2 = () => {
    if (!stateA || !stateB || !stateC) {
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "Ingrese todos los campos",
      });
      return;
    } else if (stateA == 0) {
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "No se puede dividir por 0",
      });
      return;
    } else if (
      isNaN(Number(stateA)) ||
      isNaN(Number(stateB)) ||
      isNaN(Number(stateC))
    ) {
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "Ingrese solo números",
      });
      return;
    }
    let delta = calcularDelta(Number(stateA), Number(stateB), Number(stateC));
    setDelta(delta);
    if (delta < 0) {
      delta = delta * -1;
      let x1 = (-Number(stateB) / (2 * Number(stateA))) * 1;
      if (x1 > 0) {
        x1 = "+" + x1;
      }
      let x1i = Math.sqrt(delta) / (2 * Number(stateA)) + "i";
      let x2 = (-Number(stateB) / (2 * Number(stateA))) * -1;
      if (x2 > 0) {
        x2 = "+" + x2;
      }
      let x2i = Math.sqrt(delta) / (2 * Number(stateA)) + "i";
      setResultado({ resA: x1, resB: x2, resAi: x1i, resBi: x2i });
      Swal.fire({
        icon: "success",
        title: "Excelente!",
        html:
          "El valor de X1 es: " +
          x1 +
          x1i +
          "<br/>" +
          "El valor de X2 es: " +
          x2 +
          x2i +
          "<br/>" +
          "El valor del discriminante es: " +
          delta,
      });
      return;
    }
    let x1 = (-Number(stateB) + Math.sqrt(delta)) / (2 * Number(stateA));
    let x2 = (-Number(stateB) - Math.sqrt(delta)) / (2 * Number(stateA));
    Swal.fire({
      icon: "success",
      title: "Excelente!",
      html:
        "El valor de X1 es: " +
        x1 +
        "<br/>" +
        "El valor de X2 es: " +
        x2 +
        "<br/>" +
        "El valor del discriminante es: " +
        delta,
    });
    setResultado({ resA: x1, resB: x2 });
  };

  const limpiar = () => {
    setResultado(0);
    setDelta(0);
  };
  return (
    <DefaultLayout>
      {/*------------------------------ Section Proyecto ---------------------------------*/}
      <section id="Proyecto" className="flex justify-center items-center mt-10">
        <div className="  grid md:col-span-1">
          <div className="w-full min-h-[295px] min-w-[430px] relative bg-no-repeat bg-cover  mx-auto bg-[url('/img/back.jpg')] rounded-xl overflow-hidden">
            <div className="flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-white font-semibold">
                  <h3>Sobre la exposicion</h3>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 p-4 mb-5 justify-center ml-2  max-h-32 overflow-y-scroll text-white">
              <p>
                Esta exposicion surge con el fin de ayudar a alumnos que tengan
                dudas con el area de las ecuaciones cuadraticas, en la seccion
                del chat, podra preguntar lo que gusten al matematico.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*------------------------------Section de Calculadora de Bhaskara--------------------------------*/}
      <section
        id="inicio"
        className="flex justify-center items-center w-screen h-screen  "
      >
        <div className=" grid grid-cols-1 gap-y-4 p-5 sm:w-5/6 md:w-4/6 bg-transparent border">
          <div className="w-full flex justify-center">
            <h2 className=" pt-5 text-white ">Calculadora de Bhaskara</h2>
          </div>
          <div className="w-full">
            <Divider />
          </div>
          <div className="w-full md:flex  sm:grid sm:grid-cols-1 md:justify-center md:gap-10">
            <div className=" sm:w-full mb-5 md:w-auto">
              <input
                placeholder="Ingrese el valor de A"
                type="text"
                variant="bordered"
                name="A"
                className=" text-white bg-transparent w-full h-full align-middle p-1  border border-gray-800 rounded-3xl focus:border-none hover:border-blue-500 "
                id="stateA"
                value={inputs.A}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div className=" sm:w-full mb-5 md:w-auto">
              <input
                placeholder="Ingrese el valor de B"
                type="text"
                variant="bordered"
                name="B"
                className="text-white bg-transparent w-full h-full align-middle p-1  border border-gray-800 rounded-3xl focus:border-none hover:border-blue-500 "
                id="stateB"
                value={inputs.B}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div className=" sm:w-full mb-5 md:w-auto">
              <input
                placeholder="Ingrese el valor de C"
                type="text"
                className="text-white bg-transparent w-full h-full align-middle p-1  border border-gray-800 rounded-3xl focus:border-none hover:border-blue-500 "
                name="C"
                id="stateC"
                value={inputs.C}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className=" flex justify-center ">
              <div className="w-full flex justify-center">
                <button
                  className="bg-[#20613f] rounded-3xl  w-auto p-2 text-white"
                  onClick={() => handleSubmit2()}
                >
                  Mandar
                </button>
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="bg-[#eb636b] rounded-3xl  w-auto p-2 text-white"
                  onClick={() => limpiar()}
                >
                  limpiar
                </button>
              </div>
            </div>
          </div>
          <Divider />

          <div className="w-full flex justify-center mb-5 ">
            <Accordion
              showDivider={true}
              className=" flex bg-[#20613f] flex-col text-white   gap-1 w-full max-w-[300px] "
              variant="shadow"
            >
              <AccordionItem
                key="1"
                aria-label="Connected devices"
                title="Valor de X1"
                className=" text-white"
              >
                <h3>
                  El valor de X1 es: {resutaldo.resAi} {resutaldo.resA}
                </h3>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Apps Permissions"
                title="Valor de X2"
              >
                <h3>
                  El valor de X2 es: {resutaldo.resBi} {resutaldo.resB}
                </h3>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Pending tasks"
                title="Valor del discriminante"
              >
                <h3>El valor del discriminante es: {valorDelta} </h3>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/*------------------------------Section de Matematicos--------------------------------*/}
      <section>
        <Cards />
      </section>
      {/*------------------------------Section de Chat y video--------------------------------*/}
      <div className="w-full flex justify-center mt-20 mb-20 ">
        <h2 className="text-6xl" id="chat">
          Chatea con un Matematico
        </h2>
      </div>
      <section id="Explicacion" className="grid grid-cols-1 mx-auto w-full">
        <div className="flex justify-center w-full">
          <div className="w-4/6">
            <div>
              <Bhaskara />
            </div>
            <div className="mt-10">
              <ChatBox />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
