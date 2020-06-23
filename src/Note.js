import React from "react";

import './Note.css';

export default class Note extends React.Component {

    render () {

        console.log ( this.props.id );

        return (

            <div className = "note" id = { this.props.id }>
					
				<div className = "note-name">

                    <h3>

                        { this.props.name }

                    </h3>

				</div>

                <div className = "note-modified">

                    { this.props.modified }
                    
				</div>

                <div className = "note-delete">

                    <button value = { this.props.id }>Delete</button>
                    
				</div>

			</div>

        );

    }

}