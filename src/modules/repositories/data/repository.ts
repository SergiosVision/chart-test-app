import {GithubApiService} from '@services/api/github/github.api.service'

import {IRepositoriesListResponseModel} from '../domain/models/repositoriesList/repositoriesListResponse/interfaces'
import {RepositoriesListResponseModel} from '../domain/models/repositoriesList/repositoriesListResponse/RepositoriesListResponse'

export class RepositoryImpl {
	private API: GithubApiService | null = null

	constructor(api: GithubApiService) {
		this.API = api
	}

	async getRepositoriesList (): Promise<IRepositoriesListResponseModel[]> {
		try {
			const response = await this.API?.http({
				method: 'GET',
				url: '/orgs/octokit/repos'
			})

			return (response?.data || []).map((item: IRepositoriesListResponseModel) => new RepositoriesListResponseModel({
				id: item?.id,
				name: item?.name,
				private: item?.private,
				description: item?.description,
				owner: item?.owner,
				watchers: item?.watchers
			}))
		} catch (error) {
			throw error
		}
	}
}
