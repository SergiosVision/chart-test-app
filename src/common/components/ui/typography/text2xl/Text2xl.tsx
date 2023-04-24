import { FC } from 'react';

import BaseText, { BaseTextProps } from '../baseText/BaseText';

import classNames from '@/common/utils/helpers/classNames';

export type TextBodyProps = BaseTextProps;

const Text2xl: FC<TextBodyProps> = props => {
	const { className, children, as = 'h2', ...rest } = props;

	return (
		<BaseText className={classNames('text-2xl', className)} as={as} {...rest}>
			{children}
		</BaseText>
	);
};

export default Text2xl;
