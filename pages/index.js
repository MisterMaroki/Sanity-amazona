import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import classes from '../utils/classes';
import client from '../utils/client';

export default function Home() {
	const [state, setState] = useState({
		products: [],
		error: '',
		loading: true,
	});
	const { loading, error, products } = state;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const products = await client.fetch(`*[_type == "product"]`);
				setState({ products, loading: false });
			} catch (err) {
				setState({ loading: false, error: err.message });
			}
		};
		fetchData();
	}, []);

	return (
		<Layout>
			{loading ? (
				<CircularProgress />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : (
				<Grid container spacing={3}>
					{products.map((product) => (
						<Grid item md={4} sx={classes.centered} key={product.slug}>
							<ProductItem product={product}></ProductItem>
						</Grid>
					))}
				</Grid>
			)}
		</Layout>
	);
}
