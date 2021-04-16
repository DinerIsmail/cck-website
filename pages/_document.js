import Document, { Html, Head, Main, NextScript } from 'next/document';

class UpdatedDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en-GB">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script
						async
						defer
						src="https://scripts.withcabin.com/hello.js"
					></script>
				</body>
			</Html>
		);
	}
}

export default UpdatedDocument;
