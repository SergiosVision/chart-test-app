import { FC, ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from './errorFallback/ErrorFallback'

interface Props {
	children?: ReactNode
}

const ErrorBoundaryWrapper: FC<Props> = ({ children }) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
	)
}

export default ErrorBoundaryWrapper
