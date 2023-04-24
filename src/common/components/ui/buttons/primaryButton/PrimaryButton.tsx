import { FC } from 'react';

import classNames from '@utils/helpers/classNames';

import BaseButton, { BaseButtonProps } from '../baseButton/BaseButton';

import styles from './PrimaryButton.module.scss';

type Props = BaseButtonProps;

const PrimaryButton: FC<Props> = ({ className, children, ...rest }) => {
	return (
		<BaseButton
			className={classNames(styles['primary-button'], className)}
			{...rest}
		>
			{children}
		</BaseButton>
	);
};

export default PrimaryButton;
