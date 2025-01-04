import Link from "next/link";
import Image from "next/image";
const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="Container flex bg-transparent justify-between items-center">
        <div className="px-1 flex items-center">
          <h1 className="text-dark text-lg">Rudiyat</h1>
        </div>
        <ul className="flex space-x-4 p-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/project">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          <Link href="https://github.com/pddccvv">
            <Image
              src="/assets/logo/logo-github.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
