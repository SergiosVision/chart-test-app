import {FC} from 'react'

import {ValueOrNull} from '@common/types/interfaces/common'
import TitledText from '@components/ui/titledText/TitledText'
import TitledSection from '@components/layouts/titledSection/TitledSection'

import formatBooleanToText from '@utils/formatters/formatBooleanToText'

import Skeletons from '../skeletons/Skeletons'
import SectionContentWrapper from '../../sectionContentWrapper/SectionContentWrapper'
import {RepositoryDetailsOutputModel} from '../../../../../domain/models/repositoryDetails/repositoryDetailsOutput/RepositoryDetailsOutputModel'

interface Props {
	isLoading: boolean
	data: ValueOrNull<RepositoryDetailsOutputModel>
}

const CommonInfo: FC<Props> = ({data, isLoading}) => {
	return (
		<TitledSection title='Common info'>
			<SectionContentWrapper>
				{!isLoading ? (
					<>
						<TitledText title='id' subTitle={data?.id}/>
						<TitledText title='Name' subTitle={data?.name}/>
						<TitledText title='Owner' subTitle={data?.owner?.login}/>
						<TitledText title='License' subTitle={data?.license?.name}/>
						<TitledText title='Watchers' subTitle={data?.watchers}/>
						<TitledText title='Private' subTitle={formatBooleanToText(data?.private)}/>
						<TitledText title='Has Issues' subTitle={formatBooleanToText(data?.has_issues)}/>
						<TitledText title='Has Projects' subTitle={formatBooleanToText(data?.has_projects)}/>
					</>
				) : <Skeletons />}
			</SectionContentWrapper>
		</TitledSection>
	)
}

export default CommonInfo
