import React from 'react';
import InfoCard from '../../components/InfoCard';
import { QuestionProps } from '../../types';
import * as Styled from './style';

function Result() {
	const questions: QuestionProps[] = JSON.parse(localStorage.getItem('result') || '');
	const score: number = parseInt(localStorage['score']);

	return (
		<main className='container'>
			<h1 className='title'>Result</h1>
			<Styled.Subtitle>{score} of {questions.length} questions answered correctly</Styled.Subtitle>

			{questions.map((q, q_index) => (
				<Styled.Card key={q_index}>
					<InfoCard category={q.category} difficulty={q.difficulty} />

					<Styled.CardTitle dangerouslySetInnerHTML={{ __html: `${q_index + 1}. ${q.question}` }} />

					<div>Selected answer: <span className={q.selected_answer === q.correct_answer ? 'correct-answer' : 'incorrect-answer'}>{q.selected_answer}</span></div>

					<ul>
						{q.answers.map((answer, a_index) => (
							<Styled.CardItem
								key={a_index}
								className={answer === q.correct_answer ? 'correct-answer' : undefined}
							>
								{answer}
							</Styled.CardItem>
						))}
					</ul>
				</Styled.Card>
			))
			}
		</main >
	);
}

export default Result;
