import JadwalCard from '@/components/cards/JadwalCard'
import { Fetcher } from '@/functions/fetcher'
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SearchBarMapel from '@/components/search/SearchBarMapel'

export default async function JadwalPage({ searchParams }) {
  const hari = searchParams.hari ? searchParams.hari : ""
  const jadwal = await Fetcher(`/api/jadwal?hari=${hari}`, false)

  return (
    <main className='container mx-auto'>
      <h1 className='md:text-xl font-semibold'>Jadwal Pelajaran</h1>
      <p className='text'>Daftar Pelajaran, Udah Ada Ginian Masih Lupa Sih Kebangetan. Udah Bawa Semua Dah, Jan Manja. </p>
      <SearchBarMapel />
      <div className='mt-3'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Jam</TableHead>
              <TableHead>Mapel</TableHead>
              <TableHead>Guru</TableHead>
              <TableHead className="text-right">Ruangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jadwal?.data ? jadwal.data[0].data.map((jadwalItem, index) => (
              <JadwalCard data={jadwalItem} key={index} />
            )) : (
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="text-center">Tidak Ada Jadwal Pembelajaran</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
