import {FC} from 'react'

import Card from '../card/Card'
import styles from './List.module.scss'
import Skeletons from '../skeletons/Skeletons'
import {IRepositoriesListOutputModel} from '../../../../../domain/models/repositoriesList/repositoriesListOutput/interfaces'

interface Props {
	isLoading: boolean
	list: IRepositoriesListOutputModel[]
}

const List: FC<Props> = ({ list, isLoading }) => {

	if (isLoading) {
		return <Skeletons />
	}

	if (!list.length) {
		return <h3 className='text-3xl text-center text-primary'>List of repositories is empty</h3>
	}

	return (
		<div className={styles.list}>
			{list.map((item, index) => (
				<Card
					key={item?.id || index}
					id={item?.id}
					title={item?.name}
					description={item?.description}
					imageUrl={item?.owner?.avatar_url}
				/>
			))}
		</div>
	)
}

export default List
