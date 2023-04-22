import { FC } from 'react'

import BaseText, { BaseTextProps } from '../baseText/BaseText'

import classNames from '@/common/utils/helpers/classNames'

export type TextBodyProps = BaseTextProps

const Text8xl: FC<TextBodyProps> = props => {
	const { className, children, as = 'h1', ...rest } = props

	return (
		<BaseText className={classNames('text-8xl', className)} as={as} {...rest}>
			{children}
		</BaseText>
	)
}

export default Text8xl
