"use client"
import React, {useState} from "react"
import Link from "next/link"
import { useTheme } from "next-themes"


interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    },
    {
        label: "Contact Me",
        page: "contactme"
    }
]

const Navbar = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6  rounded-full bg-emerald-400 transition ease transform duration-300`;
    const shortHamburgerLine = `h-1 w-3  rounded-full bg-emerald-400 transition ease transform duration-300`;

    return (
      <header className="m-0 p-0 ">
        <nav className="justify-between items-center flex pt-15 mx-6 md:mx-24 ">
          <div>
            <h2 className="font-bold text-lg">CA</h2>
          </div>
          <div className="  md:flex md:gap-4 cursor-pointer hidden">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <a className="hover:text-emerald-400  " key={idx}>
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="md:hidden">
            <button
              className="flex flex-col h-12 w-12 gap-2 rounded justify-center items-end group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${shortHamburgerLine} ${
                  isOpen
                    ? "w-6 -rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </nav>
        <div
          className={` ${
            isOpen
              ? "md:hidden dark:bg-slate-800 border-solid dark:border-slate-700 border-emerald-400 border-2 w-auto h-auto py-6 rounded-3xl flex flex-col justify-center items-center mx-6 gap-5"
              : "hidden"
          }
            `}
        >
          {NAV_ITEMS.map((item, idx) => {
            return (
              <a className="hover:text-emerald-400 transition ease transform duration-300 " key={idx}>
                {item.label}
              </a>
            );
          })}
        </div>
      </header>
    );
}

export default Navbar