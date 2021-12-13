import React, { createContext, useState } from 'react';

const QuestionsContext = createContext({});

function QuestionsContextProvider({ children }: { children: React.ReactNode }) {
	const [questions, setQuestions] = useState([]);

	return (
		<QuestionsContext.Provider value={{ questions, setQuestions }}>
			{children}
		</QuestionsContext.Provider>
	);
}

export { QuestionsContextProvider };
export default QuestionsContext;
