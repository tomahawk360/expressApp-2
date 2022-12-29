import './App.css';
import loginPage from './pages/loginPage/loginPage';
import indexPage from './pages/indexPage/indexPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  	return (
		<div>
			<Routes>
				<Route path='/' element={loginPage()} />
				<Route path='/index' element={indexPage()} />
			</Routes>
		</div>
  	);
}

export default App;
