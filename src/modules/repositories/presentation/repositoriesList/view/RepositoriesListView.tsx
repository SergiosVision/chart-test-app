import { FC } from 'react';

import { RepositoriesListOutputModel } from '../../../domain/models/repositoriesList/repositoriesListOutput/RepositoriesListOutputModel';

import styles from './repositoriesList/RepositoriesListView.module.scss';
import List from './repositoriesList/list/List';

interface Props {
	isLoading: boolean;
	list: RepositoriesListOutputModel[];
}

const RepositoriesListView: FC<Props> = ({ isLoading, list }) => {
	return (
		<section className={styles.wrapper}>
			<List list={list} isLoading={isLoading} />
		</section>
	);
};

export default RepositoriesListView;
