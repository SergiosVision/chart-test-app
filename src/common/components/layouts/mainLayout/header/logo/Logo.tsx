import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '@/common/router/routes'

import styles from './Logo.module.scss'

const Logo: React.FC = () => {
	return (
		<NavLink to={routes.home} className={styles.logo}>
			Test Chart App
		</NavLink>
	)
}

export default Logo
