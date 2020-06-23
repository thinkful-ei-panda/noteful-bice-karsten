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
		//console.log ( this.state );
		return (

		<div className="App">

			<Header />
			
			<section>

				<Route render = {(routerProps) => ( <Sidebar folders = { this.state.folders } { ...routerProps } /> ) } />

			</section>

			<Route path = "/" component = { Content } />

		</div>

		);

	}

}
