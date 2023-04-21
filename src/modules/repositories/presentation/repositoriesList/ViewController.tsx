import {FC, useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {useErrorBoundary} from 'react-error-boundary'

import {RepositoriesListViewModel} from './viewModel'
import RepositoriesListView from './view/RepositoriesListView'

interface Props {
    viewModel: RepositoriesListViewModel
}

const ViewController: FC<Props> = ({ viewModel }) => {
    const {showBoundary} = useErrorBoundary()

    useEffect(() => {
        (async () => {
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
