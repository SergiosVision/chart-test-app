import {boolean, number, object, string} from 'yup'

import {Model} from '@utils/model'

import {IRepositoriesListOutputModel} from './interfaces'

export class RepositoriesListOutputModel extends Model<IRepositoriesListOutputModel> {
	get defaults () {
		return {
			id: null,
			watchers: 0,
			name: null,
			private: false,
			description: null,
			owner: null
		}
	}

	getSchema () {
		return object().shape({
			watchers: number(),
			private: boolean(),
			id: string().nullable(),
			name: string().nullable(),
			description: string().nullable(),
			owner: object().nullable()
		})
	}
}
