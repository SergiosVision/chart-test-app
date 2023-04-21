import {FC} from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './Skeletons.module.scss'

const stub = Array.from(Array(12).keys())

const Skeletons: FC = () => {
	return (
		<div className={styles['skeletons-wrapper']}>
			{stub.map(key => (
				<Skeleton className={styles.skeleton} key={key} height='200px'/>
			))}
		</div>
	)
}

export default Skeletons
