import { readData } from "@/functions/database";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || null;
  const sort = searchParams.get("sort") || null;

  const data = await readData("tugas", q, sort);
  if (data.status != "OK") {
    return NextResponse.json(
      {
        status: "FAILED",
        message: "Ada Masalah Saat Mengambil Data",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    status: "OK",
    message: "Data Berhasil Diambil",
    data: data.data,
  });
}
