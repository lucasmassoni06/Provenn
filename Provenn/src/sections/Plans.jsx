function Plans() {
	return (
		<div className="flex flex-col items-center px-6 sm:px-10 lg:px-20 py-16 bg-[#FFF2D7] dark:bg-[#8B4155]">
			<h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center dark:text-white mb-16">
				Escolha o Plano Ideal <br /> para Você
			</h1>

			<div className="flex flex-wrap justify-center gap-8 mt-20">
				<div className="bg-[#E4B34B]/40 w-64 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
					<div>
						<h2 className="text-2xl font-semibold mb-2 dark:text-white">Gratuito</h2>
						<p className="text-sm mb-4 dark:text-white">Para quem está começando sua carreira.</p>
						<p className="text-3xl font-bold dark:text-white">R$ 0<span className="text-base font-normal">/mês</span></p>
						<ul className="text-left mt-6 text-sm dark:text-white space-y-2">
							<li>✔ Perfil profissional básico</li>
							<li>✔ Candidatura ilimitada</li>
							<li>✔ Mensagens ilimitadas</li>
							<li>✔ Recomendações diárias</li>
							<li>✖ Insights de quem visualizou</li>
							<li>✖ Buscas avançadas</li>
						</ul>
					</div>
					<button className="mt-8 bg-[#61192C] text-white rounded-lg py-2 hover:bg-[#4B1221] transition-all">
						Criar Conta
					</button>
				</div>

				<div className="relative bg-[#E4B34B]/70 w-64 rounded-2xl shadow-lg p-8 flex flex-col justify-between border-2 border-[#E4B34B]">
					<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E4B34B] text-[#61192C] text-xs font-semibold px-4 py-1 rounded-full shadow-md">
						Mais Popular
					</span>
					<div>
						<h2 className="text-2xl font-semibold mb-2 dark:text-white">Premium Career</h2>
						<p className="text-sm mb-4 dark:text-white">Para quem quer acelerar sua carreira.</p>
						<p className="text-3xl font-bold dark:text-white">R$ 15,99<span className="text-base font-normal">/mês</span></p>
						<ul className="text-left mt-6 text-sm dark:text-white space-y-2">
							<li>✔ Perfil profissional avançado</li>
							<li>✔ Candidatura ilimitada</li>
							<li>✔ Mensagens ilimitadas</li>
							<li>✔ Recomendações diárias</li>
							<li>✔ Insights de quem visualizou</li>
							<li>✔ Buscas avançadas</li>
						</ul>
					</div>
					<button className="mt-8 bg-[#61192C] text-white rounded-lg py-2 hover:bg-[#4B1221] transition-all">
						Começar Agora
					</button>
				</div>

				<div className="bg-[#E4B34B]/40 w-64 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
					<div>
						<h2 className="text-2xl font-semibold mb-2 dark:text-white">Super Enterprise</h2>
						<p className="text-sm mb-4 dark:text-white">Para empresas que querem acelerar contratações.</p>
						<p className="text-3xl font-bold dark:text-white">R$ 49,99<span className="text-base font-normal">/mês</span></p>
						<ul className="text-left mt-6 text-sm dark:text-white space-y-2">
							<li>✔ Maior visibilidade</li>
							<li>✔ Acesso a estatísticas avançadas</li>
							<li>✔ Destaque em postagens e vagas</li>
							<li>✔ Empresa verificada</li>
							<li>✔ Suporte prioritário</li>
							<li>✔ Lives e vídeos liberados</li>
						</ul>
					</div>
					<button className="mt-8 bg-[#61192C] text-white rounded-lg py-2 hover:bg-[#4B1221] transition-all">
						Começar Agora
					</button>
				</div>
			</div>
		</div>
	);
}

export default Plans;
