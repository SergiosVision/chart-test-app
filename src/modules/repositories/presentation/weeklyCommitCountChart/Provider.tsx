import githubApiService from '@services/api/github/github.api.service'
import { FC } from 'react'

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper'

import { RepositoryImpl } from '../../data/repository'
import { GetWeeklyCommitCountCase } from '../../domain/usecases/getWeeklyCommitCountCase'

import ViewController from './ViewController'
import { WeeklyCommitCountChartViewModel } from './viewModel'

const repository = new RepositoryImpl(githubApiService)
const getWeeklyCommitCountCase = new GetWeeklyCommitCountCase(repository)
const viewModel = new WeeklyCommitCountChartViewModel({
	getWeeklyCommitCountCase
})

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	)
}

export default Provider
