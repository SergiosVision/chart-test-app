import {FC} from 'react'

import List from './repositoriesList/list/List'
import styles from './repositoriesList/RepositoriesListView.module.scss'
import {IRepositoriesListOutputModel} from '../../../domain/models/repositoriesList/repositoriesListOutput/interfaces'

interface Props {
	isLoading: boolean
	list: IRepositoriesListOutputModel[]
}

const RepositoriesListView: FC<Props> = ({ isLoading, list }) => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>List of repositories</h1>

			<List
				list={list}
				isLoading={isLoading}
			/>
		</section>
	)
}

export default RepositoriesListView
