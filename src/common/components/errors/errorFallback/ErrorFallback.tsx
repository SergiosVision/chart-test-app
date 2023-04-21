import {FC} from 'react'
import {useErrorBoundary, FallbackProps} from 'react-error-boundary'

import BaseErrorText from '@components/ui/typography/BaseErrorText'
import PrimaryButton from '@components/ui/buttons/primaryButton/PrimaryButton'

import styles from './ErrorFallback.module.scss'

const ErrorFallback: FC<FallbackProps> = ({error}) => {
	const {resetBoundary} = useErrorBoundary()

	return (
		<div className={styles.wrapper}>
			<BaseErrorText>Something went wrong:</BaseErrorText>
			<p className='text-base text-center'>{error?.message}</p>
			<PrimaryButton onClick={resetBoundary}>Retry</PrimaryButton>
		</div>
	)
}

export default ErrorFallback
