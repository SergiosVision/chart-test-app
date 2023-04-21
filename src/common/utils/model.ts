import {ObjectSchema, object} from 'yup'
import defaultsDeep from 'lodash/defaultsDeep'

import { ValidationError } from '@utils/exception'

export class Model<T = {[key: string]: any}> {
	constructor(attributes: T) {
		defaultsDeep(this, attributes, this.defaults)

		this.validate()
	}

	get defaults () {
		return {}
	}

	validate () {
		const schema = this.getSchema()

		if (!schema) {
			throw new ValidationError('Schema is not defined')
		}

		schema.validateSync(this, {abortEarly: true})
	}

	getSchema(): ObjectSchema<{}> {
		return object().shape({})
	}
}
