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
	const addToCartHandler = async () => {
		const existItem = cart.cartItems.find((x) => x._id === product._id);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		const { data } = await axios.get(`/api/products/${product._id}`);
		if (data.countInStock < quantity) {
			enqueueSnackBar("Sorry. We're out of stock.", { variant: 'error' });
			return;
		}
		dispatch({
			type: 'CART_ADD_ITEM',
			payload: {
				_key: product._id,
				name: product.name,
				countInStock: product.countInStock,
				slug: product.slug,
				price: product.price,
				image: urlForThumbnail(product.image),
				quantity,
			},
		});
		enqueueSnackbar(`${product.name} added to your cart`, {
			variant: 'success',
		});
		router.push('/cart');
	};
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
