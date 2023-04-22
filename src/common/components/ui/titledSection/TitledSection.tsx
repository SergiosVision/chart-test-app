import { FC, ReactNode } from 'react'

import Text2xl from '@components/ui/typography/text2xl/Text2xl'

import classNames from '@utils/helpers/classNames'

import styles from './TitledSection.module.scss'

interface Props {
	title: ReactNode
	className?: string
	classNameTitle?: string
	children?: ReactNode
}

const TitledSection: FC<Props> = ({
	title,
	classNameTitle,
	className,
	children
}) => {
	return (
		<section className={classNames(styles.wrapper, className)}>
			{typeof title === 'string' ? (
				<Text2xl className={classNames(classNameTitle, 'mb-4')}>
					{title}
				</Text2xl>
			) : (
				title
			)}
			{children}
		</section>
	)
}

export default TitledSection
