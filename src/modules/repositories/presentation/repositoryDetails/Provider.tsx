import githubApiService from '@services/api/github/github.api.service'
import { FC } from 'react'

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper'

import { RepositoryImpl } from '../../data/repository'
import { GetRepositoryDetailsCase } from '../../domain/usecases/getRepositoryDetailsCase'

import ViewController from './ViewController'
import { RepositoryDetailsViewModel } from './viewModel'

const repository = new RepositoryImpl(githubApiService)
const getRepositoryDetailsCase = new GetRepositoryDetailsCase(repository)
const viewModel = new RepositoryDetailsViewModel({ getRepositoryDetailsCase })

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	)
}

export default Provider
