import {array, object, number} from 'yup'

import {Model} from '@utils/model'

import {IWeeklyCommitCountOutput} from './WeeklyCommitCountOutput'

export class WeeklyCommitCountOutputModel extends Model implements IWeeklyCommitCountOutput {
	all: IWeeklyCommitCountOutput['all'] = []
	owner: IWeeklyCommitCountOutput['owner'] = []

	constructor(data: Partial<IWeeklyCommitCountOutput>) {
		super()

		if (data) {
			this.all = data?.all || []
			this.owner = data?.owner || []
		}
	}

	getSchema () {
		return object().shape({
			all: array().of(number()),
			owner: array().of(number())
		})
	}
}
