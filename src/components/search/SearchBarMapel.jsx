"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SearchBarMapel() {
    const router = useRouter();

    const handleSearch = (e) => {
        router.push(`jadwal?hari=${e}`);
    };

    return (
        <div className='w-full pt-3 px-3'>
            <Select onValueChange={(e) => handleSearch(e)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Pilih Hari" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Hari</SelectLabel>
                        <SelectItem value="senin" >Senin</SelectItem>
                        <SelectItem value="selasa" >Selasa</SelectItem>
                        <SelectItem value="rabu" >Rabu</SelectItem>
                        <SelectItem value="kamis" >Kamis</SelectItem>
                        <SelectItem value="jumat" >Jumat</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
