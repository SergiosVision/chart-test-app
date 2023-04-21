import {StringOrNull, ValueOrNull} from '@common/types/interfaces/common'

import {IOwner} from '../../interfaces/owner'
import {ILicense} from '../../interfaces/license'
export interface IRepositoryDetailsOutput {
	id: StringOrNull
	name: StringOrNull
	private: boolean
	watchers: number
	has_issues: boolean
	has_projects: boolean
	description: StringOrNull
	owner: ValueOrNull<IOwner>
	license: ValueOrNull<ILicense>
}
