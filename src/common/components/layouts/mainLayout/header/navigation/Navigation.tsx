import React from 'react';

import routes from '@common/router/routes';

import styles from './Navigation.module.scss';
import NavigationItem from './navigationItem/NavigationItem';

const Navigation: React.FC = () => {
	return (
		<nav className={styles.navigation}>
			<ul>
				<NavigationItem to={routes.home}>Repositories</NavigationItem>
			</ul>
		</nav>
	);
};

export default Navigation;
