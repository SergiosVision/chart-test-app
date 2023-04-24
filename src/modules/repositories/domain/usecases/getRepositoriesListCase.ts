import { ValueOrNull } from '@common/types/interfaces/common';

import { RepositoryImpl } from '../../data/repository';
import { GetRepositoriesListBaseError } from '../../helpers/exceptions';
import { RepositoriesListOutputModel } from '../models/repositoriesList/repositoriesListOutput/RepositoriesListOutputModel';
import { RepositoriesListResponseModel } from '../models/repositoriesList/repositoriesListResponse/RepositoriesListResponseModel';

export class GetRepositoriesListCase {
	private repository: ValueOrNull<RepositoryImpl> = null;

	constructor(repo: RepositoryImpl) {
		this.repository = repo;
	}

	async getRepositoriesList() {
		try {
			const response = await this.repository?.getRepositoriesList();

			return this.convertRepositoriesListData(response || []);
		} catch (error: any) {
			throw new GetRepositoriesListBaseError(error?.message);
		}
	}

	private convertRepositoriesListData(
		data: Partial<RepositoriesListResponseModel>[]
	) {
		return data.map(
			item =>
				new RepositoriesListOutputModel({
					id: item?.id,
					name: item?.name,
					private: item?.private,
					description: item?.description,
					owner: item?.owner,
					watchers: item?.watchers
				})
		);
	}
}
