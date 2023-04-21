import {FC, useEffect} from 'react'
import {observer} from 'mobx-react-lite'

import {RepositoriesListViewModel} from './viewModel'
import RepositoriesListView from './view/RepositoriesListView'

interface Props {
    viewModel: RepositoriesListViewModel
}

const ViewController: FC<Props> = ({ viewModel }) => {
    useEffect(() => {
        (async () => {
            await viewModel.getRepositoriesList()
        })()
    }, [viewModel])

    return (
      <RepositoriesListView
        list={viewModel.list}
        isLoading={viewModel.isLoading}
      />
    )
}

export default observer(ViewController)
