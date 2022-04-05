import { createTheme } from '@mui/material/styles';
import { fontWeight } from '@mui/system';

export default function Layout({ title, description, children }) {
	const theme = createTheme({
		typography: {
			h1: {
				fontSize: '1.6rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
			h2: {
				fontSize: '1.4rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
		},
		palette: {
			mode: 'light',
			primary: {
				main: '#f0c000',
			},
			secondary: {
				main: '#208080',
			},
		},
	});
}
