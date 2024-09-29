import { Github, Linkedin, Mail } from "lucide-react"
import data from "./project";
import Link from "next/link";
let project = data()
project = project.project
export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section className="py-20 px-4 w-full text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Selamat Datang di Portofolio Saya</h1>
        <p className="mt-5 text-base max-w-[80%]">Pengembang Web Kreatif, Pengembang Bot & Inovatif</p>
      </section>
      <section className="py-20 px-4 bg-gradient-to-l from-transparent via-slate-500/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 text-center">Tentang Saya</h2>
          <div className="flex w-full flex-wrap-reverse justify-center items-center gap-10">
            <div className="flex-1 min-w-[290px] min-[726px]:mr-10">
              <p className="text-lg mb-4">
                Perkenalkan nama saya Ivantheo Rizky Putra. Saya lulusan SMK Umar Fatah Rembang. Saya adalah lulusab baru di tahun 2024. Saya memiliki minat di bidang pemograman. Disekolah, saya saya diajarkan html, php, mysql crud pakai php, dan css dasar saja. Selebihnyaa saya mempelajarinya sendiri.
              </p>
              <p className="text-lg mb-4">
                Saya adalah seorang pengembang web dan bot yang bersemangat dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan keahlian dalam React, Next.js, dan teknologi web modern lainnya, saya selalu berusaha untuk menghadirkan solusi inovatif untuk setiap proyek.
              </p>
              <p className="text-lg">
                Saya suka mempelajari hal-hal baru. Ketika saya gabut saya suka mengotak-atik bot saya agar menjadi lebih bagus. Saya pantang menyerah kalau ada eror pada kode yaang saya buat saya akan berusaha untuk memperbaikinya sampai kode tersebut bisa berjalan dengan baik.
              </p>
            </div>
            <div className="mb-20 min-[686px]:mb-0 bg-transparent backdrop-blur-xl border dark:border-slate-100 border-slate-900">
              <img className="" src="/pp.png" width={`300px`} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-l from-transparent via-stone-500/20 to-transparent">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Saya</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {project.map((a, index) =>
            <Link className="group" href={a.url} key={index + `projext`} target="_blank">
              <div className="p-5 max-w-[300px] border-2 dark:border-white border-black hover:border-slate-800 hover:dark:border-slate-300 backdrop-blur-xl">
                <div className="flex w-full flex-row items-center justify-center mb-16">
                  <h1 className="text-xl font-bold text-center">{a.title}</h1>
                  <span className="ml-2 opacity-0 w-0 group-hover:w-auto group-hover:opacity-100">➡️</span>
                </div>
                <p className="text-base">{a.deskripsi}</p>
              </div>
            </Link>
          )}
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-l from-transparent via-slate-500/20 to-transparent">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Hubungi Saya</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Link className="dark:bg-gray-800 shadow-inner dark:shadow-gray-600 bg-gray-500 hover:opacity-90 backdrop-blur-xl shadow-gray-300 px-5 py-4 min-w-[300px] text-center rounded-xl " href={`https://wa.me/6285809011357`}>Whatsapp</Link>
          <Link className="dark:bg-gray-800 shadow-inner dark:shadow-gray-600 bg-gray-500 hover:opacity-90 backdrop-blur-xl shadow-gray-300 px-5 py-4 min-w-[300px] text-center rounded-xl " href={`mailto:ivantheo159@gmail.com`}>Gmail</Link>
        </div>
      </section>
    </main>
  );
}
