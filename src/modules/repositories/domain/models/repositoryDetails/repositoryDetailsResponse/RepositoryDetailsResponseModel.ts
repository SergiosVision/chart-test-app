import { boolean, number, object, string } from 'yup'

import { Model } from '@utils/model'

import { IRepositoryDetailsResponse } from './RepositoryDetailsResponse'

export class RepositoryDetailsResponseModel
	extends Model
	implements IRepositoryDetailsResponse
{
	id: IRepositoryDetailsResponse['id'] = null
	name: IRepositoryDetailsResponse['name'] = null
	private: IRepositoryDetailsResponse['private'] = false
	watchers: IRepositoryDetailsResponse['watchers'] = 0
	has_issues: IRepositoryDetailsResponse['has_issues'] = false
	has_projects: IRepositoryDetailsResponse['has_projects'] = false
	description: IRepositoryDetailsResponse['description'] = null
	owner: IRepositoryDetailsResponse['owner'] = null
	license: IRepositoryDetailsResponse['license'] = null

	constructor(data: Partial<IRepositoryDetailsResponse>) {
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
