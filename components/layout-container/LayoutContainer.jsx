import { Box } from '@chakra-ui/react';

import Nav from '../nav';
import Footer from '@/components/footer';

const LayoutContainer = ({ children }) => {
	return (
		<div>
			<Nav />
			<Box minHeight="calc(100vh - 124px)">{children}</Box>
			<Footer />
		</div>
	);
};

export default LayoutContainer;
