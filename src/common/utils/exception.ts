export class ApplicationException extends Error {
	constructor(message: string) {
		super(message)
	}
}

export class ValidationError extends ApplicationException {}
