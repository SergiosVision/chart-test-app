import { FC } from 'react';

import TitledSection from '@common/components/ui/titledSection/TitledSection';
import { ValueOrNull } from '@common/types/interfaces/common';

import TitledText from '@components/ui/titledText/TitledText';

import formatBooleanToText from '@utils/formatters/formatBooleanToText';

import { RepositoryDetailsOutputModel } from '../../../../../domain/models/repositoryDetails/repositoryDetailsOutput/RepositoryDetailsOutputModel';
import SectionContentWrapper from '../../sectionContentWrapper/SectionContentWrapper';
import Skeletons from '../skeletons/Skeletons';

interface Props {
	isLoading: boolean;
	data: ValueOrNull<RepositoryDetailsOutputModel>;
}

const CommonInfo: FC<Props> = ({ data, isLoading }) => {
	return (
		<TitledSection title='Common info'>
			<SectionContentWrapper>
				{!isLoading ? (
					<>
						<TitledText title='id' subTitle={data?.id} />
						<TitledText title='Name' subTitle={data?.name} />
						<TitledText title='Owner' subTitle={data?.owner?.login} />
						<TitledText title='License' subTitle={data?.license?.name} />
						<TitledText title='Watchers' subTitle={data?.watchers} />
						<TitledText
							title='Private'
							subTitle={formatBooleanToText(data?.private)}
						/>
						<TitledText
							title='Has Issues'
							subTitle={formatBooleanToText(data?.has_issues)}
						/>
						<TitledText
							title='Has Projects'
							subTitle={formatBooleanToText(data?.has_projects)}
						/>
					</>
				) : (
					<Skeletons />
				)}
			</SectionContentWrapper>
		</TitledSection>
	);
};

export default CommonInfo;
