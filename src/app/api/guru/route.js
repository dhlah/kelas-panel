import { searchGuru } from "@/functions/search";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";

    // Panggil fungsi searchGuru dengan parameter query
    const data = searchGuru(q);

    // Jika data tidak ditemukan, kembalikan status 404 dengan pesan gagal
    if (!data || data.length === 0) {
        return NextResponse.json(
            {
                status: "FAILED",
                message: "Data Tidak Ditemukan",
            },
            { status: 404 }
        );
    }

    // Kembalikan data ditemukan
    return NextResponse.json({
        status: "OK",
        message: "Data Berhasil Diambil",
        data,
    });
}
