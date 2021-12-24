import React from 'react';
import { QuestionProps } from '../../types';

function Result() {
	const questions: QuestionProps[] = JSON.parse(localStorage.getItem('result') || '');

	return (
		<main className='container'>
			<h1 className='title'>Result</h1>
			<p>score of {questions.length} questions answered correctly</p>

			{questions.map((q, q_index) => (
				<div key={q_index}>
					<div className='flex'>
						<span>{q.category}</span>
						<span>{q.difficulty}</span>
					</div>

					<p>{q.question}</p>

					<span>Selected answer: {q.selected_answer != q.correct_answer ? <em>{q.selected_answer}</em> : <b>{q.selected_answer}</b>}</span>

					<ul>
						{q.answers.map((answer, a_index) => (
							<li key={a_index}>{answer}</li>
						))}
					</ul>

					<span>Correct answer: {q.correct_answer}</span>
				</div>
			))}
		</main>
	);
}

export default Result;
