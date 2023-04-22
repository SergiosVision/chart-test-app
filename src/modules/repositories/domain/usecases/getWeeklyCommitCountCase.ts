import { ValueOrNull } from '@common/types/interfaces/common'

import { RepositoryImpl } from '../../data/repository'
import { GetWeeklyCommitCountBaseError } from '../../helpers/exceptions'
import IWeeklyCommitCountRequestParams from '../models/weeklyCommitCount/interfaces/WeeklyCommitCountRequestParams'
import { WeeklyCommitCountOutputModel } from '../models/weeklyCommitCount/weeklyCommitCountOutput/WeeklyCommitCountOutputModel'
import { WeeklyCommitCountResponseModel } from '../models/weeklyCommitCount/weeklyCommitCountResponse/WeeklyCommitCountResponseModel'

export class GetWeeklyCommitCountCase {
	private repository: ValueOrNull<RepositoryImpl> = null

	constructor(repo: RepositoryImpl) {
		this.repository = repo
	}

	async getWeeklyCommitCount(params: IWeeklyCommitCountRequestParams) {
		try {
			const response = await this.repository?.getWeeklyCommitCount(params)

			return this.convertWeeklyCommitCountData(response)
		} catch (error: any) {
			throw new GetWeeklyCommitCountBaseError(error?.message)
		}
	}

	private convertWeeklyCommitCountData(
		data?: Partial<WeeklyCommitCountResponseModel>
	) {
		return new WeeklyCommitCountOutputModel({
			all: data?.all,
			owner: data?.owner
		})
	}
}
