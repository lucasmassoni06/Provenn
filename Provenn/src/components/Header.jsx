import { useState } from "react";
import LogoVermelha from "../assets/LogoVermelha.png";
import LogoAmarelo from "../assets/LogoAmarelo.png";
import { Moon, Sun, Menu as MenuIcon, X } from "lucide-react";

function Header({ darkMode, setDarkMode }) {
const [open, setOpen] = useState(false);

return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#E4B34B]/30 border-b dark:border-[#E4B34B]/30 transition-colors">
        <nav className="w-full flex items-center justify-between px-6 sm:px-10 h-30">
            <div className="flex items-center gap-3">
                <img
                    src={darkMode ? LogoAmarelo : LogoVermelha}
                    alt="Logo Provenn"
                    className={`h-12 sm:h-14 transition-all`} />
                <a
                    href="#"
                    className="font-bold text-3xl sm:text-4xl font-[Josefin_Sans] dark:text-white">
                    <span className="text-[#700422] dark:text-[#E4B34B]">P</span>rovenn
                </a>
            </div>
            <ul className="hidden md:flex items-center gap-8 text-base dark:text-white ml-auto">
                <li><a href="#about" className="hover:text-[#700422] dark:hover:text-[#E4B34B]">Sobre</a></li>
                <li><a href="#differences" className="hover:text-[#700422] dark:hover:text-[#E4B34B]">Diferenciais</a></li>
                <li><a href="#professional" className="hover:text-[#700422] dark:hover:text-[#E4B34B]">Candidatos</a></li>
                <li><a href="#plans" className="hover:text-[#700422] dark:hover:text-[#E4B34B]">Planos</a></li>
                <li><a href="#contact" className="hover:text-[#700422] dark:hover:text-[#E4B34B]">Login</a></li>
                <li>
                    <button className="bg-[#700422] text-[#E4B34B] dark:bg-[#E4B34B] dark:text-[#700422] rounded-md h-10 px-4 font-medium hover:opacity-90 transition">
                    Cadastrar
                    </button>
                </li>
                <li>
                    <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-[#700422] dark:bg-[#E4B34B] text-[#E4B34B] dark:text-[#700422] rounded-md h-10 w-10 flex items-center justify-center transition-all duration-300">
                    {darkMode ? <Sun /> : <Moon />}
                    </button>
                </li>
            </ul>

            <div className="flex md:hidden items-center gap-3">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-[#700422] dark:bg-[#E4B34B] text-[#E4B34B] dark:text-[#700422] rounded-md h-9 w-9 flex items-center justify-center transition-all">
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-[#700422] dark:text-[#E4B34B]">
                    {open ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>
        </nav>

        {open && (
            <div className="md:hidden bg-[#E4B34B]/90 dark:bg-[#700422]/90 backdrop-blur-sm flex flex-col items-center gap-6 py-6 text-lg dark:text-white">
                <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
                <a href="#differences" onClick={() => setOpen(false)}>Diferenciais</a>
                <a href="#professional" onClick={() => setOpen(false)}>Candidatos</a>
                <a href="#plans" onClick={() => setOpen(false)}>Planos</a>
                <a href="#contact" onClick={() => setOpen(false)}>Login</a>

                <button
                    onClick={() => setOpen(false)}
                    className="bg-[#700422] text-[#E4B34B] dark:bg-[#E4B34B] dark:text-[#700422] rounded-md h-10 w-32 font-medium hover:opacity-90 transition">
                    Cadastrar
                </button>
            </div>
      )}
    </header>
  );
}

export default Header;
