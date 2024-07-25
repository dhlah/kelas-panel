"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown } from 'lucide-react';

export default function SearchBarTugas() {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('');
    const [invalid, setInvalid] = useState(false);
    const router = useRouter();

    const handleShortBy = (e, sortOption) => {
        e.preventDefault();
        setSort(sortOption);
        if (query.replace(/\s/g, '').length >= 3) {
            router.push(`tugas?q=${query}&sort=${sortOption}`);
        } else {
            router.push(`tugas?sort=${sortOption}`);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setQuery(value);

        if (value.replace(/\s/g, '').length === 0) {
            setInvalid(false);
            return router.push(`tugas${sort ? `?sort=${sort}` : ''}`);
        }

        if (value.replace(/\s/g, '').length < 3) {
            setInvalid(true);
        } else {
            setInvalid(false);
            router.push(`tugas?q=${value}${sort ? `&sort=${sort}` : ''}`);
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
                <DropdownMenu>
                    <DropdownMenuTrigger><ArrowDown className='mx-2' /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={(e) => handleShortBy(e, 'dibuat')}>Dibuat</DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleShortBy(e, 'dikumpulkan')}>Dikumpulkan</DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleShortBy(e, 'nama')}>A - Z</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </form>
            {invalid && (<p className='px-4 text-xs lg:text-sm text-red-500'>Pencarian Minimal 3 Kata</p>)}
        </div>
    )
}
