import React from 'react'

import BaseContainer from '@components/layouts/containers/BaseContainer/BaseContainer'

import {RepositoriesList} from '@modules/repositories/presentation/repositoriesList'

const Repositories: React.FC = () => {
	return (
		<BaseContainer>
			<RepositoriesList />
		</BaseContainer>
	)
}

export default Repositories
