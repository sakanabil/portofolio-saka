import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  PenTool,
  Layout,
  Award,
  FileText,
  Database,
  Smartphone,
  X,
} from "lucide-react";

// Komponen khusus untuk Ikon Github & Linkedin
const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Komponen Ikon WhatsApp
const WhatsappIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

// Komponen Ikon Gmail (Logo M)
const GmailIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

// Komponen Ikon Kaggle
const KaggleIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.089-1.448 1.474v4.643c0 .148-.059.223-.176.223H5.43c-.117 0-.175-.075-.175-.223V.141c0-.118.058-.176.175-.176h2.68c.117 0 .176.058.176.176v15.34l7.241-7.551c.141-.141.305-.211.492-.211h3.256c.164 0 .258.047.281.141.023.094-.012.164-.105.211l-5.61 5.75 6.068 7.148c.094.047.129.117.106.211z" />
  </svg>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Deteksi scroll untuk efek Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Effect untuk mengunci scroll body saat pop-up terbuka
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  // Fungsi untuk membuka gambar di pop-up
  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Fungsi untuk menutup pop-up
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* --- MULAI UI POP-UP GAMBAR --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-sky-400 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all"
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Sertifikat"
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      {/* Navigation (Liquid Glass Effect) */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(14,165,233,0.06)] py-3" : "bg-transparent py-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold tracking-tighter text-slate-900 hover:opacity-70 transition-opacity cursor-pointer"
          >
            SAKA.
          </button>
          <div className="hidden md:flex items-center space-x-2">
            {["Tentang", "Pengalaman", "Proyek", "Sertifikat"].map(
              (item, index) => {
                const id = ["about", "experience", "projects", "certificates"][
                  index
                ];

                // Active State Liquid Glass Logic
                const isActive = activeSection === id;

                return (
                  <button
                    key={item}
                    onClick={() => scrollTo(id)}
                    className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-semibold tracking-wide
                      ${
                        isActive
                          ? "bg-white/60 backdrop-blur-lg border border-white text-slate-900 shadow-[0_4px_15px_rgba(59,130,246,0.12)]"
                          : "text-slate-600 hover:bg-white/50 hover:text-slate-900 hover:shadow-sm border border-transparent"
                      }`}
                  >
                    {item}
                  </button>
                );
              },
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 px-6 min-h-[95vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-white"
      >
        {/* Dekorasi Background - Blue Glow Effect (Z-0 agar terlihat di atas background color) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-sky-400/40 rounded-full blur-[90px]"></div>
          <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px]"></div>
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-indigo-400/30 rounded-full blur-[90px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-8 px-5 py-2 bg-white/60 backdrop-blur-lg text-slate-700 rounded-full text-sm font-semibold tracking-wider uppercase border border-white shadow-[0_4px_20px_rgba(14,165,233,0.05)]">
            Mahasiswa Semester 6 • Polinema
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            Saka Nabil
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Front-End Developer <span className="text-slate-300 mx-2">|</span>{" "}
            UI/UX Designer <span className="text-slate-300 mx-2">|</span> Data
            Science Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-14">
            <a
              href="mailto:sakanabil1221@gmail.com"
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 font-semibold shadow-lg shadow-slate-900/20 hover:-translate-y-1"
            >
              <Mail size={18} /> Hubungi Saya
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 bg-white/70 backdrop-blur-md text-slate-800 border border-white px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-semibold shadow-[0_4px_20px_rgba(14,165,233,0.08)] hover:-translate-y-1"
            >
              <Code2 size={18} /> Lihat Proyek
            </button>
          </div>

          <div className="flex justify-center gap-6 text-slate-400">
            <a
              href="https://wa.me/6287846242745"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <WhatsappIcon size={26} />
            </a>
            <a
              href="mailto:sakanabil1221@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <GmailIcon size={26} />
            </a>
            <a
              href="https://github.com/sakanabil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <GithubIcon size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/saka-nabil-a2b56538a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <LinkedinIcon size={26} />
            </a>
            <a
              href="https://www.kaggle.com/sakanabil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <KaggleIcon size={26} />
            </a>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section
        id="about"
        className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white"
      >
        {/* Background Shapes for Glass Effect */}
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-sky-300/30 rounded-full blur-[100px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-300/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-3xl border border-white shadow-[0_8px_32px_rgba(14,165,233,0.04)] rounded-[2.5rem] p-8 md:p-14 grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3 text-slate-900">
              <FileText className="text-blue-500" /> Profil Singkat
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Saya adalah Mahasiswa semester 6 program D-IV Teknik Informatika
              di Politeknik Negeri Malang. Saya memiliki ketertarikan mendalam
              dan fokus pada{" "}
              <strong className="text-slate-900">Front-End Development</strong>,{" "}
              <strong className="text-slate-900">UI/UX Design</strong>, serta{" "}
              <strong className="text-slate-900">Data Science</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Kreatif, berorientasi pada detail, dan selalu mengutamakan
              pengalaman pengguna. Saat ini saya mencari kesempatan magang untuk
              menerapkan dan mengembangkan keterampilan profesional saya di
              dunia industri kreatif maupun teknologi.
            </p>
            <div className="space-y-4 text-slate-800 font-medium bg-white/60 backdrop-blur-md rounded-3xl p-7 border border-white shadow-[0_4px_20px_rgba(14,165,233,0.03)]">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-blue-500" /> +62-878-4624-2745
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-blue-500" />{" "}
                sakanabil1221@gmail.com
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} className="text-blue-500" /> Malang, Indonesia
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3 text-slate-900">
              <Layout className="text-blue-500" /> Kemampuan & Teknologi
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Kemampuan Utama
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Front-End Development",
                    "Web App Development",
                    "Data Science",
                    "UI/UX Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-white/80 backdrop-blur-md text-slate-800 rounded-xl text-sm font-bold border border-white shadow-[0_2px_10px_rgba(14,165,233,0.04)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Tools & Bahasa
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-[0_4px_20px_rgba(14,165,233,0.03)] hover:bg-white transition-colors duration-300 group">
                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                      <PenTool
                        size={18}
                        className="text-sky-500 group-hover:text-blue-600 transition-colors"
                      />{" "}
                      Desain
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      Figma, Canva, CorelDraw, Photoshop
                    </p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-[0_4px_20px_rgba(14,165,233,0.03)] hover:bg-white transition-colors duration-300 group">
                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                      <Code2
                        size={18}
                        className="text-sky-500 group-hover:text-blue-600 transition-colors"
                      />{" "}
                      Front-End & Mobile
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      HTML, CSS, JavaScript, Bootstrap, React, Next.js, Tailwind
                      CSS
                    </p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-[0_4px_20px_rgba(14,165,233,0.03)] hover:bg-white transition-colors duration-300 group">
                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                      <Database
                        size={18}
                        className="text-sky-500 group-hover:text-blue-600 transition-colors"
                      />{" "}
                      Back-End & Data
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      PHP, Laravel, Python
                    </p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white shadow-[0_4px_20px_rgba(14,165,233,0.03)] hover:bg-white transition-colors duration-300 group">
                    <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                      <Smartphone
                        size={18}
                        className="text-sky-500 group-hover:text-blue-600 transition-colors"
                      />{" "}
                      Mobile
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      Dart, Flutter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section
        id="experience"
        className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-white via-sky-50/50 to-white"
      >
        {/* Background Shapes for Glass Effect */}
        <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-300/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Pendidikan */}
            <div className="bg-white/60 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgba(14,165,233,0.03)]">
              <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-3 text-slate-900">
                <GraduationCap className="text-blue-500" /> Pendidikan
              </h2>
              <div className="relative border-l-2 border-sky-200/60 pl-8 ml-3 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-white border-4 border-blue-600 w-5 h-5 rounded-full mt-1 shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                  <span className="text-xs font-bold text-blue-700 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white shadow-sm uppercase tracking-wider">
                    2023 - Sekarang
                  </span>
                  <h3 className="text-xl font-bold mt-5 text-slate-900">
                    D-IV Teknik Informatika
                  </h3>
                  <p className="text-slate-700 font-semibold mt-1">
                    Politeknik Negeri Malang
                  </p>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium">
                    Saat ini menempuh pendidikan di semester 6 dengan minat
                    utama pada front-end development, ui/ux design, dan data
                    science.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-slate-50 border-4 border-sky-300 w-5 h-5 rounded-full mt-1"></div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    2020 - 2023
                  </span>
                  <h3 className="text-xl font-bold mt-3 text-slate-700">
                    Jurusan Multimedia
                  </h3>
                  <p className="text-slate-500 font-medium">
                    SMK Negeri 1 Selong
                  </p>
                </div>
              </div>
            </div>

            {/* Pengalaman */}
            <div className="bg-white/60 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white shadow-[0_8px_30px_rgba(14,165,233,0.03)]">
              <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-3 text-slate-900">
                <Briefcase className="text-blue-500" /> Pengalaman
              </h2>
              <div className="relative border-l-2 border-sky-200/60 pl-8 ml-3">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-white border-4 border-blue-600 w-5 h-5 rounded-full mt-1 shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                  <span className="text-xs font-bold text-blue-700 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white shadow-sm uppercase tracking-wider">
                    Jun 2022 - Sep 2022
                  </span>
                  <h3 className="text-xl font-bold mt-5 text-slate-900">
                    Praktik Kerja Lapangan
                  </h3>
                  <h3 className="text-l font-bold mt-1 text-slate-900">
                    SMK Negeri 1 Selong
                  </h3>
                  <p className="text-slate-700 font-semibold mt-1 mb-4">
                    Selaparang TV
                  </p>
                  <ul className="text-slate-500 text-sm space-y-3 list-disc ml-4 leading-relaxed font-medium">
                    <li>
                      Membantu persiapan alat produksi dan siaran dalam acara
                      MTQ XXIX Tingkat Provinsi NTB 2022.
                    </li>
                    <li>
                      Mendukung kegiatan penyiaran harian, termasuk pengaturan
                      kamera dan peralatan audio-visual.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-sky-50/40"
      >
        {/* Background Shapes for Glass Effect */}
        <div className="absolute top-[5%] left-[20%] w-[30vw] h-[30vw] bg-indigo-300/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
        <div className="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] bg-sky-300/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[35vw] h-[35vw] bg-blue-300/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-center text-slate-900">
            Portofolio Proyek
          </h2>
          <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto font-medium">
            Beberapa karya dan proyek yang telah saya kembangkan selama masa
            kuliah dan kompetisi.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyek Kuliah SMT 6 */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/taptoll.jpg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Kuliah
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  TapToll
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Sistem Monitoring dan Manajemen Tol berbasis Internet of
                    Things (IoT) untuk memantau kondisi jalan tol secara
                    real-time dan memberikan informasi kepada pengguna melalui
                    hasil analisis data yang telah di olah menggunakan big data
                    hadoop.
                  </p>
                  <a
                    href="https://github.com/sirfara12/SISTEM-MONITORING-PALANG-TOL-" // <-- MASUKKAN LINK GITHUB DI SINI
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-slate-700 text-xs font-bold rounded-xl shadow-[0_2px_10px_rgba(14,165,233,0.05)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-300 w-max"
                  >
                    <GithubIcon size={16} />
                    Repository
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Web App
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Next.js
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    IoT
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Cloud Computing
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Big Data
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Hadoop
                  </span>
                </div>
              </div>
            </div>

            {/* Kuliah TerasWarga */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/teraswarga.png')" }} // <-- NAMA GAMBAR
              >
                {/* Overlay Hitam Transparan */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Kuliah
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  TerasWarga
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed font-medium">
                    Aplikasi Mobile Kependudukan Lingkungan dengan implementasi
                    marketplace terintegrasi Machine Learning untuk identifikasi
                    keutuhan sayuran.
                  </p>

                  {/* --- TOMBOL GITHUB DITAMBAHKAN DI SINI --- */}
                  <a
                    href="https://github.com/Raudhil/PBL_KEL6" // <-- MASUKKAN LINK GITHUB DI SINI
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-slate-700 text-xs font-bold rounded-xl shadow-[0_2px_10px_rgba(14,165,233,0.05)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-300 w-max"
                  >
                    <GithubIcon size={16} />
                    Repository
                  </a>
                  {/* ----------------------------------------- */}
                </div>
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Mobile App
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Flutter
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Dart
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Machine Learning
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Computer Vision
                  </span>
                </div>
              </div>
            </div>

            {/* Kuliah SIGMA */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/sigma.png')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Kuliah
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  SIGMA
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Sistem Rekomendasi Magang Mahasiswa. Membantu mahasiswa
                    menemukan tempat magang yang relevan dengan minat dan
                    kemampuan menggunakan Sistem Pembantu Keputusan (SPK).
                  </p>

                  <a
                    href="https://github.com/tjahjoe/SIGMA-Cihuy-Sistem-Rekomendasi-Magang" // <-- MASUKKAN LINK GITHUB DI SINI
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-slate-700 text-xs font-bold rounded-xl shadow-[0_2px_10px_rgba(14,165,233,0.05)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-300 w-max"
                  >
                    <GithubIcon size={16} />
                    Repository
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Web App
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Laravel
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Bootstrap
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Decision Support System
                  </span>
                </div>
              </div>
            </div>

            {/* Kuliah Lainnya (TAAT) */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/taat.png')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Kuliah
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  TAAT
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Sistem TAAT bertujuan untuk mengembangkan Sistem Manajemen
                    Tata Tertib Mahasiswa yang dapat mendukung pengelolaan data
                    pelanggaran dan sanksi secara terstruktur dan terintegrasi.
                  </p>

                  <a
                    href="https://github.com/satriowisnuap/proyek-Tata-Tertib/tree/oop" // <-- MASUKKAN LINK GITHUB DI SINI
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-slate-700 text-xs font-bold rounded-xl shadow-[0_2px_10px_rgba(14,165,233,0.05)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-300 w-max"
                  >
                    <GithubIcon size={16} />
                    Repository
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Web App
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Laravel
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Kuliah Room Booking */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/Peminjaman.jpg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Kuliah
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  Room Booking
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Desain UI/UX Sistem Peminjaman Ruangan universitas untuk
                    mempermudah manajemen dan pemesanan ruangan.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    UI/UX
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Figma
                  </span>
                </div>
              </div>
            </div>

            {/* Kuliah Lainnya (CLI) */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/cli.jpeg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Kuliah
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  Sistem Akademik CLI
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Sistem Akademik berbasis command line adalah platform yang
                    memungkinkan pengguna, seperti siswa, dosen, dan admin,
                    untuk mengakses dan mengelola informasi akademik mereka
                    melalui perintah teks.
                  </p>

                  <a
                    href="https://github.com/AbdillahNS/Sistem-Akademik" // <-- MASUKKAN LINK GITHUB DI SINI
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white text-slate-700 text-xs font-bold rounded-xl shadow-[0_2px_10px_rgba(14,165,233,0.05)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-300 w-max"
                  >
                    <GithubIcon size={16} />
                    Repository
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Java
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Backend
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    CLI
                  </span>
                </div>
              </div>
            </div>

            {/* Lomba UI/UX */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* --- BAGIAN GAMBAR HEADER --- */}
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/GreenTrack.jpg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>

                {/* Tag & Judul */}
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Lomba
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  Green Track
                </h3>
              </div>
              {/* --- AKHIR BAGIAN GAMBAR HEADER --- */}

              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Desain UI/UX untuk Aplikasi Carbon Footprint Tracker.
                    Berfokus pada antarmuka yang ramah pengguna untuk melacak
                    jejak karbon.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    UI/UX
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Figma
                  </span>
                </div>
              </div>
            </div>

            {/* Kuliah Lomba poster */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/poster.jpeg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Lomba
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  Poster Infografis
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Poster Infografis dengan Tema “Revitalisasi Pertanian:
                    Menuju Hasil Lebih Baik dengan Teknologi Terbaru”
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Figma
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    CorelDraw
                  </span>
                </div>
              </div>
            </div>

            {/* Lomba Data Science */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/DAC.png')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Lomba
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  DAC Find IT! 2026
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Data Analytics Competition (DAC). Mengembangkan model
                    pendeteksi manipulasi wajah (Face Spooning/Spoofing
                    Detection) menggunakan teknik Data Science.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Data Science
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* Lomba Data Science */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/gammafest.png')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Lomba
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  Gammafest 2026
                </h3>
              </div>
              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Data Science Competition (DSC). Mengembangkan model prediksi
                    score sepak bola menggunakan teknik Data Science dan Machine
                    Learning.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Data Science
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* Smart Toll */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* --- BAGIAN GAMBAR HEADER --- */}
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/toll.jpg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>

                {/* Tag & Judul */}
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Personal
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  TapToll Mobile
                </h3>
              </div>
              {/* --- AKHIR BAGIAN GAMBAR HEADER --- */}

              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Desain UI/UX mobile adaptasi dari aplikasi web TapToll
                    (Proyek Kuliah) untuk monitoring dan manajemen sistem tol
                    secara real-time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    UI/UX
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Figma
                  </span>
                </div>
              </div>
            </div>

            {/* Lomba UI/UX INFEST */}
            <div className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_8px_30px_rgba(14,165,233,0.05)] hover:shadow-[0_15px_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* --- BAGIAN GAMBAR HEADER --- */}
              <div
                className="h-48 p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/infest.jpg')" }} // <-- MASUKKAN NAMA GAMBAR DI SINI
              >
                {/* Overlay Hitam Transparan (Wajib agar teks terbaca di atas gambar) */}
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-all duration-300 z-0"></div>

                {/* Efek Cahaya / Glowing Orbs (Bisa dipertahankan atau dihapus) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl -mr-5 -mt-5 z-0 pointer-events-none"></div>

                {/* Tag & Judul */}
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-3 w-max border border-white/20 relative z-10">
                  Proyek Lomba
                </span>
                <h3 className="text-2xl font-bold text-white relative z-10 drop-shadow-md">
                  Edumate AI
                </h3>
              </div>
              {/* --- AKHIR BAGIAN GAMBAR HEADER --- */}

              <div className="p-7 grow flex flex-col justify-between bg-white/50">
                <div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                    Merancang UI/UX aplikasi mobile EduMate AI dengan integrasi
                    AI untuk menghadirkan pengalaman belajar yang adaptif,
                    personal, dan berpusat pada kebutuhan mahasiswa.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-sky-100">
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    UI/UX
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-white/80 backdrop-blur-sm border border-white px-3 py-1.5 rounded-lg shadow-[0_2px_10px_rgba(14,165,233,0.04)]">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section (Deep Oceanic Dark Mode) */}
      <section
        id="certificates"
        className="py-24 bg-slate-950 text-white px-6 relative overflow-hidden"
      >
        {/* Dark Mode Background Decors - Oceanic Vibe */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-800/30 rounded-full blur-[120px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3 mb-4 text-white">
              <Award className="text-sky-400" size={36} /> Sertifikat &
              Penghargaan
            </h2>
            <p className="text-slate-400 font-medium text-lg">
              Pencapaian dan validasi atas kemampuan yang telah dipelajari.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Template Sertifikat 1 */}
            <div
              onClick={() => openImageModal("/4c.png")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/4c.png')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  4C National Competition
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Finalist (Poster Infografis) / Tahun 2023
                </p>
              </div>
            </div>

            {/* Template Sertifikat 2 */}
            <div
              onClick={() => openImageModal("/uxvidia.png")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/uxvidia.png')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  Arkavidia 9.0
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Participant (UXvidia) / Tahun 2025
                </p>
              </div>
            </div>

            <div
              onClick={() => openImageModal("/jdd.png")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/jdd.png')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  Jatim Developer Day
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Participant / Tahun 2024
                </p>
              </div>
            </div>

            {/* Template Sertifikat 3 */}
            <div
              onClick={() => openImageModal("/fest.png")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/fest.png')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  Future Entrepreneur Summit
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Participant / Tahun 2024
                </p>
              </div>
            </div>

            <div
              onClick={() => openImageModal("/findit.png")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/findit.png')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  Find IT! 2026
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Participant (Data Analytics Competition) / Tahun 2026
                </p>
              </div>
            </div>

            <div
              onClick={() => openImageModal("/gamma.png")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/gamma.png')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  Gammafest 2026
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Participant (Data Science Competition) / Tahun 2026
                </p>
              </div>
            </div>

            <div
              onClick={() => openImageModal("/IN-FEST26.jpg")} // <-- Panggil fungsi modal dan masukkan path gambar
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300 group cursor-pointer"
            >
              <div
                className="aspect-[4/3] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 overflow-hidden relative border border-white/5 bg-cover bg-center"
                style={{ backgroundImage: "url('/IN-FEST26.jpg')" }} // <-- Tampilkan gambar sebagai background card
              >
                {/* Efek Hover memunculkan tombol "Lihat Gambar" */}
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-sky-400">
                    Lihat Gambar
                  </span>
                </div>
              </div>
              <div className="px-3 pb-2">
                <h3 className="font-bold text-xl mb-1 truncate text-white group-hover:text-sky-300 transition-colors">
                  IN-FEST 2026
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  2nd Place Winner (UI/UX Competition) / Tahun 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Glass Effect) */}
      <footer className="bg-white/80 backdrop-blur-2xl border-t border-sky-100/50 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-extrabold tracking-tighter mb-8 text-slate-900">
            SAKA.
          </h2>
          <div className="flex gap-4 mb-8">
            <a
              href="https://wa.me/6287846242745"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white shadow-[0_4px_15px_rgba(14,165,233,0.08)] hover:-translate-y-1"
            >
              <WhatsappIcon size={24} />
            </a>
            <a
              href="mailto:sakanabil1221@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white shadow-[0_4px_15px_rgba(14,165,233,0.08)] hover:-translate-y-1"
            >
              <GmailIcon size={24} />
            </a>
            <a
              href="https://github.com/sakanabil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white shadow-[0_4px_15px_rgba(14,165,233,0.08)] hover:-translate-y-1"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/saka-nabil-a2b56538a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white shadow-[0_4px_15px_rgba(14,165,233,0.08)] hover:-translate-y-1"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://www.kaggle.com/sakanabil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white shadow-[0_4px_15px_rgba(14,165,233,0.08)] hover:-translate-y-1"
            >
              <KaggleIcon size={24} />
            </a>
          </div>
          <p className="text-sm text-slate-500 font-semibold tracking-wide">
            &copy; {new Date().getFullYear()} Saka Nabil.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
