import { FC, ReactNode } from 'react'

import classNames from '@utils/helpers/classNames'

import styles from './BaseContainer.module.scss'

interface Props {
	children?: ReactNode
	className?: string
}

const BaseContainer: FC<Props> = ({children, className}) => {
	return (
		<div className={classNames(styles['base-container'], className)}>
			{children}
		</div>
	)
}

export default BaseContainer
