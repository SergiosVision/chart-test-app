import { makeObservable, observable } from 'mobx'

import { ValueOrNull } from '@common/types/interfaces/common'

import { RepositoriesListOutputModel } from '../../domain/models/repositoriesList/repositoriesListOutput/RepositoriesListOutputModel'
import { GetRepositoriesListCase } from '../../domain/usecases/getRepositoriesListCase'

interface UseCases {
	getRepositoriesListCase: GetRepositoriesListCase
}

export class RepositoriesListViewModel {
	private readonly useCases: ValueOrNull<UseCases> = null

	public isLoading = false
	public list: RepositoriesListOutputModel[] = []

	constructor(useCases: UseCases) {
		this.useCases = useCases

		makeObservable(this, {
			isLoading: observable,
			list: observable
		})
	}

	async getRepositoriesList(): Promise<void> {
		this.isLoading = true

		try {
			const response =
				await this.useCases?.getRepositoriesListCase.getRepositoriesList()

			if (response) {
				this.list = response
			}
		} finally {
			this.isLoading = false
		}
	}
}
