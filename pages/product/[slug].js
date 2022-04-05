import { useEffect, useState } from 'react';

export default function ProductScreen(props) {
	const { slug } = props;
	const { state, setState } = useState({
		product: null,
		loading: true,
		error: '',
	});
	const { product, loading, error } = state;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const product = await client;
			} catch (err) {}
		};
	}, []);
}

export function getServerSideProps(context) {
	return {
		props: { slug: context.params.slug },
	};
}
