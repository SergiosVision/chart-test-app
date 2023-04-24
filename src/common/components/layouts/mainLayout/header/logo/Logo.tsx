import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '@common/router/routes';

import TextBody from '@components/ui/typography/textBody/TextBody';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
	return (
		<NavLink to={routes.home} className={styles.logo}>
			<TextBody>Test Chart App</TextBody>
		</NavLink>
	);
};

export default Logo;
