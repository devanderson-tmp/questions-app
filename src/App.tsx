import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QuestionsContextProvider } from './contexts/QuestionsContext';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Result from './pages/Result';
import GlobalStyle from './components/GlobalStyle';

function App() {
	const [mode, setMode] = useState('light');

	const handleToggleMode = () => { setMode(mode === 'light' ? 'dark' : 'light'); };

	return (
		<QuestionsContextProvider>
			<ThemeProvider theme={{ mode }}>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/questions' element={<Questions />} />
						<Route path='/questions/result' element={<Result />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</QuestionsContextProvider>
	);
}

export default App;
