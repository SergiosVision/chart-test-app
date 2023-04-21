import {FC} from 'react'
import {Link} from 'react-router-dom'

import routes from '@common/router/routes'
import {StringOrNull} from '@common/types/interfaces/common'

import BaseCard from '@components/ui/cards/baseCard/BaseCard'

import styles from './Card.module.scss'

interface Props {
	id: StringOrNull
	name: StringOrNull
	imageUrl?: string
	ownerName?: StringOrNull
	description?: StringOrNull
}

const Card: FC<Props> = ({name, imageUrl, description, id, ownerName}) => {
	return (
		<Link className={styles['card-wrapper']} to={`${routes.repositories}/${name}/${ownerName}`}>
			<BaseCard className={styles.card}>
				<div className={styles['image-wrapper']}>
					{imageUrl && <img className={styles.image} src={imageUrl}  alt={name || ''}/>}
				</div>
				<div className={styles.info}>
					<h3 className={styles.title}>{name}</h3>
					<p className={styles.description}>{description}</p>
				</div>
			</BaseCard>
		</Link>
	)
}

export default Card