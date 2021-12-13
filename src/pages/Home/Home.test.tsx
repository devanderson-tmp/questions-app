import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
	it('has a title', () => {
		render(<Home />);

		const title = screen.getByText(/^Welcome to the Questions App!!$/);

		expect(title).toBeInTheDocument();
	});

	it('when user to input a number bigger than zero, should show a start button', () => {
		render(<Home />);

		const num = screen.getByTestId('num') as HTMLInputElement;
		fireEvent.change(num, { target: { value: 1 } });
		const start = screen.getByText('Start');

		expect(num.valueAsNumber).toBeGreaterThan(0);
		expect(start).toBeInTheDocument();
	});

	it('when user to input a number bigger than zero, should show a cancel button', () => {
		render(<Home />);

		const num = screen.getByTestId('num') as HTMLInputElement;
		fireEvent.change(num, { target: { value: 1 } });
		const cancel = screen.getByText('Cancel');

		expect(num.valueAsNumber).toBeGreaterThan(0);
		expect(cancel).toBeInTheDocument();
	});
});
