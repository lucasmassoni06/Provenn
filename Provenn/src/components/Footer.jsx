import LogoVermelha from '../assets/LogoVermelha.png'
import LogoAmarelo from '../assets/LogoAmarelo.png'


function Footer({ darkMode }) {

	return (
		<footer className="bg-[#F5DEAA] text-[#1F1F1F] dark:bg-[#61192C] dark:text-white py-10 px-8 mt-20">
			<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				<div>
					<div className="flex items-center mb-3">
						<img src={darkMode ? LogoAmarelo : LogoVermelha} alt="Provenn Logo" className="w-8 h-8 mr-2" />
						<h1 className="text-2xl font-semibold text-[#61192C] dark:text-[#E4B34B]">Provenn</h1>
					</div>
					<p className="text-sm leading-relaxed">
						O lugar ideal para começar sua trajetória profissional e alcançar seus objetivos.
					</p>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-4 text-[#61192C] dark:text-[#E4B34B]">Institucional</h3>
					<ul className="space-y-2 text-sm">
						<li><a href="#" className="hover:underline">Sobre Nós</a></li>
						<li><a href="#" className="hover:underline">Carreiras</a></li>
						<li><a href="#" className="hover:underline">Blog</a></li>
						<li><a href="#" className="hover:underline">Parcerias</a></li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-4 text-[#61192C] dark:text-[#E4B34B]">Suporte</h3>
					<ul className="space-y-2 text-sm">
						<li><a href="#" className="hover:underline">Central de Ajuda</a></li>
						<li><a href="#" className="hover:underline">Fale Conosco</a></li>
						<li><a href="#" className="hover:underline">Política de Privacidade</a></li>
						<li><a href="#" className="hover:underline">Termos de Uso</a></li>
					</ul>
				</div>
			</div>

			<div className="border-t border-[#C8A763] dark:border-[#E4B34B]/30 mt-10 pt-6 text-center text-sm">
				<p>© 2025 <span className="font-semibold">Provenn</span>. Todos os direitos reservados.</p>
			</div>
		</footer>
	)
}

export default Footer
