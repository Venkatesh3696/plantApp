import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PlantsAndPots from './pages/PlantsAndPots';
import Thanking from './pages/Thanking';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route
				// path='plantsandpots'
				path='/'
				element={<PlantsAndPots />}
			/>
			<Route
				path='/order-placed'
				element={<Thanking />}
			/>
		</Routes>
	);
}

export default App;
