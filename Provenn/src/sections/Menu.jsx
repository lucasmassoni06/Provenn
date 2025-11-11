import LogoVermelha from '../assets/LogoVermelha.png'
import LogoAmarelo from '../assets/LogoAmarelo.png'
import AmbienteTrabalho from '../assets/AmbienteTrabalho.png'
import Trabalhador from '../assets/Trabalhador.png'

function Menu({ darkMode }) {
    return (
    <div className="px-6 sm:px-10 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left dark:text-white max-w-4xl">
            Bem-vindo ao{" "}
            <span className="text-[#700422] dark:text-[#E8BE65]">Provenn</span>
            </h1>
            <img
            src={darkMode ? LogoAmarelo : LogoVermelha}
            alt="Logo Provenn"
            className="w-48 sm:w-64 lg:w-80 xl:w-96 mt-8 lg:mt-0 mr-40"
            />
        </div>

        <div className="mt-12 flex">
            <p className="mt-20 text-lg sm:text-xl lg:text-2xl leading-relaxed text-center lg:text-left dark:text-white max-w-150">
            Uma plataforma digital criada para conectar microempresas e empresas a
            profissionais em um só lugar. Trazendo oportunidade a todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 flex-1 justify-center items-center">
                <div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-90 h-90 flex flex-col items-center justify-between p-6 backdrop-blur-md transition-all hover:scale-105">
                    <img
                    src={AmbienteTrabalho}
                    alt="Logo Provenn"
                    className="w-100 h-100 object-contain mt-2.5 rounded-lg"
                    />
                    <p className='dark:text-white'>Adicione sua empresa e contrate os melhores do mercado</p>
                    <button className="mt-4 bg-[#700422] text-[#E4B34B] dark:text-[#700422]  dark:bg-[#E4B34B] font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition">
                    Adicionar Empresa 
                    </button>
                </div>
                <div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-90 h-90 flex flex-col items-center justify-between p-6 backdrop-blur-md transition-all hover:scale-105">
                    <img
                    src={Trabalhador}
                    alt="Logo Provenn"
                    className="w-100 h-100 object-contain rounded-2xl"
                    />
                    <p className='dark:text-white'>Crie sua conta e começe a procurar vagas</p>
                    <button className="mt-6 bg-[#700422] text-[#E4B34B] dark:text-[#700422] dark:bg-[#E4B34B] font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition">
                    Canditatar-se
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Menu