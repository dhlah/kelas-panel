import React from 'react'
import { Badge } from '../ui/badge'
import { convertTimestamp, daysUntilDue } from '@/functions/timestamp'

export default function TugasCard({ data }) {
    const readableTime = convertTimestamp(data.dibuat.seconds, data.dibuat.nanoseconds);

    const daysLeft = daysUntilDue(data.dikumpulkan.seconds, data.dikumpulkan.nanoseconds);

    return (
        <div className='p-3 outline outline-1 outline-gray-200 rounded-md h-30'>
            <div className='flex gap-2'>
                <h4 className='text-lg font-semibold'>{data.mapel}</h4>
                {data.kelompok && (
                    <div className='flex items-end'>
                        <Badge variant="outline">Kelompok</Badge>
                    </div>
                )}
            </div>
            <p>{data.tugas}</p>
            {daysLeft < 7 ? <p className='text-red-500'>{daysLeft} Hari lagi</p> : <p>{daysLeft} Hari lagi</p>}
            <p className='text-xs mt-3'>{readableTime}</p>
        </div>
    )
}
