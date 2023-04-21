import {FC, ReactNode} from 'react'

import classNames from '@utils/helpers/classNames'

import styles from './TitledSection.module.scss'

interface Props {
	title: ReactNode
	className?: string
	classNameTitle?: string
	children?: ReactNode
}

const TitledSection: FC<Props> = ({title, classNameTitle, className, children}) => {
	return (
		<section className={classNames(styles.wrapper, className)}>
			{typeof title === 'string' ? <h2 className={classNames(classNameTitle, 'mb-4 text-2xl')}>{title}</h2> : title}
			{children}
		</section>
	)
}

export default TitledSection
