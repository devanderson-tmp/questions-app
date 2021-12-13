import React, { ChangeEvent, FormEvent, useState } from 'react';

function Home() {
	const [showButtons, setShowButtons] = useState(false);
	const [num, setNum] = useState('');

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.valueAsNumber > 0) setShowButtons(true);
		else setShowButtons(false);

		setNum(e.target.value);
	}

	function handleCancel() {
		setNum('');
		setShowButtons(false);
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		console.log(num);
	}

	return (
		<main>
			<h1>Welcome to the Questions App!!</h1>
			<p>How many questions do you want to answer?</p>

			<form onSubmit={handleSubmit}>
				<input type="number" name="num" id="num" value={num} onChange={handleChange} data-testid='num' />

				{showButtons && (
					<div>
						<button type="button" onClick={handleCancel}>Cancel</button>
						<button type="submit">Start</button>
					</div>
				)}
			</form>
		</main>
	);
}

export default Home;
