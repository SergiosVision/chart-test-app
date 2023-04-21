import {FC, ReactNode} from 'react'

import classNames from '@utils/helpers/classNames'

import styles from './TitledText.module.scss'

interface Props {
	title?: ReactNode
	subTitle?: ReactNode
	className?: string
	classNameTitle?: string
	classNameSubtitle?: string
}

const TitledText: FC<Props> = ({title, subTitle, classNameSubtitle, className, classNameTitle }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			{title && <span className={classNames(styles.title, classNameTitle)}>{title}</span>}
			<p className={classNames(styles.subtitle, classNameSubtitle)}>{subTitle || '-'}</p>
		</div>
	)
}

export default TitledText
