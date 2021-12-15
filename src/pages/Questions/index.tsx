import React, { FormEvent } from 'react';
import useQuestions from '../../hooks/useQuestions';
import { QuestionProps } from '../../types';

function Questions() {
	const { questions, setQuestions } = useQuestions();

	function handleChange(e: FormEvent<HTMLInputElement>, q: QuestionProps, q_index: number) {
		const question = questions.filter((item, index) => {
			if (index === q_index) {
				item.selected_answer = e.currentTarget.value;
			}

			return item;
		});

		setQuestions(question);
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		console.log(questions);
	}

	return (
		<main>
			<h1>Questions</h1>

			<form onSubmit={handleSubmit}>
				{
					questions.map((q, q_index) => (
						<fieldset key={q_index}>
							<legend>{q.question}</legend>
							{
								q.answers.map((answer, a_index) => (
									<div key={a_index}>
										<input type="radio" name={`${q.question}`} id={`${answer}`} value={answer} onChange={(e) => handleChange(e, q, q_index)} />
										<label htmlFor={`${answer}`}>{answer}</label>
									</div>
								))
							}
						</fieldset>
					))
				}

				<button type="submit">Enviar</button>
			</form>
		</main>
	);
}

export default Questions;
