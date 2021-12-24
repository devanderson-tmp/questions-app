import React from 'react';
import * as Styled from './style';

type InfoProps = {
	category: string;
	difficulty: string;
	error?: any;
	errorTouched?: any;
}

function InfoCard(props: InfoProps) {
	return (
		<div>
			<Styled.CardInfo error={props.error} errorTouched={props.errorTouched}>{props.category}</Styled.CardInfo>
			<Styled.CardInfo error={props.error} errorTouched={props.errorTouched}>{props.difficulty}</Styled.CardInfo>
		</div>
	);
}

export default InfoCard;
