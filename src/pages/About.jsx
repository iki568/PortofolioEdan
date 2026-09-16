import { useState } from "react";

function About() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section
      className={`about ${isActive ? "about--visible" : "about--hidden"}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <img
        src="/image/profile.jpeg"
        alt="Foto Profil"
        className={`profile-photo ${isActive ? "profile-photo--visible" : ""}`}
      />

      <div className="about-info">
        <h2>Tentang Saya</h2>
        <p>Nama: Rizky Pratama</p>
        <p>Sekolah: SMK PusdihHubad</p>
        <p>Kompetensi Keahlian: Rekayasa Perangkat Lunak</p>
        <p>
          Saya tertarik pada pengembangan web front-end dan sedang belajar
          React.js untuk membangun aplikasi yang interaktif.
        </p>
      </div>
    </section>
  );
}

export default About;