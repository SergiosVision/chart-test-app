import {ObjectSchema, object} from 'yup'

import { ValidationError } from '@utils/exception'

export class Model {
	constructor() {
		this.validate()
	}

	get defaults () {
		return {}
	}

	private validate () {
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
