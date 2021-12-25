import styled from 'styled-components';
import * as color from '../../components/UI/variables';

export const Subtitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 500;
	margin: 1.5625rem 0;
`;

export const Card = styled.div`
	background-color: ${color.inverseTertiary};
	border: none;
	border-bottom: 2px solid ${color.secondary};
	border-radius: 5px;
	font-size: 1.125rem;
	margin-bottom: 1.5625rem;
	padding: 1.5625rem;
`;

export const CardTitle = styled.p`
	margin: 1.25rem 0;
`;

export const CardItem = styled.li`
	margin-bottom: 1.25rem;

	:first-child {
		margin-top: 1.25rem;
	}
`;
