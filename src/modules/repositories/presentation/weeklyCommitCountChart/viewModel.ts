import { makeObservable, observable } from 'mobx'

import { ValueOrNull } from '@common/types/interfaces/common'

import IWeeklyCommitCountRequestParams from '../../domain/models/weeklyCommitCount/interfaces/WeeklyCommitCountRequestParams'
import { WeeklyCommitCountOutputModel } from '../../domain/models/weeklyCommitCount/weeklyCommitCountOutput/WeeklyCommitCountOutputModel'
import { GetWeeklyCommitCountCase } from '../../domain/usecases/getWeeklyCommitCountCase'

interface UseCases {
	getWeeklyCommitCountCase: GetWeeklyCommitCountCase
}

export class WeeklyCommitCountChartViewModel {
	private readonly useCases: ValueOrNull<UseCases> = null

	public isLoading = false
	public data: WeeklyCommitCountOutputModel = new WeeklyCommitCountOutputModel(
		{}
	)

	constructor(useCases: UseCases) {
		this.useCases = useCases

		makeObservable(this, {
			isLoading: observable,
			data: observable
		})
	}

	async getWeeklyCommitCount(
		params: IWeeklyCommitCountRequestParams
	): Promise<void> {
		this.isLoading = true

		try {
			const response =
				await this.useCases?.getWeeklyCommitCountCase.getWeeklyCommitCount(
					params
				)

			if (response) {
				this.data = response
			}
		} finally {
			this.isLoading = false
		}
	}
}
