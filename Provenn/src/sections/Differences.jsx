import { Waypoints, User, Paperclip, Newspaper, Compass, Folder, Video, MessageSquare } from "lucide-react";

function Differences() {
	return (
		<div className="px-6 sm:px-10 lg:px-20 py-16 bg-[#FFF2D7] dark:bg-[#8B4155] text-center flex flex-col items-center gap-10 mb-20 ">
			<h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white">
				Diferenciais
			</h1>

			<p className="text-lg sm:text-xl lg:text-2xl max-w-3xl dark:text-white">
				Descubra todas as ferramentas que o Provenn oferece para impulsionar sua carreira e expandir suas conexões profissionais.
			</p>

			<div className="flex flex-wrap justify-center gap-8 mt-10 max-w-6xl">
				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<User className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Para Qualquer Um</h1>
					</div>
					<p className="text-sm">
						Vagas mesmo para que não possui graduações ou cursos.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<Paperclip className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Microempresas</h1>
					</div>
					<p className="text-sm">
						Ache funcionários rápido e fácil.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<Compass className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Vagas Perto de Você</h1>
					</div>
					<p className="text-sm">
						Empresas parceiras em todos os lugares.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<Folder className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Divulgue Vagas</h1>
					</div>
					<p className="text-sm">
						Divulge vagas para mais de 300k usuários.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<Newspaper className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Feed de Conteúdos</h1>
					</div>
					<p className="text-sm">
						Divulge vagas para mais de 300k usuários.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<Video className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Provenn Live</h1>
					</div>
					<p className="text-sm">
						Participe de eventos ao vivo todos os dias.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<MessageSquare className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Comunicação</h1>
					</div>
					<p className="text-sm">
						Converse diretamente com profissionais e recrutadores.
					</p>
				</div>

				<div className="bg-[#E4B34B]/40 rounded-2xl shadow-lg w-56 h-56 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all hover:scale-105 text-center">
					<div className="flex items-center gap-3 mb-3">
						<div className="bg-[#E4B34B]/70 rounded-2xl w-12 h-12 shadow-md flex items-center justify-center">
							<Waypoints className="w-6 h-6" />
						</div>
						<h1 className="text-lg font-semibold">Recursos Avançados</h1>
					</div>
					<p className="text-sm">
						Explore ferramentas exclusivas para análise de carreira e oportunidades.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Differences;
