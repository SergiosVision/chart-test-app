import React from 'react';

import BaseContainer from '@components/layouts/containers/BaseContainer/BaseContainer';
import Text2xl from '@components/ui/typography/text2xl/Text2xl';
import Text8xl from '@components/ui/typography/text8xl/Text8xl';

const NotFound: React.FC = () => {
	return (
		<BaseContainer className='flex flex-col justify-center items-center flex-1'>
			<Text8xl className='text-primary text uppercase mb-4'>404</Text8xl>
			<Text2xl as='p'>Nothing found</Text2xl>
		</BaseContainer>
	);
};

export default NotFound;
