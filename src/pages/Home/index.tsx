import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import api from '../../services/api';
import { QuestionProps } from '../../types';
import { shuffle } from '../../utils/functions';

function Home() {
	const [showButtons, setShowButtons] = useState(false);
	const [num, setNum] = useState('');
	const { setQuestions } = useQuestions();
	const navigate = useNavigate();

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.valueAsNumber > 0) setShowButtons(true);
		else setShowButtons(false);

		setNum(e.target.value);
	}

	function handleCancel() {
		setNum('');
		setShowButtons(false);
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();

		await api.get(`?amount=${num}`).then(res => {
			const parsedJson = res.data.results.map((item: QuestionProps) => {
				item.selected_answer = '', item.answers = [item.correct_answer, ...item.incorrect_answers];

				shuffle(item.answers);

				return item;
			});

			setQuestions(parsedJson);

			navigate('/questions');
		}).catch(error => console.error(error));
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
