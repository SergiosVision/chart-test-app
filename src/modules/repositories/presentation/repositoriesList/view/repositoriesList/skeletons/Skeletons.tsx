import { FC } from 'react';

import BaseSkeleton from '@components/ui/skeleton/BaseSkeleton';

import styles from './Skeletons.module.scss';

const stub = Array.from(Array(12).keys());

const Skeletons: FC = () => {
	return (
		<div className={styles['skeletons-wrapper']}>
			{stub.map(key => (
				<BaseSkeleton key={key} height='200px' />
			))}
		</div>
	);
};

export default Skeletons;
