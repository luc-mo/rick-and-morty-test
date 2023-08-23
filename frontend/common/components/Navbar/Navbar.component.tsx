import './Navbar.styles.css'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<h1 className='navbar__title'>
				<span className='navbar__title--big'>Rick and Morty</span>
				<span className='navbar__title--small'>Humans vs ... the others</span>
			</h1>
			<div className='navbar__links'>
				<a className='navbar__link' href='/' title='Go to humans page'>
					Humans
				</a>
				<a className='navbar__link' href='/all-characters' title='Go to all characters page'>
					All Characters
				</a>
			</div>
		</nav>
	)
}
