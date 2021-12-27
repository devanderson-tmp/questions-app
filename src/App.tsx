import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QuestionsContextProvider } from './contexts/QuestionsContext';
import useStateToSaveThemeOnLocalStorage from './hooks/useStateToSaveThemeOnLocalStorage';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Result from './pages/Result';
import Switch from './components/Switch';
import GlobalStyle from './components/GlobalStyle';

function App() {
	const [mode, setMode] = useStateToSaveThemeOnLocalStorage('theme', 'light');

	const handleToggleMode = () => { setMode(mode === 'light' ? 'dark' : 'light'); };

	return (
		<QuestionsContextProvider>
			<ThemeProvider theme={{ mode }}>
				<GlobalStyle />
				<main className="container">
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/questions' element={<Questions />} />
							<Route path='/questions/result' element={<Result />} />
							<Route path='/recently-answered-questions' element={<Result />} />
						</Routes>
					</BrowserRouter>

					<Switch mode={mode} handleToggleMode={handleToggleMode} />
				</main>
			</ThemeProvider>
		</QuestionsContextProvider>
	);
}

export default App;
