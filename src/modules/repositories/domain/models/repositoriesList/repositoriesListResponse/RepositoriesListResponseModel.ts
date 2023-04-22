import { boolean, number, object, string } from 'yup'

import { Model } from '@utils/model'

import { IRepositoriesListResponseModel } from './RepositoriesListResponse'

export class RepositoriesListResponseModel
	extends Model
	implements IRepositoriesListResponseModel
{
	id: IRepositoriesListResponseModel['id'] = null
	watchers: IRepositoriesListResponseModel['watchers'] = 0
	name: IRepositoriesListResponseModel['name'] = null
	private: IRepositoriesListResponseModel['private'] = false
	description: IRepositoriesListResponseModel['description'] = null
	owner: IRepositoriesListResponseModel['owner'] = null

	constructor(data: Partial<IRepositoriesListResponseModel>) {
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

	getSchema() {
		return object().shape({
			watchers: number(),
			private: boolean(),
			id: string().nullable(),
			name: string().nullable(),
			owner: object().nullable(),
			description: string().nullable()
		})
	}
}
