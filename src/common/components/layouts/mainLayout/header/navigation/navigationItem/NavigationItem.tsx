import {FC, ReactNode} from 'react'
import {NavLink, NavLinkProps} from 'react-router-dom'

import classNames from '@utils/helpers/classNames'

import styles from './NavigationItem.module.scss'

interface Props extends NavLinkProps {
	children?: ReactNode
}

const NavigationItem: FC<Props> = ({children, ...rest}) => {
	return (
		<li className={styles['navigation-item']}>
			<NavLink {...rest} className={({isActive}) => classNames(styles['navigation-item-link'], isActive ? styles['navigation-item-link-active'] : '')}>
				{children}
			</NavLink>
		</li>
	)
}

export default NavigationItem
