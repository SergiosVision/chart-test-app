import {makeObservable, observable} from 'mobx'

import {ValueOrNull} from '@common/types/interfaces/common'

import {GetRepositoryDetailsCase} from '../../domain/usecases/getRepositoryDetailsCase'
import {IRepositoryDetailsRequestParams} from '../../domain/models/repositoryDetails/interfaces/RepositoryDetailsRequestParams'
import {RepositoryDetailsOutputModel} from '../../domain/models/repositoryDetails/repositoryDetailsOutput/RepositoryDetailsOutputModel'

interface UseCases {
	getRepositoryDetailsCase: GetRepositoryDetailsCase
}

export class RepositoryDetailsViewModel {
	private readonly useCases: ValueOrNull<UseCases> = null

	public isLoading: boolean = false
	public data: ValueOrNull<RepositoryDetailsOutputModel> = null

	constructor(useCases: UseCases) {
		this.useCases = useCases

		makeObservable(this, {
			isLoading: observable,
			data: observable
		})
	}

	async getRepositoryDetails (params: IRepositoryDetailsRequestParams): Promise<void> {
		this.isLoading = true

		try {
			const response = await this.useCases?.getRepositoryDetailsCase.getRepositoryDetails(params)

			if (response) {
				this.data = response
			}
		} finally {
			this.isLoading = false
		}
	}
}
