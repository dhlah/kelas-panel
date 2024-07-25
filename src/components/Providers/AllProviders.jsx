"use client"

import React from 'react'
import { ThemeProvider } from './ThemeProvider'

export default function AllProviders({ children }) {
    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </div>
    )
}
