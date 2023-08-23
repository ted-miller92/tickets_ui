import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Tickets from './pages/Tickets';
import Items from './pages/Items';
import NewTicket from './pages/NewTicket';
import NewItem from './pages/NewItem';

import Navigation from './components/Navigation';

function App() {
	return (
		<div className="App">
			<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage/>}	/>
				<Route path="/tickets" element={<Tickets/>}	/>
				<Route path="/items" element={<Items/>}	/>
				<Route path="/new_ticket" element={<NewTicket/>} />
				<Route path="/new_item" element={<NewItem/>} />
			</Routes>
			</Router>
		</div>
	);
}

export default App;
