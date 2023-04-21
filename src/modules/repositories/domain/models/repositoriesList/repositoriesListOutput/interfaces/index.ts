import {StringOrNull} from '@common/types/interfaces/common'

import {IOwner} from '../../../interfaces/owner'

export interface IRepositoriesListOutputModel {
	id: StringOrNull
	watchers: number
	name: StringOrNull
	private: boolean
	description: StringOrNull
	owner: IOwner
}
