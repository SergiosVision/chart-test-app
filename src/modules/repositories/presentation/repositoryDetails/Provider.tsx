import {FC} from 'react'

import githubApiService from '@services/api/github/github.api.service'

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper'

import ViewController from './ViewController'
import {RepositoryImpl} from '../../data/repository'
import {RepositoryDetailsViewModel} from './viewModel'
import {GetRepositoryDetailsCase} from '../../domain/usecases/getRepositoryDetailsCase'

const repository = new RepositoryImpl(githubApiService)
const getRepositoryDetailsCase = new GetRepositoryDetailsCase(repository)
const viewModel = new RepositoryDetailsViewModel({getRepositoryDetailsCase})

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	)
}

export default Provider
