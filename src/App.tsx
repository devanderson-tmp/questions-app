import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionsContextProvider } from './contexts/QuestionsContext';
import Home from './pages/Home';

function App() {
	return (
		<QuestionsContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</QuestionsContextProvider>
	);
}

export default App;
