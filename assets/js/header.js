class Header extends HTMLElement {
	constructor() {
		super();
		this.outerHTML =
		`<header>

			<nav>

				<a href="#main">Ir al contenido principal</a>

				<a href="./" tabindex="-1">
					<img src="./assets/img/svg/logo.svg" alt="Logo de la empresa">
				</a>

				<details>
					<summary aria-label="Menú de navegación">
						<svg viewBox="0 0 556 556">
							<path d="M0 277.66h555.187M0 30.91h555.187M0 525.844h555.187" />
						</svg>
						<svg viewBox="0 0 556 556">
							<path d="m24.336 24.336 506.648 506.648M530.984 24.336 24.336 530.984" />
						</svg>
					</summary>
				</details>

				<menu>
					<li><a href="./">Inicio</a></li>
					<li><a href="./quienes-somos.html">Quiénes somos</a></li>
					<li>
						<details>
							<summary>Tratamientos</summary>
							<menu>
								<li><a href="./chinches.html">Chinches</a></li>
								<li><a href="./cucarachas.html">Cucarachas</a></li>
								<li><a href="./roedores.html">Roedores</a></li>
								<li><a href="./hormigas.html">Hormigas</a></li>
								<li><a href="./insectos-voladores.html">Insectos
										voladores</a></li>
								<li><a href="./avispas.html">Avispas</a></li>
								<li><a href="./pulgas.html">Pulgas</a></li>
								<li><a href="./termitas-y-carcomas.html">Termitas y
										carcomas</a></li>
								<li><a href="./aves.html">Aves</a></li>
							</menu>
						</details>
					</li>
					<li>
						<details>
							<summary>Control de plagas</summary>
							<menu>
								<li><a href="./industria-negocios-oficina.html">Industrial, negocios
										y oficinas</a></li>
								<li><a href="./restauracion-y-alimentacion.html">Restauración
										y alimentación</a></li>
							</menu>
						</details>
					</li>
					<li>
						<details>
							<summary>Servicios especiales</summary>
							<menu>
								<li><a href="./desinfeccion-locales-y-viviendas.html">Desinfección locales
										y viviendas</a></li>
								<li><a href="./limpieza-sindrome-diogenes.html">Limpieza síndrome
										de Diógenes</a></li>
								<li><a href="./desinfeccion-ambiental-y-legionela.html">Desinfección ambiental
										y legionela</a></li>
							</menu>
						</details>
					</li>
				</menu>
			</nav>

		</header>`
	}
}

customElements.define("header-component", Header);
