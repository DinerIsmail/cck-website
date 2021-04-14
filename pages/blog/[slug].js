import { GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import { Box, Heading, Flex, StylesProvider } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';

import LayoutContainer from '@components/layout-container';
import styles from './post.module.scss';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

const Post = ({ post }) => {
	console.log(post.content);

	return (
		<LayoutContainer>
			<Flex flexDirection="column" py={6} mx={64}>
				<Box h={'350px'} bg={'gray.100'} mt={-6} mb={6} pos={'relative'}>
					<Image src={post.coverImage.url} layout="fill" objectFit="cover" />
				</Box>
				<Heading>{post.title}</Heading>
				<span>{dayjs(post.date).format('MMM DD, YYYY')}</span>
				<ReactMarkdown className={styles.content}>
					{post.content.markdown}
				</ReactMarkdown>
			</Flex>
		</LayoutContainer>
	);
};

export default Post;

export async function getStaticProps({ params }) {
	const { post } = await graphcms.request(
		`
		query ProductPageQuery($slug: String!){
			post(where: {slug: $slug}) {
				title
				date
				content {
					markdown
				}
				coverImage {
					url
				}
			}
		}`,
		{
			slug: params.slug,
		},
	);

	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
	const { posts } = await graphcms.request(`{
	posts {
		slug
		title
		}
	}`);

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: false,
	};
}
