import {FC, ReactNode} from 'react'

interface Props {
	children?: ReactNode
}

const BaseErrorText: FC<Props> = ({children}) => {
	return (
		<h3 className='text-3xl text-center text-primary'>
			{children}
		</h3>
	)
}

export default BaseErrorText
