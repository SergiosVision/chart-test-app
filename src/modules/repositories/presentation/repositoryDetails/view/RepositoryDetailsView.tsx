import { FC } from 'react';

import { ValueOrNull } from '@common/types/interfaces/common';

import BaseErrorText from '@components/ui/typography/baseErrorText/BaseErrorText';

import { RepositoryDetailsOutputModel } from '../../../domain/models/repositoryDetails/repositoryDetailsOutput/RepositoryDetailsOutputModel';

import CommonInfo from './info/commonInfo/CommonInfo';

interface Props {
	isLoading: boolean;
	data: ValueOrNull<RepositoryDetailsOutputModel>;
}

const RepositoryDetailsView: FC<Props> = ({ isLoading, data }) => {
	return (
		<section className='min-h-[200px]'>
			{!isLoading && !data ? (
				<BaseErrorText>Can not get details info</BaseErrorText>
			) : (
				<CommonInfo data={data} isLoading={isLoading} />
			)}
		</section>
	);
};

export default RepositoryDetailsView;
