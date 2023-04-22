import { FC, HTMLAttributes, ReactNode } from 'react'

import classNames from '@utils/helpers/classNames'

import styles from './BaseButton.module.scss'

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
}

const BaseButton: FC<BaseButtonProps> = ({ children, className, ...rest }) => {
	return (
		<button className={classNames(styles['base-button'], className)} {...rest}>
			{children}
		</button>
	)
}

export default BaseButton
