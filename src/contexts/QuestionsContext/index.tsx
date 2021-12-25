import React, { createContext, useState } from 'react';
import { QCInterface, QuestionProps } from '../../types';

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
