import SearchBarGuru from '@/components/search/SearchBarGuru'
import React from 'react'

export default function GuruPage() {
  return (
    <main className='container mx-auto'>
      <h1 className='md:text-xl font-semibold'>Daftar Guru</h1>
      <p className='text'>Berikut ini adalah daftar guru yang mengajar di sekolah kami.</p>
      <div className='mb-3'>
        <SearchBarGuru />
      </div>
    </main>
  )
}
