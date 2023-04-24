import { FC, ReactNode } from 'react'

import Text3xl from '@components/ui/typography/text3xl/Text3xl'

interface Props {
	children?: ReactNode
}

const BaseErrorText: FC<Props> = ({ children }) => {
	return <Text3xl className='text-center text-primary'>{children}</Text3xl>
}

export default BaseErrorText
