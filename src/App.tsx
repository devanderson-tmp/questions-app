import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionsContextProvider } from './contexts/QuestionsContext';
import Home from './pages/Home';
import Questions from './pages/Questions';

function App() {
	return (
		<QuestionsContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/questions' element={<Questions />} />
				</Routes>
			</BrowserRouter>
		</QuestionsContextProvider>
	);
}

export default App;
