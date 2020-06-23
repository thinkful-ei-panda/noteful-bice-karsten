import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';

import './Content.css';

export default class Content extends React.Component {

	render () {

        //console.log ( this.props.notes );

        return (

			<main>

				<Route render = { ( routerProps ) => ( <Main notes = { this.props.notes } { ...routerProps } /> ) } />

			</main>

        );

	}

}
