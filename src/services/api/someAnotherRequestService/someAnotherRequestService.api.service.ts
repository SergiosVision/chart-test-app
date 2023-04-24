import IAPI from '../interfaces/api';

export class SomeAnotherRequestService implements IAPI {
	async http<T>() {
		return {} as T;
	}
}

const someAnotherRequestService = new SomeAnotherRequestService();

export default someAnotherRequestService;
