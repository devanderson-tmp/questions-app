import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useQuestions from '../../hooks/useQuestions';
import api from '../../services/api';
import { QuestionProps } from '../../types';
import { shuffle } from '../../utils/functions';

interface FormValues {
	num: number | string;
}

const schema = Yup.object().shape({
	num: Yup.number().min(1, 'Input a number greater than 0').required('Input a number greater than 0')
});

function Home() {
	const { setQuestions } = useQuestions();
	const navigate = useNavigate();

	const formik = useFormik<FormValues>({
		initialValues: { num: '' },
		onSubmit: async (e) => {
			await api.get(`?amount=${e.num}`).then(res => {
				const parsedJson = res.data.results.map((item: QuestionProps) => {
					item.selected_answer = '', item.answers = [item.correct_answer, ...item.incorrect_answers];

					shuffle(item.answers);

					return item;
				});

				setQuestions(parsedJson);

				navigate('/questions');
			}).catch(error => console.error(error));
		},
		validationSchema: schema
	});

	return (
		<main>
			<h1>Welcome to the Questions App!!</h1>

			<form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
				<div>
					<label htmlFor="num">How many questions do you want to answer?</label>
					<input type="number" name="num" id="num" data-testid='num' value={formik.values.num} onBlur={formik.handleBlur} onChange={formik.handleChange} />

					{formik.errors.num && formik.touched.num ? (
						<span role='alert'>{formik.errors.num}</span>
					) : null}
				</div>

				{formik.values.num > 0 && (
					<div>
						<button type="reset">Cancel</button>
						<button type="submit">Start</button>
					</div>
				)}
			</form>
		</main>
	);
}

export default Home;
