import {boolean, number, object, string} from 'yup'

import {Model} from '@utils/model'

import {IRepositoriesListOutputModel} from './RepositoriesListOutput'

export class RepositoriesListOutputModel extends Model implements IRepositoriesListOutputModel {
	id: IRepositoriesListOutputModel['id'] = null
	watchers: IRepositoriesListOutputModel['watchers'] = 0
	name: IRepositoriesListOutputModel['name'] = null
	private: IRepositoriesListOutputModel['private'] = false
	description: IRepositoriesListOutputModel['description'] = null
	owner: IRepositoriesListOutputModel['owner'] = null

	constructor(data: Partial<IRepositoriesListOutputModel>) {
		super()

		if (data?.id) {
			this.id = data.id
		}

		if (data?.watchers) {
			this.watchers = data.watchers
		}

		if (data?.name) {
			this.name = data.name
		}

		if (data?.private) {
			this.private = data.private
		}

		if (data?.description) {
			this.description = data.description
		}

		if (data?.owner) {
			this.owner = data.owner
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
