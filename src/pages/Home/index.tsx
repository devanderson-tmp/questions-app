import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useQuestions from '../../hooks/useQuestions';
import api from '../../services/api';
import { QuestionProps } from '../../types';
import { shuffle } from '../../utils/functions';
import * as Styled from './style';

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
		<Styled.Main className='container flex flex--center flex--column'>
			<Styled.Title>Welcome to the Questions App!!</Styled.Title>

			<Styled.Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
				<div className='flex flex--column'>
					<Styled.Label htmlFor="num">How many questions do you want to answer?</Styled.Label>
					<Styled.Input
						type="number"
						name="num"
						id="num"
						data-testid='num'
						value={formik.values.num}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						error={formik.errors.num}
						touched={formik.touched.num}
					/>
				</div>

				<div className='flex flex--center' style={localStorage.length > 0 ? { marginBottom: '3.125rem' } : undefined}>
					{formik.values.num > 0 && (
						<>
							<Styled.ButtonCancel type="reset" className='button'>Cancel</Styled.ButtonCancel>
							<button type="submit" className='button'>Start</button>
						</>
					)}

					{formik.errors.num && formik.touched.num ? (
						<span role='alert' className='error-msg'>{formik.errors.num}</span>
					) : null}
				</div>
			</Styled.Form>

			{localStorage.length > 0 && <Styled.RecentlyLink to='/recently-answered-questions'>Recently answered questions</Styled.RecentlyLink>}
		</Styled.Main>
	);
}

export default Home;
