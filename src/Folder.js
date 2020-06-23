import React from "react";

import './Folder.css';

export default class Folder extends React.Component {

    render () {

        console.log ( this.props.id );

        return (

            <div className = "folder-container" id = { this.props.id }>
                
                <div className = "folder-name">
                
                    { this.props.name }
                
                </div>
                    
            </div>

        );

    }

}