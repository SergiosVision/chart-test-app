import { FC, ReactNode } from 'react'

import BaseText from '@components/ui/typography/baseText/BaseText'
import TextBody from '@components/ui/typography/textBody/TextBody'

import classNames from '@utils/helpers/classNames'

import styles from './TitledText.module.scss'

interface Props {
	title?: ReactNode
	subTitle?: ReactNode
	className?: string
	classNameTitle?: string
	classNameSubtitle?: string
}

const TitledText: FC<Props> = ({
	title,
	subTitle,
	classNameSubtitle,
	className,
	classNameTitle
}) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			{title && (
				<TextBody
					as='span'
					className={classNames(styles.title, classNameTitle)}
				>
					{title}
				</TextBody>
			)}
			<BaseText className={classNames(styles.subtitle, classNameSubtitle)}>
				{subTitle || '-'}
			</BaseText>
		</div>
	)
}

export default TitledText
