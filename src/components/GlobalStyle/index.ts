import { createGlobalStyle } from 'styled-components';
import * as color from '../UI/variables';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${color.primary};
		color: ${color.tertiary};
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		letter-spacing: 4%;
	}

	a { text-decoration: none; }

	ul { list-style: none; }

	.container {
		padding: 0 .625rem;
		position: relative;

		@media(min-width: 992px) {
			margin: 0 auto;
			max-width: 1140px;
			padding: 0;
		}
	}

	.flex {
		display: flex;
	}

	.flex--column {
		flex-direction: column;
	}

	.flex--center {
		align-items: center;
		justify-content: center;
	}

	.flex--between {
		align-items: center;
		justify-content: space-between;
	}

	.error-msg {
		color: ${color.danger};
		font-size: 1.125rem;
		font-weight: 500;
	}

	.button {
		background-color: #007ba3;
		border: none;
		border-radius: 5px;
		color: #faffe2;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 500;
		padding: 1.25rem;

		:last-child {
			margin-left: .625rem;
		}

		&:focus, &:hover {
			filter: brightness(0.9);
		}
	}

	.title {
		font-size: 2.25rem;
		font-weight: 700;
	}

	.correct-answer::before {
		content: '✓';
		color: ${color.success};
	}

	.incorrect-answer::before {
		content: '✗';
		color: ${color.danger};
	}
`;

export default GlobalStyle;
