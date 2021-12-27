import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import useQuestions from '../../hooks/useQuestions';
import InfoCard from '../../components/InfoCard';
import Breadcrumb from '../../components/Breadcrumb';
import * as Styled from './style';

function Questions() {
	const { questions, setQuestions } = useQuestions();
	const navigate = useNavigate();

	return (
		<div>
			<Breadcrumb />

			<Styled.Title className='title'>Questions</Styled.Title>

			<Formik
				initialValues={{ questions }}
				onSubmit={(values) => {
					setQuestions(values.questions);
					localStorage.setItem('result', JSON.stringify(values.questions));

					const correct_answers = values.questions.filter(q => {
						if (q.selected_answer === q.correct_answer) return q;

						return false;
					});

					localStorage.setItem('score', `${correct_answers.length}`);

					navigate('/result');
				}}
				validationSchema={Yup.object({
					questions: Yup.array().of(
						Yup.object().shape({
							selected_answer: Yup.string().required('An answer is required!')
						})
					)
				})}
			>
				{({ errors, handleBlur, handleChange, touched, values }) => (
					<Form className='flex flex--column'>
						<FieldArray
							name='questions'
							render={() => (
								values.questions.map((q, q_index) => {
									const name = `questions.${q_index}.selected_answer`;
									const error = getIn(errors, name);
									const errorTouched = getIn(touched, name);

									return (
										<Styled.Card key={q_index} error={error} errorTouched={errorTouched}>
											<div className='flex flex--between'>
												<InfoCard category={q.category} difficulty={q.difficulty} error={error} errorTouched={errorTouched} />
												<span>{q_index + 1} of {values.questions.length}</span>
											</div>

											<Styled.CardTitle dangerouslySetInnerHTML={{ __html: `${q_index + 1}. ${q.question}` }} />

											{error && errorTouched && <Styled.CardMsgErro role='alert' className='error-msg'>{error}</Styled.CardMsgErro>}

											{
												q.answers.map((answer, a_index) => (
													<Styled.CardContent key={a_index}>
														<Styled.CardOption type="radio" name={name} id={`${answer}-${q_index}`} value={answer} onBlur={handleBlur} onChange={handleChange} />
														<label htmlFor={`${answer}-${q_index}`}>{answer}</label>
													</Styled.CardContent>
												))
											}
										</Styled.Card>
									);
								})
							)}
						/>

						{questions.length > 0 && <Styled.Button type="submit" className='button'>Send</Styled.Button>}
					</Form>
				)}
			</Formik>
		</div >
	);
}

export default Questions;
