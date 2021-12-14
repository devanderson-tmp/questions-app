import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useQuestions from '../hooks/useQuestions';
import { QuestionsContextProvider } from './QuestionsContext';

describe('QuestionsContext', () => {
	it('should render ok', () => {
		const { result } = renderHook(() => useQuestions());

		expect(result.current).toBeDefined();
		expect(result.current).toEqual({});
	});

	it('setQuestions', () => {
		const wrapper = ({ children }: { children: React.ReactNode }) => {
			return (
				<QuestionsContextProvider>
					{children}
				</QuestionsContextProvider>
			);
		};

		const { result } = renderHook(() => useQuestions(), {
			wrapper
		});

		act(() => {
			result.current.setQuestions([{
				answers: ['False', 'True'],
				category: 'Entertainment: Film',
				correct_answer: 'True',
				difficulty: 'medium',
				incorrect_answers: ['False'],
				question: 'Sean Connery wasn\'t in "Indiana Jones and the Kingdom of the Crystal Skull" because he found retirement too enjoyable.',
				selected_answer: '',
				type: 'boolean'
			}]);
		});

		expect(result.current.questions).toHaveLength(1);
	});
});
