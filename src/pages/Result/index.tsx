import React from 'react';
import { QuestionProps } from '../../types';

function Result() {
	const questions: QuestionProps[] = JSON.parse(localStorage.getItem('questions') || '');

	return (
		<main>
			<h1>Result</h1>

			<ul>
				{questions.map((q, index) => (
					<li key={index}>
						{q.question}
					</li>
				))}
			</ul>
		</main>
	);
}

export default Result;
