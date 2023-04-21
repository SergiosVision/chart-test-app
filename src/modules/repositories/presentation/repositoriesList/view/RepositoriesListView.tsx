import {FC} from 'react'

import List from './repositoriesList/list/List'
import styles from './repositoriesList/RepositoriesListView.module.scss'
import {RepositoriesListOutputModel} from '../../../domain/models/repositoriesList/repositoriesListOutput/RepositoriesListOutputModel'

interface Props {
	isLoading: boolean
	list: RepositoriesListOutputModel[]
}

const RepositoriesListView: FC<Props> = ({ isLoading, list }) => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>List of facebook organization repositories</h1>

			<List
				list={list}
				isLoading={isLoading}
			/>
		</section>
	)
}

export default RepositoriesListView
