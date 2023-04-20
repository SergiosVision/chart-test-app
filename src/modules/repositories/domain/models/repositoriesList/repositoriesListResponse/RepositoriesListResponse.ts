import {object, string, number, boolean} from 'yup'

import {Model} from '@utils/model'

import {IRepositoriesListResponseModel} from './interfaces'

export class RepositoriesListResponseModel extends Model<IRepositoriesListResponseModel> {
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
