import React from 'react'

import BaseContainer from '@components/layouts/containers/BaseContainer/BaseContainer'

const NotFound: React.FC = () => {
	return (
		<BaseContainer className='flex flex-col justify-center items-center flex-1'>
			<h1 className='text-8xl text-primary text uppercase mb-4'>404</h1>
			<p className='text-2xl'>Nothing found</p>
		</BaseContainer>
	)
}

export default NotFound
