import {FC, useRef} from 'react'

import githubApiService from '@services/api/github/github.api.service'

import {RepositoryImpl} from '../../data/repository'
import {GetRepositoriesListCase} from '../../domain/usecases/getRepositoriesListCase'
import {RepositoriesListViewModel} from '../../presentation/repositoriesList/viewModel'

import ViewController from './ViewController'

const Provider: FC = () => {
    const repository = useRef(new RepositoryImpl(githubApiService))
    const getRepositoriesListCase = useRef(new GetRepositoriesListCase(repository.current))

    const viewModel = useRef(new RepositoriesListViewModel({ getRepositoriesListCase: getRepositoriesListCase.current }))

    return (
      <ViewController viewModel={viewModel.current} />
    )
}

export default Provider
