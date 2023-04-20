import { request } from '@octokit/request'

interface Request {
	method: 'GET' | 'POST'
	url: string
	headers?: {[key: string]: any}
}

export class GithubApiService {
	async http (req: Request) {
		const options = {
			url: req.url,
			method: req.method.toUpperCase(),
			headers: { Accept: 'application/json', ...(req?.headers || {}) },
		}

		let response

		try {
			response = await request(options)
		} catch (error) {
			throw error
		}

		return response
	}
}

const githubApiService = new GithubApiService()

export default githubApiService
