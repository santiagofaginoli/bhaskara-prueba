import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ChatBox } from "../components/chat-box";
import { useState } from "react";
import { Divider, Input, Accordion, AccordionItem } from "@nextui-org/react";
import Swal from "sweetalert2";

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
            <Divider/>
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
          <Divider/>

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
      {/*------------------------------Section de Explicación--------------------------------*/}
      <div className="w-full flex justify-center mt-20 mb-20 ">
        <h2 className="text-6xl">Explicación</h2>
      </div>
      <section id="Explicacion" className="grid grid-cols-1 mx-auto w-full">
        <div className="flex justify-center w-full">
          <div className="w-4/6">
          </div>
        </div>
      </section>
      <section>
        <ChatBox />
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            as={NextLink}
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentation
          </Link>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
