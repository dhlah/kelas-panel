import HomeButton from "@/components/buttons/HomeButton";
import { BookImage, CalendarDays, ContactRound, ListOrdered, SquareLibrary } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto mt-6 w-full">
        <h2 className="text-xl md:text-2xl font-bold">Kelas Panel</h2>
        <p className="text-sm md:text-base">Sebuah Web Inteaktif Yang Bisa Membantu Para Siswa Untuk Membantu Dalam Sekolahnya. </p>
      </section>
      <section className="container mx-auto mt-6 w-full">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold">Menu</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          <HomeButton notes="Tugas" href="/tugas">
            <SquareLibrary size={50} />
          </HomeButton>
          <HomeButton notes="Guru" href="/guru">
            <ContactRound size={50} />
          </HomeButton>
          <HomeButton notes="Mapel" href="/jadwal">
            <CalendarDays size={50} />
          </HomeButton>
          <HomeButton notes="Galeri" href="/galeri">
            <BookImage size={50} />
          </HomeButton>
          <HomeButton notes="Piket" href="/piket">
            <ListOrdered size={50} />
          </HomeButton>
        </div>
      </section>
    </main>
  );
}
