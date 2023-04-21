import {object, string, number, boolean} from 'yup'

import {Model} from '@utils/model'

import {IRepositoryDetailsOutput} from './RepositoryDetailsOutput'

export class RepositoryDetailsOutputModel extends Model implements IRepositoryDetailsOutput {
	id: IRepositoryDetailsOutput['id'] = null
	name: IRepositoryDetailsOutput['name'] = null
	private: IRepositoryDetailsOutput['private'] = false
	watchers: IRepositoryDetailsOutput['watchers'] = 0
	has_issues: IRepositoryDetailsOutput['has_issues'] = false
	has_projects: IRepositoryDetailsOutput['has_projects'] = false
	description: IRepositoryDetailsOutput['description'] = null
	owner: IRepositoryDetailsOutput['owner'] = null
	license: IRepositoryDetailsOutput['license'] = null

	constructor(data: Partial<IRepositoryDetailsOutput>) {
		super()

		if (data?.id) {
			this.id = data.id
		}

		if (data?.name) {
			this.name = data.name
		}

		if (data?.private) {
			this.private = data.private
		}

		if (data?.watchers) {
			this.watchers = data.watchers
		}

		if (data?.has_issues) {
			this.has_issues = data.has_issues
		}

		if (data?.has_projects) {
			this.has_projects = data.has_projects
		}

		if (data?.description) {
			this.description = data.description
		}

		if (data?.owner) {
			this.owner = data.owner
		}

		if (data?.license) {
			this.license = data.license
		}
	}

	getSchema() {
		return object().shape({
			id: string().nullable(),
			name: string().nullable(),
			private: boolean(),
			watchers: number(),
			has_issues: boolean(),
			has_projects: boolean(),
			description: string().nullable(),
			owner: object().nullable(),
			license: object().nullable()
		})
	}
}
