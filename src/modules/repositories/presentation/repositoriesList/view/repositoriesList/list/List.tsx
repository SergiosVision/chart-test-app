import { FC } from 'react';

import BaseErrorText from '@components/ui/typography/baseErrorText/BaseErrorText';

import { RepositoriesListOutputModel } from '../../../../../domain/models/repositoriesList/repositoriesListOutput/RepositoriesListOutputModel';
import Card from '../card/Card';
import Skeletons from '../skeletons/Skeletons';

import styles from './List.module.scss';

interface Props {
	isLoading: boolean;
	list: RepositoriesListOutputModel[];
}

const List: FC<Props> = ({ list, isLoading }) => {
	if (isLoading) {
		return <Skeletons />;
	}

	if (!list.length) {
		return <BaseErrorText>List of repositories is empty</BaseErrorText>;
	}

	return (
		<div className={styles.list}>
			{list.map((item, index) => (
				<Card
					key={item?.id || index}
					id={item?.id}
					name={item?.name}
					ownerName={item?.owner?.login}
					description={item?.description}
					imageUrl={item?.owner?.avatar_url}
				/>
			))}
		</div>
	);
};

export default List;
