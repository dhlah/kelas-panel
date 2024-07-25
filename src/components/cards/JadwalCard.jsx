import React from 'react'
import { TableCell, TableRow } from '../ui/table'

export default function JadwalCard({ data }) {
    return (
        <TableRow>
            <TableCell className="font-medium">{data.jam}</TableCell>
            <TableCell>{data.mapel}</TableCell>
            <TableCell className="text-right">{data.ruangan}</TableCell>
        </TableRow>
    )
}
