import React from 'react';

import Folder from './Folder';

import './Sidebar.css';

export default class Sidebar extends React.Component {

	render() {

		return (

			<section id = "sidebar-container">
				
				{ this.props.folders.map ( folder => ( 

					<Folder key = { folder.id } id = { folder.id } name = { folder.name }  />

				))}

			</section>

		);

	}

}