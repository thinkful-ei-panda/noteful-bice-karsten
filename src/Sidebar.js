import React from 'react';

import Folder from './Folder';

import './Sidebar.css';

export default class Sidebar extends React.Component {

	render() {

		console.log ( this.props.folders);
		
		return (

			<div className = "Sidebar">
				
				{ this.props.folders.forEach ( ( folder, index ) => ( 

					<Folder id = { folder.id } name = { folder.name }  />

				))}

			</div>

		);

	}

}