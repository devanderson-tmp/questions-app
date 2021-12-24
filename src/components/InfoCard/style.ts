import styled from 'styled-components';
import * as color from '../UI/variables';
import { ErrorProps } from '../../types';

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
