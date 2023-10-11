import {
  Button,
  Kbd,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Switch,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
} from "@/components/icons";

export const Navbar = () => {
  const onClick = () => {
    console.log("onClick");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img src="img/LOGO.png" className="h-11 mr-3" alt="Flowbite Logo" />
            <p className=" text-inherit">Iresm</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <div className="hidden lg:block">
          <ul className="flex space-x-4 ">
            <li>
              <Link href="#inicio">
                <h2 className=" text-white">Inicio</h2>
              </Link>
            </li>
            <li>
              <Link href="#chat">
                <h2 className=" text-white">Chat</h2>
              </Link>
            </li>
            <li>
              <Link href="#Matematicos">
                <h2 className=" text-white">Matematicos</h2>
              </Link>
            </li>
            <li>
              <Link href="https://divgeeks-ccqalgxj0-divgeeks.vercel.app/contacto/contacto">
                <h2 className=" text-white">Contacto</h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className="block  xl:hidden 2xl:hidden">
          <Dropdown>
            <DropdownTrigger>
              <button className="border text-white rounded-full p-2">
                Open Menu
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              <DropdownItem key={"Inicio"}>
                <Link href="#inicio">
                  <h2 className=" text-white">Inicio</h2>
                </Link>
              </DropdownItem>
              <DropdownItem key={"Explicación"}>
                <Link href="#Explicacion">
                  <h2 className=" text-white">Explicación</h2>
                </Link>
              </DropdownItem>
              <DropdownItem key={"Matematicos"}>
                <Link href="#Matematicos">
                  <h2 className=" text-white">Matematicos</h2>
                </Link>
              </DropdownItem>
              <DropdownItem key={"Chat"}>
                <Link href="#chat">
                  <h2 className=" text-white">Chat</h2>
                </Link>
              </DropdownItem>
              <DropdownItem key={"Contacto"}>
                <Link href="https://divgeeks-ccqalgxj0-divgeeks.vercel.app/contacto/contacto">
                  <h2 className=" text-white">Contacto</h2>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};
