import { request } from '@octokit/request';

import IAPI from '../interfaces/api';

interface Request {
	method: 'GET' | 'POST';
	url: string;
	headers?: { [key: string]: any };
}

export class GithubApiService implements IAPI {
	async http<T>(req: Request) {
		const options = {
			url: req.url,
			method: req.method.toUpperCase(),
			headers: { Accept: 'application/json', ...(req?.headers || {}) }
		};

		const response = await request(options);

		return response?.data as T;
	}
}

const githubApiService = new GithubApiService();

export default githubApiService;
