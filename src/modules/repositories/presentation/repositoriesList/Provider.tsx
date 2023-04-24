import { FC } from 'react';

import githubApiService from '@services/api/github/github.api.service';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { RepositoryImpl } from '../../data/repository';
import { GetRepositoriesListCase } from '../../domain/usecases/getRepositoriesListCase';

import ViewController from './ViewController';
import { RepositoriesListViewModel } from './viewModel';

const repository = new RepositoryImpl(githubApiService);
const getRepositoriesListCase = new GetRepositoriesListCase(repository);
const viewModel = new RepositoriesListViewModel({ getRepositoriesListCase });

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
