import { array, object } from 'yup'

import { Model } from '@utils/model'

import { IWeeklyCommitCountResponse } from './WeeklyCommitCountResponse'

export class WeeklyCommitCountResponseModel
	extends Model
	implements IWeeklyCommitCountResponse
{
	all: IWeeklyCommitCountResponse['all'] = []
	owner: IWeeklyCommitCountResponse['owner'] = []

	constructor(data: Partial<IWeeklyCommitCountResponse>) {
		super()

		if (data) {
			this.all = data?.all || []
			this.owner = data?.owner || []
		}
	}

	getSchema() {
		return object().shape({
			all: array(),
			owner: array()
		})
	}
}
