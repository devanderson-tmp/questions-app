import { useContext } from 'react';
import QuestionsContext from '../contexts/QuestionsContext';

function useQuestions() {
	const data = useContext(QuestionsContext);

	return data;
}

export default useQuestions;
