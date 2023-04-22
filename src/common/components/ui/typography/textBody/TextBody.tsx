import { FC } from 'react'

import BaseText, { BaseTextProps } from '../baseText/BaseText'

import classNames from '@/common/utils/helpers/classNames'

export type TextBodyProps = BaseTextProps

const TextBody: FC<TextBodyProps> = props => {
	const { className, children, as = 'p', ...rest } = props

	return (
		<BaseText className={classNames('text-xs', className)} as={as} {...rest}>
			{children}
		</BaseText>
	)
}

export default TextBody
