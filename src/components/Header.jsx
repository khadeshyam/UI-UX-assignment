import React from 'react'
import Logo from '../assets/logo.png'

function Header() {
	return (
		<header>
			<img src={Logo} alt="Logo" className='logo' />
		</header>
	)
}

export default Header