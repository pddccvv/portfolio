import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      category: "Framework",
      items: [
        {
          name: "Laravel",
          icon: "/assets/ico/ico-laravel.svg",
          description: "PHP framework for web artisans.",
        },
        {
          name: "React JS",
          icon: "/assets/ico/ico-reactjs.svg",
          description: "JavaScript library for UI development.",
        },
        {
          name: "Flask Python",
          icon: "/assets/ico/ico-flask.svg",
          description: "Python microframework for web apps.",
        },
        {
          name: "Bootstrap",
          icon: "/assets/ico/ico-bootstrap.svg",
          description: "CSS framework for responsive design.",
        },
        {
          name: "Tailwind CSS",
          icon: "/assets/ico/ico-tailwind.svg",
          description: "Utility-first CSS framework.",
        },
      ],
    },
    {
      category: "Programming Language",
      items: [
        {
          name: "PHP",
          icon: "/assets/ico/ico-php.svg",
          description: "Server-side scripting language.",
        },
        {
          name: "JavaScript",
          icon: "/assets/ico/ico-javascript.svg",
          description: "Language for interactive web apps.",
        },
        {
          name: "Python",
          icon: "/assets/ico/ico-python.svg",
          description: "Versatile programming language.",
        },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "MySQL",
          icon: "/assets/ico/ico-mysql.svg",
          description: "Relational database management system.",
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        My Skills
      </h1>
      {skills.map((skillCategory) => (
        <div key={skillCategory.category} className="max-w-5xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            {skillCategory.category}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-medium">
            {skillCategory.items.map((item) => (
              <li
                key={item.name}
                className="relative group bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="block text-center">{item.name}</span>
                <p className="absolute inset-0 bg-black bg-opacity-80 text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
