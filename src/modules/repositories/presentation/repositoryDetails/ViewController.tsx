import {FC, useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {useParams} from 'react-router-dom'
import {useErrorBoundary} from 'react-error-boundary'

import {RepositoryDetailsViewModel} from './viewModel'
import RepositoryDetailsView from './view/RepositoryDetailsView'

interface Props {
	viewModel: RepositoryDetailsViewModel
}

const ViewController: FC<Props> = ({viewModel}) => {
	const {showBoundary} = useErrorBoundary()

	const params = useParams<{repo: string, owner: string}>()

	useEffect(() => {
		(async () => {
			try {
				await viewModel.getRepositoryDetails({
					repo: params?.repo || '',
					owner: params?.owner || ''
				})
			} catch (error) {
				showBoundary(error)
			}
		})()
	}, [])

	return (
		<RepositoryDetailsView
			data={viewModel.data}
			isLoading={viewModel.isLoading}
		/>
	)
}

export default observer(ViewController)
