import styled from 'styled-components';
import Switch from 'react-switch';

export const ReactSwitch = styled(Switch)`
	position: absolute !important;
	right: .625rem;
	top: 2rem;

	@media(min-width: 992px) {
		right: 0;
	}
`;
