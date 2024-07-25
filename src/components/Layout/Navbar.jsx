"use client"

import React from 'react'
import { BookText, CalendarRange, ContactRound, Home, Images, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

export default function Navbar({ children }) {
    return (
        <div>
            <nav className='m-3 flex justify-around'>
                <div className='md:flex hidden items-center justify-center'>
                    <Link href="/">
                        <h1>Kelas XI TM 2</h1>
                    </Link>
                </div>
                <div className='md:flex hidden gap-3 items-center justify-center'>
                    <Link href="/">
                        <Home className='hover:underline' />
                    </Link>
                    <Link href="/tugas">
                        <BookText />
                    </Link>
                    <Link href="/guru">
                        <ContactRound />
                    </Link>
                    <Link href="/jadwal">
                        <CalendarRange />
                    </Link>
                    <Link href="/galeri">
                        <Images />
                    </Link>
                </div>
                <div className='flex gap-3 items-center justify-center'>
                    <ModeToggle />
                </div>
            </nav>
            <div className='m-3'>
                {children}
            </div>
        </div>
    )
}

function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}