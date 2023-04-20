import {makeObservable, observable} from 'mobx'

import {GetRepositoriesListCase} from '../../domain/usecases/getRepositoriesListCase'
import {IRepositoriesListOutputModel} from '../../domain/models/repositoriesList/repositoriesListOutput/interfaces'

interface UseCases {
	getRepositoriesListCase: GetRepositoriesListCase
}

export class RepositoriesListViewModel {
	private useCases: UseCases | null = null

	public isLoading = false
 	public list: IRepositoriesListOutputModel[] = []
	public error: any = null

	constructor (useCases: UseCases) {
		this.useCases = useCases

		makeObservable(this, {
			isLoading: observable,
			list: observable,
			error: observable
		})
	}

	async getRepositoriesList (): Promise<void> {
		this.isLoading = true

		try {
			const response = await this.useCases?.getRepositoriesListCase.getRepositoriesList()

			if (response) {
				this.list = response as unknown as IRepositoriesListOutputModel[]
			}
		} finally {
			this.isLoading = false
		}
	}
}
