import React, { Component } from 'react';
import './NoteForm.css';

export default class Revform extends Component{
    constructor(props){
        super(props);
        this.state = {
            reviewsCoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newReviewContent: e.target.value, // the value of the text input
        })
    }

    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addReview(this.state.newReviewContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newReviewContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Write a new note..."
                value={this.state.newReviewContent} 
                onChange={this.handleUserInput} />
                <button className="noteButton"
                onClick={this.writeReview}>Add Note</button>
            </div>
        )
    }
}

