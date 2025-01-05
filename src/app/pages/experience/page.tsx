export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Balai Besar POM Pontianak",
      duration: "November 2023 - Februari 2024",
      description:
        "Mengembangkan sistem manajemen peminjaman sarana dan prasarana dengan Laravel 10. Fitur utama meliputi manajemen inventaris, pelacakan peminjaman, dan pengembalian aset secara efisien.",
    },
    {
      title: "Full-Stack Developer",
      company: "Balai Besar POM Pontianak",
      duration: "Juni 2024 - Juli 2024",
      description:
        "Merancang dan mengimplementasikan Sistem Antrean dan Manajemen Buku Antrian berbasis pengenalan wajah. Proyek menggunakan React JS untuk frontend interaktif dan Flask untuk backend yang efisien.",
    },
    {
      title: "Full-Stack Developer",
      company: "SMK Negeri 1 Balai - Batang Tarang (Sanggau), Kalimantan Barat",
      duration: "1 Bulan",
      description:
        "Membangun website informasi sekolah menggunakan Laravel 10 untuk menyampaikan informasi akademik dan kegiatan sekolah secara efektif kepada siswa, guru, dan orang tua.",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        Experience
      </h1>
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="relative group bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold">{experience.title}</h2>
                  <p className="text-sm text-gray-300">{experience.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{experience.duration}</p>
              <p className="mt-4 text-gray-200 group-hover:text-white transition-colors duration-300">
                {experience.description}
              </p>
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-sm px-6 text-center">
                  Click for more details (functionality coming soon).
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
