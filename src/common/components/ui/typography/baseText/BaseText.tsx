import { ElementType, FC, HTMLAttributes, ReactNode } from 'react';

export interface BaseTextProps extends HTMLAttributes<HTMLElement> {
	children?: ReactNode;
	as?: ElementType;
}

const BaseText: FC<BaseTextProps> = props => {
	const { as: Component = 'p', children, ...rest } = props;

	return <Component {...rest}>{children}</Component>;
};

export default BaseText;
