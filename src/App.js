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
			
			<div id = "flex-wrapper">

				<Route render = { ( routerProps ) => ( <Sidebar folders = { this.state.folders } { ...routerProps } /> ) } />

				<Route render = { ( routerProps ) => ( <Content notes = { this.state.notes } { ...routerProps } /> ) } />

			</div>

		</div>

		);

	}

}
