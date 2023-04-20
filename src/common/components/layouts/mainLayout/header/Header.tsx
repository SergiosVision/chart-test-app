import React from 'react'

import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'

import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header-container']}>
				<Logo />
				<Navigation />
			</div>
		</header>
	)
}

export default Header
