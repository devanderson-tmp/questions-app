import React from 'react';
import { ReactSwitch } from './style';

interface SwitchProps {
	mode: string;
	handleToggleMode: () => void;
}

function Switch(props: SwitchProps) {
	return (
		<ReactSwitch
			checked={props.mode === 'dark' ? true : false}
			onChange={props.handleToggleMode}
			checkedIcon={
				<div
					style={{
						alignItems: 'center',
						color: '#faffe2',
						display: 'flex',
						fontSize: 18,
						height: '100%',
						justifyContent: 'center',
					}}
				>
					☼
				</div>
			}
			uncheckedIcon={
				<div
					style={{
						alignItems: 'center',
						color: '#faffe2',
						display: 'flex',
						fontSize: 18,
						height: '100%',
						justifyContent: 'center',
					}}
				>
					☾
				</div>
			}
			offColor='#423440'
			onColor='#007ba3'
		/>
	);
}

export default Switch;
