import { Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Home() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const products = await client.fetch();
			} catch (err) {}
		};
	});

	return <Layout>List Products</Layout>;
}
