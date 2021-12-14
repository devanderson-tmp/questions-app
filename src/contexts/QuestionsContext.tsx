import React, { createContext, useState } from 'react';

interface QuestionProps {
	answers: string[];
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	selected_answer: string;
	type: string;
}

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
