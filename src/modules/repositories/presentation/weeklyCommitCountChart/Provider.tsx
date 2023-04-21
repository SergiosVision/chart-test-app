import {FC} from 'react'

import githubApiService from '@services/api/github/github.api.service'

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper'

import ViewController from './ViewController'
import {RepositoryImpl} from '../../data/repository'
import {WeeklyCommitCountChartViewModel} from './viewModel'
import {GetWeeklyCommitCountCase} from '../../domain/usecases/getWeeklyCommitCountCase'

const repository = new RepositoryImpl(githubApiService)
const getWeeklyCommitCountCase = new GetWeeklyCommitCountCase(repository)
const viewModel = new WeeklyCommitCountChartViewModel({getWeeklyCommitCountCase})

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	)
}

export default Provider
