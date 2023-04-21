import {ValueOrNull} from '@common/types/interfaces/common'

import {RepositoryImpl} from '../../data/repository'
import {GetRepositoryDetailsBaseError} from '../../helpers/exceptions'
import {IRepositoryDetailsRequestParams} from '../models/repositoryDetails/interfaces/RepositoryDetailsRequestParams'
import {RepositoryDetailsOutputModel} from '../models/repositoryDetails/repositoryDetailsOutput/RepositoryDetailsOutputModel'
import {RepositoryDetailsResponseModel} from '../models/repositoryDetails/repositoryDetailsResponse/RepositoryDetailsResponseModel'

export class GetRepositoryDetailsCase {
	private repository: ValueOrNull<RepositoryImpl> = null

	constructor(repo: RepositoryImpl) {
		this.repository = repo
	}

	async getRepositoryDetails (params: IRepositoryDetailsRequestParams) {
		try {
			const response = await this.repository?.getRepositoryDetails(params)

			return this.convertRepositoryDetailsData(response)
		} catch (error: any) {
			throw new GetRepositoryDetailsBaseError(error?.message)
		}
	}

	private convertRepositoryDetailsData (data?: Partial<RepositoryDetailsResponseModel>) {
		return new RepositoryDetailsOutputModel({
			id: data?.id,
			name: data?.name,
			private: data?.private,
			watchers: data?.watchers,
			has_issues: data?.has_issues,
			has_projects: data?.has_projects,
			description: data?.description,
			owner: data?.owner,
			license: data?.license
		})
	}
}
