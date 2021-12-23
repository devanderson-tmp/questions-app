import styled from 'styled-components';
import * as color from '../../components/UI/variables';

type ErrorProps = {
	error: any;
	errorTouched: any;
}

export const Title = styled.h1`
	margin-bottom: 1.5625rem;
`;

export const Card = styled.fieldset<ErrorProps>`
	background-color: ${color.inverseTertiary};
	border: none;
	border-bottom: 2px solid ${props => props.error && props.errorTouched ? color.danger : color.secondary};
	border-radius: 5px;
	font-size: 1.125rem;
	margin-bottom: 1.5625rem;
	padding: 1.5625rem;
`;

export const CardTitle = styled.legend`
	float: left;
	margin: 1.25rem 0;
`;

export const CardContent = styled.div`
	clear: left;
	margin-bottom: .625rem;

	:last-child {
		margin-bottom: 0;
	}
`;

export const CardOption = styled.input`
	margin-right: 0.625rem;
`;

export const CardInfo = styled.span<ErrorProps>`
	background-color: ${props => props.error && props.errorTouched ? color.danger : color.secondary};
	border-radius: 5px;
	color: #faffe2;
	display: inline-block;
	padding: .625rem;

	:first-child {
		margin-right: .625rem;
	}
`;

export const CardMsgErro = styled.div`
	clear: left;
	margin-bottom: 1.25rem;
`;

export const Button = styled.button`
	margin-bottom: 1.5625rem;
	margin-left: 0 !important;

	@media(min-width: 992px) {
		align-self: center;
	}
`;
