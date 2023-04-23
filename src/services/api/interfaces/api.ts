interface IAPI {
	http<TResponse = any>(params?: any): Promise<TResponse>
}

export default IAPI
