import TugasCard from '@/components/cards/TugasCard'
import SearchBarTugas from '@/components/search/SearchBarTugas'
import { Fetcher } from '@/functions/fetcher'
import React from 'react'

export default async function TugasPage({ searchParams }) {
    const query = searchParams.q ? searchParams.q : ""
    const sort = searchParams.sort ? searchParams.sort : ""
    const tugas = await Fetcher(`/api/tugas?q=${query}&sort=${sort}`, false)

    return (
        <main className='container mx-auto'>
            <h1 className='md:text-xl font-semibold'>Daftar Tugas</h1>
            <p className='text'>Daftar Tugas Sekolah, Udah Ada Ginian Masih Lupa Sih Kebangetan. Udah Kerjain Aja, Jan Manja. </p>
            <div className='mb-3'>
                <SearchBarTugas />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {tugas ? tugas.data.map((tugas, index) => (
                    <div key={index}>
                        <TugasCard data={tugas}/>
                    </div>
                )) : (<h1>Tidak Ada Tugas</h1>)}
            </div>
        </main>
    )
}
