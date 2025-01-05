import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="Container flex  justify-between items-center">
        <div className="px-1 flex items-center">
          <h1 className="text-red-500 text-lg">Rudiyat</h1>
        </div>
        <ul className="flex space-x-4 p-2">
          <li>
            <Link
              href="/"
              className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/skills"
              className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/pages/experience"
              className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              href="/pages/services"
              className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-red-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
