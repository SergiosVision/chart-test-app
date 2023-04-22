import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import RepositoriesListView from './view/RepositoriesListView'
import { RepositoriesListViewModel } from './viewModel'

interface Props {
	viewModel: RepositoriesListViewModel
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary()

	useEffect(() => {
		;(async () => {
			try {
				await viewModel.getRepositoriesList()
			} catch (error) {
				showBoundary(error)
			}
		})()
	}, [])

	return (
		<RepositoriesListView
			list={viewModel.list}
			isLoading={viewModel.isLoading}
		/>
	)
}

export default observer(ViewController)
