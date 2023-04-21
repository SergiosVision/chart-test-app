import {ValueOrNull} from '@common/types/interfaces/common'

import {GithubApiService} from '@services/api/github/github.api.service'

import IWeeklyCommitCountRequestParams from '../domain/models/weeklyCommitCount/interfaces/WeeklyCommitCountRequestParams'
import {IRepositoryDetailsRequestParams} from '../domain/models/repositoryDetails/interfaces/RepositoryDetailsRequestParams'
import {IWeeklyCommitCountResponse} from '../domain/models/weeklyCommitCount/weeklyCommitCountResponse/WeeklyCommitCountResponse'
import {IRepositoriesListResponseModel} from '../domain/models/repositoriesList/repositoriesListResponse/RepositoriesListResponse'
import {RepositoriesListResponseModel} from '../domain/models/repositoriesList/repositoriesListResponse/RepositoriesListResponseModel'
import {WeeklyCommitCountResponseModel} from '../domain/models/weeklyCommitCount/weeklyCommitCountResponse/WeeklyCommitCountResponseModel'
import {IRepositoryDetailsResponse} from '../domain/models/repositoryDetails/repositoryDetailsResponse/RepositoryDetailsResponse'
import {RepositoryDetailsResponseModel} from '../domain/models/repositoryDetails/repositoryDetailsResponse/RepositoryDetailsResponseModel'

export class RepositoryImpl {
	private API: ValueOrNull<GithubApiService> = null

	constructor(api: GithubApiService) {
		this.API = api
	}

	async getRepositoriesList (): Promise<IRepositoriesListResponseModel[]> {
		try {
			const response = await this.API?.http<IRepositoriesListResponseModel[]>({
				method: 'GET',
				url: '/orgs/facebook/repos'
			})

			return (response || []).map(item => new RepositoriesListResponseModel({
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

	async getRepositoryDetails (params: IRepositoryDetailsRequestParams): Promise<RepositoryDetailsResponseModel> {
		try {
			const response = await this.API?.http<IRepositoryDetailsResponse>({
				method: 'GET',
				url: `/repos/${params?.owner}/${params.repo}`
			})

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
			})
		} catch (error) {
			throw error
		}
	}

	async getWeeklyCommitCount (params: IWeeklyCommitCountRequestParams): Promise<WeeklyCommitCountResponseModel> {
		try {
			const response = await this.API?.http<IWeeklyCommitCountResponse>({
				method: 'GET',
				url: `/repos/${params?.owner}/${params.repo}/stats/participation`
			})

			return new WeeklyCommitCountResponseModel({
				all: response?.all,
				owner: response?.owner
			})
		} catch (error) {
			throw error
		}
	}
}
