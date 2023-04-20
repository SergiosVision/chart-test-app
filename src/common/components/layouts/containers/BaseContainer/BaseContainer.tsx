import { FC, ReactNode } from 'react'

import styles from './BaseContainer.module.scss'

interface Props {
	children?: ReactNode
}

const BaseContainer: FC<Props> = ({children}) => {
	return (
		<div className={styles['base-container']}>
			{children}
		</div>
	)
}

export default BaseContainer
