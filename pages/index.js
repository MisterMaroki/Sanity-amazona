import { Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import client from '../utils/client';

export default function Home() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const products = await client.fetch(`*[_type == "product]`);
			} catch (err) {}
		};
	});

	return <Layout>List Products</Layout>;
}
