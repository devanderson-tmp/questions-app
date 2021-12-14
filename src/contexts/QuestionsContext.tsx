import React, { createContext, useState } from 'react';
import { QuestionProps } from '../types/question';

interface QCInterface {
	questions: QuestionProps[];
	setQuestions: (questions: QuestionProps[]) => void;
}

const QuestionsContext = createContext<QCInterface>({} as QCInterface);

function QuestionsContextProvider({ children }: { children: React.ReactNode }) {
	const [questions, setQuestions] = useState<QuestionProps[]>([]);

	return (
		<QuestionsContext.Provider value={{ questions, setQuestions }}>
			{children}
		</QuestionsContext.Provider>
	);
}

export { QuestionsContextProvider };
export default QuestionsContext;
