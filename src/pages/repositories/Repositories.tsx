import React from 'react'

import BaseContainer from '@components/layouts/containers/BaseContainer/BaseContainer'

import { RepositoriesList } from '@modules/repositories/presentation/repositoriesList'

import Text3xl from '@/common/components/ui/typography/text3xl/Text3xl'

const Repositories: React.FC = () => {
	return (
		<BaseContainer className='flex flex-col w-full gap-6'>
			<Text3xl className='center text-center uppercase'>
				List of facebook organization repositories
			</Text3xl>
			<RepositoriesList />
		</BaseContainer>
	)
}

export default Repositories
