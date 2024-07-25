import Link from 'next/link'
import React from 'react'

export default function HomeButton({ children, notes, href }) {
    return (
        <Link href={href} className='p-4 outline hover:underline outline-1 rounded-lg bg-slate-100 dark:bg-gray-950 :underline outline-gray-900 dark:outline-white'>
            <div className='flex justify-center'>
                {children}
            </div>
            <h3 className='mt-3 text-4xl font-bold text-center'>{notes}</h3>
        </Link>
    )
}
