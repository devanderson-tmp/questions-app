import { Link } from 'react-router-dom';
import styled from 'styled-components';

type InputProps = {
	error: string | undefined;
	touched: boolean | undefined;
}

export const Main = styled.main`
	height: 100vh;
	justify-content: center;
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 3.125rem;
`;

export const Form = styled.form`
	max-width: 705px;
`;

export const Label = styled.label`
	font-size: 1.5rem;
`;

export const Input = styled.input<InputProps>`
	background-color: #faffe2;
	border: 0;
	border-bottom: 2px solid ${props => props.error && props.touched ? '#c0180a' : '#007ba3'};
	border-radius: 5px;
	color: #30252f;
	font-size: 1.5rem;
	margin: 1.5625rem 0 3.125rem;
	padding: .625rem;
`;

export const ButtonCancel = styled.button`
	background-color: #c0180a;
`;

export const RecentlyLink = styled(Link)`
	color: #423440;
	font-size: 1.125rem;
	font-weight: 500;
	justify-self: flex-end;

	&:focus, &:hover {
		color: #30252f;
	}
`;
