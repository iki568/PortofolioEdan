import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Website Portofolio Pribadi",
    desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulir kontak.",
    image: `${import.meta.env.VITE_BASE_URL}/image/portofolio.png`,
    tech: ["React", "React Router", "CSS"],
    githubUrl: "https://github.com/iki568/Portofolio-WTS.git",
  },
  {
    id: 2,
    title: "Aplikasi Catatan Sederhana",
    desc: "Aplikasi pencatat tugas harian dengan penyimpanan lokal.",
    image: `${import.meta.env.VITE_BASE_URL}/image/catatan.png`,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/iki568/Aplikasi-Catatan-Harian-Sederhana.git",
    demoUrl: "https://catatan-harian-sederhana.netlify.app/",
  },
  {
    id: 3,
    title: "Website Keluhan dan Keuangan",
    desc: "Aplikasi Pencatatan atau Menerima keluhan dan Keuangan basis web",
    image: `${import.meta.env.VITE_BASE_URL}/image/laporan.png`,
    tech: ["HTML 5", "CSS", "JS"],
    githubUrl: "https://github.com/iki568/Sistem-Keluhan-dan-Keuangan.git",
    demoUrl: "https://laporan-keluhan-dan-keuangan.netlify.app/",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;