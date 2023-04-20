import {RepositoryImpl} from '../../data/repository'
import {GetRepositoriesListBaseError} from '../../helpers/exceptions'
import {IRepositoriesListResponseModel} from '../models/repositoriesList/repositoriesListResponse/interfaces'
import {RepositoriesListOutputModel} from '../models/repositoriesList/repositoriesListOutput/RepositoriesListOutput'

export class GetRepositoriesListCase {
	private repository: RepositoryImpl | null = null

	constructor(repo: RepositoryImpl) {
		this.repository = repo
	}

	async getRepositoriesList () {
		try {
			const response = await this.repository?.getRepositoriesList()

			return this.convertRepositoriesListData(response || [])
		} catch (error: any) {
			throw new GetRepositoriesListBaseError(error?.message)
		}
	}

	private convertRepositoriesListData (data: IRepositoriesListResponseModel[]) {
		return data.map(item => new RepositoriesListOutputModel({
			id: item?.id,
			name: item?.name,
			private: item?.private,
			description: item?.description,
			owner: item?.owner,
			watchers: item?.watchers
		}))
	}
}
