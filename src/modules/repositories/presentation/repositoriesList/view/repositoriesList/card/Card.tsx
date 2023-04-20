import {FC} from 'react'
import {Link} from 'react-router-dom'

import routes from '@common/router/routes'
import {StringOrNull} from '@common/types/interfaces/common'

import BaseCard from '@components/ui/cards/baseCard/BaseCard'

import styles from './Card.module.scss'

interface Props {
	id: StringOrNull
	title: StringOrNull
	imageUrl?: string
	description?: StringOrNull
}

const Card: FC<Props> = ({title, imageUrl, description, id}) => {
	return (
		<Link className={styles['card-wrapper']} to={`${routes.repositories}/${id}`}>
			<BaseCard className={styles.card}>
				<div className={styles['image-wrapper']}>
					{imageUrl && <img className={styles.image} src={imageUrl}  alt={title || ''}/>}
				</div>
				<div className={styles.info}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
			</BaseCard>
		</Link>
	)
}

export default Card
