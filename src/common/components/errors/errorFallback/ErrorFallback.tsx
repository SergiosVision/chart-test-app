import { FC } from 'react'
import { FallbackProps, useErrorBoundary } from 'react-error-boundary'

import PrimaryButton from '@components/ui/buttons/primaryButton/PrimaryButton'
import BaseErrorText from '@components/ui/typography/BaseErrorText'
import BaseText from '@components/ui/typography/baseText/BaseText'

import styles from './ErrorFallback.module.scss'

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
	const { resetBoundary } = useErrorBoundary()

	return (
		<div className={styles.wrapper}>
			<BaseErrorText>Something went wrong:</BaseErrorText>
			<BaseText className='text-base text-center'>{error?.message}</BaseText>
			<PrimaryButton onClick={resetBoundary}>Retry</PrimaryButton>
		</div>
	)
}

export default ErrorFallback
