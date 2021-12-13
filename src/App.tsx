import React from 'react';
import { QuestionsContextProvider } from './contexts/QuestionsContext';
import Home from './pages/Home';

function App() {
	return (
		<QuestionsContextProvider>
			<Home />
		</QuestionsContextProvider>
	);
}

export default App;
