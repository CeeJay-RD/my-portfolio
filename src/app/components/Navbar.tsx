"use client"
import React, {useState} from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Hamburger from "./Hamburger"

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

    return (
        <header className="m-0 p-0">
            <nav className="justify-between items-center flex pt-15 mx-24 ">
                <div>
                    <h2 className="font-bold text-lg">CA</h2>
                </div>
                <div className="  md:flex md:gap-4 cursor-pointer hidden">
                    
                    {NAV_ITEMS.map((item,idx) => { 
                    return <a className="hover:text-emerald-400  " key={idx}>{item.label}</a>
                    })}
                </div>
                <div className="md:hidden">
                    <Hamburger />
                </div>
            </nav>
        </header>
    )
}

export default Navbar