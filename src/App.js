import React from 'react';
import { Route } from 'react-router-dom'
import { STORE } from './Store'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

export default class App extends React.Component {

	state = { ...STORE };

	render() {

		return (

		<div className="App">

			<Header />
			
			<section>

				<Route path = "/" component = { Sidebar } />
			
			</section>

			<Route path = "/" component = { Content } />

		</div>

		);

	}

}
