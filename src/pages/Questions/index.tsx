import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import useQuestions from '../../hooks/useQuestions';

function Questions() {
	const { questions, setQuestions } = useQuestions();
	const navigate = useNavigate();

	return (
		<main>
			<h1>Questions</h1>

			<Formik
				initialValues={{ questions }}
				onSubmit={(values) => {
					setQuestions(values.questions);
					localStorage.setItem('questions', JSON.stringify(values.questions));
					navigate('result');
				}}
				validationSchema={Yup.object({
					questions: Yup.array().of(
						Yup.object().shape({
							selected_answer: Yup.string().required('required')
						})
					)
				})}
			>
				{({ errors, handleBlur, handleChange, touched, values }) => (
					<Form>
						<FieldArray
							name='questions'
							render={() => (
								values.questions.map((q, q_index) => {
									const name = `questions.${q_index}.selected_answer`;
									const error = getIn(errors, name);
									const errorTouched = getIn(touched, name);

									return (
										<fieldset key={q_index} style={error && errorTouched ? { borderColor: 'red' } : undefined}>
											<legend dangerouslySetInnerHTML={{ __html: q.question }} />

											{
												q.answers.map((answer, a_index) => (
													<div key={a_index}>
														<input type="radio" name={name} id={`${answer}`} value={answer} onBlur={handleBlur} onChange={handleChange} />
														<label htmlFor={`${answer}`}>{answer}</label>
													</div>
												))
											}
										</fieldset>
									);
								})
							)}
						/>

						<button type="submit">Send</button>
					</Form>
				)}
			</Formik>
		</main >
	);
}

export default Questions;
