import IAPI from '@services/api/interfaces/api';

import { ValueOrNull } from '@common/types/interfaces/common';

import { IRepositoriesListResponseModel } from '../domain/models/repositoriesList/repositoriesListResponse/RepositoriesListResponse';
import { RepositoriesListResponseModel } from '../domain/models/repositoriesList/repositoriesListResponse/RepositoriesListResponseModel';
import { IRepositoryDetailsRequestParams } from '../domain/models/repositoryDetails/interfaces/RepositoryDetailsRequestParams';
import { IRepositoryDetailsResponse } from '../domain/models/repositoryDetails/repositoryDetailsResponse/RepositoryDetailsResponse';
import { RepositoryDetailsResponseModel } from '../domain/models/repositoryDetails/repositoryDetailsResponse/RepositoryDetailsResponseModel';
import IWeeklyCommitCountRequestParams from '../domain/models/weeklyCommitCount/interfaces/WeeklyCommitCountRequestParams';
import { IWeeklyCommitCountResponse } from '../domain/models/weeklyCommitCount/weeklyCommitCountResponse/WeeklyCommitCountResponse';
import { WeeklyCommitCountResponseModel } from '../domain/models/weeklyCommitCount/weeklyCommitCountResponse/WeeklyCommitCountResponseModel';

export class RepositoryImpl {
	private API: ValueOrNull<IAPI> = null;

	constructor(api: IAPI) {
		this.API = api;
	}

	async getRepositoriesList(): Promise<IRepositoriesListResponseModel[]> {
		const response = await this.API?.http<IRepositoriesListResponseModel[]>({
			method: 'GET',
			url: '/orgs/facebook/repos'
		});

		return (response || []).map(
			item =>
				new RepositoriesListResponseModel({
					id: item?.id,
					name: item?.name,
					private: item?.private,
					description: item?.description,
					owner: item?.owner,
					watchers: item?.watchers
				})
		);
	}

	async getRepositoryDetails(
		params: IRepositoryDetailsRequestParams
	): Promise<RepositoryDetailsResponseModel> {
		const response = await this.API?.http<IRepositoryDetailsResponse>({
			method: 'GET',
			url: `/repos/${params?.owner}/${params.repo}`
		});

		return new RepositoryDetailsResponseModel({
			id: response?.id,
			name: response?.name,
			private: response?.private,
			watchers: response?.watchers,
			has_issues: response?.has_issues,
			has_projects: response?.has_projects,
			description: response?.description,
			owner: response?.owner,
			license: response?.license
		});
	}

	async getWeeklyCommitCount(
		params: IWeeklyCommitCountRequestParams
	): Promise<WeeklyCommitCountResponseModel> {
		const response = await this.API?.http<IWeeklyCommitCountResponse>({
			method: 'GET',
			url: `/repos/${params?.owner}/${params.repo}/stats/participation`
		});

		return new WeeklyCommitCountResponseModel({
			all: response?.all,
			owner: response?.owner
		});
	}
}
