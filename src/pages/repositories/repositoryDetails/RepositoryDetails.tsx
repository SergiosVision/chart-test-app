import { FC } from 'react'

import BaseContainer from '@components/layouts/containers/BaseContainer/BaseContainer'

import { RepositoryDetails } from '@modules/repositories/presentation/repositoryDetails'
import { WeeklyCommitCountChart } from '@modules/repositories/presentation/weeklyCommitCountChart'

const RepositoryDetailsPage: FC = () => {
	return (
		<BaseContainer className='flex flex-col gap-4'>
			<RepositoryDetails />
			<WeeklyCommitCountChart />
		</BaseContainer>
	)
}

export default RepositoryDetailsPage
