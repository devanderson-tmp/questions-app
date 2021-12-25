import theme from 'styled-theming';

export const primary = theme('mode', {
	light: '#edfeff',
	dark: '#1c1c1c'
});

export const secondary = theme('mode', {
	light: '#007ba3',
	dark: '#0097a5'
});

export const tertiary = theme('mode', {
	light: '#30252f',
	dark: '#faffe2'
});

export const danger = theme('mode', {
	light: '#c0180a',
	dark: '#dc3545'
});

export const info = theme('mode', {
	light: '#423440',
	dark: '#faffe2'
});

export const inverseTertiary = theme('mode', {
	light: '#faffe2',
	dark: '#30252f'
});

export const success = theme('mode', {
	light: '#0db90d',
	dark: '#21cf21'
});
