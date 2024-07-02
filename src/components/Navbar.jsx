import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink items-center">
      <span className="font-bold-9 text-4xl bg-gradient-to-r from-red-500 via-slate-1000 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">B<span className="font-bold-9 text-2xl">ee</span></span>
      </div>
      <div className="m-8 flex items-center justify-center text-2xl space-x-4">
      <a href="https://www.linkedin.com/in/binit-bikram-kc-893244259/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/beinit7799" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
        <a href="https://www.instagram.com/20_be_in_it_02/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
