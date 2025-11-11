import { Users, Briefcase, TrendingUp, Send } from "lucide-react";
import LogoLoop from "../components/LogoLoop";
import { SiApple, SiMcdonalds, SiPinterest, SiOpenai, SiPorsche } from 'react-icons/si';

function About() {

    const techLogos = [
        { node: <SiApple />, title: "Apple", href: "https://apple.com.br" },
        { node: <SiMcdonalds />, title: "McDonalds", href: "https://mcdonalds.com.br" },
        { node: <SiOpenai />, title: "Openai", href: "https://www.openia.com.br" },
        { node: <SiPinterest />, title: "Pinterest", href: "https://pinterest.com.br" },
        { node: <SiPorsche />, title: "Porsche", href: "https://porsche.com.br" },
    ];

return (
    <div className="px-6 sm:px-10 lg:px-20 py-16 bg-white dark:bg-[#8B4155] text-center flex flex-col items-center gap-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold dark:text-white">
        Sobre a Provenn
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl dark:text-white">
        Fundado em 2025, a Provenn traz uma interface moderna e intuitiva,
        ajudando microempresas a mostrarem seu potencial, fortalecerem sua
        presença profissional e se conectarem com quem realmente faz a diferença.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105">
                <Users className="w-20 h-20" />
                <p className="dark:text-white text-3xl mt-4">300K+</p>
                <p className="dark:text-white text-lg">Usuários</p>
            </div>
            <div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105">
                <Briefcase className="w-20 h-20" />
                <p className="dark:text-white text-3xl mt-4">125K+</p>
                <p className="dark:text-white text-lg">Empresas</p>
            </div>
            <div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105">
                <TrendingUp className="w-20 h-20" />
                <p className="dark:text-white text-3xl mt-4">50K+</p>
                <p className="dark:text-white text-lg">Vagas</p>
            </div>
            <div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105">
                <Send className="w-20 h-20" />
                <p className="dark:text-white text-3xl mt-4">200K+</p>
                <p className="dark:text-white text-lg">Empregos Conseguidos</p>
            </div>
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl dark:text-white">
            Grandes empresas que contratam aqui!
        </p>
        <div className="flex justify-center">
            <div className="w-[700px] sm:w-[800px] lg:w-[1000px]">
                <LogoLoop
                logos={techLogos}
                speed={80}
                direction="right"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
                />
            </div>
        </div>
    </div>
);
}

export default About;
