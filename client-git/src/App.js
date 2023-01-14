import React from 'react';
import './App.css';
import LoginPage from './pages/loginPage/loginPage';
import IndexPage from './pages/indexPage/indexPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  	return (
		<div>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/index' element={<IndexPage />} />
			</Routes>
		</div>
  	);
}

export default App;
