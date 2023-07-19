"use client"
import React, {useState} from "react"
import Link from "next/link"

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
    return (
        <nav>Hello World</nav>
    )
}

export default Navbar