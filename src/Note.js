import React from "react";

import './Note.css';

export default class Note extends React.Component {

    render () {

        console.log ( this.props.id );

        return (

            <div className = "note" id = { this.props.id }>
					
				<div className = "note-name">

                    { this.props.name }
                    
				</div>

			</div>

        );

    }

}