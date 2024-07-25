"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";

export default function SearchBarGuru() {
    const [query, setQuery] = useState('');
    const [invalid, setInvalid] = useState(false);
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault()
        const value = e.target.value;
        setQuery(value);

        if (value.replace(/\s/g, '').length === 0) {
            setInvalid(false);
            return router.push(`guru`);
        }

        if (value.replace(/\s/g, '').length < 3) {
            setInvalid(true);
        } else {
            setInvalid(false);
            router.push(`guru?q=${value}`);
        }
    };

    return (
        <div className='w-full pt-3 px-3'>
            <form className={`flex justify-center px-3 py-2 outline ${invalid ? 'outline-red-500' : 'outline-none'} rounded-md bg-slate-600`}>
                <input
                    className='bg-transparent w-full outline-none'
                    onChange={handleSearch}
                    value={query}
                />
                <IoMdSearch size={27} className='flex items-center' />
            </form>
            {invalid && (<p className='px-4 text-xs lg:text-sm text-red-500'>Pencarian Minimal 3 Kata</p>)}
        </div>
    )
}
