import React from "react";
import Note from "./Note";

import './Main.css';

export default class Main extends React.Component {

    render () {

        console.log ( this.props.notes );

        return (

            <div>

			    { this.props.notes.map ( note => ( 

                    <Note key = { note.id } content = { note.content } folderId = { note.folderId } id = { note.id } name = { note.name } modified = { note.modified }  />

		        ))}

                <div id="add-note-button-container">

                    <button className = "add-note-button">Add Note</button>
                    
                </div>

			</div>		
        );

    }

}