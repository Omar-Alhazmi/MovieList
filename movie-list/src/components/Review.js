import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

export default class Review extends Component{

    constructor(props){
        super(props);
        this.reviewContent = props.reviewContent; 
        this.reviewId = props.reviewId; 
        this.handleRemovereview = this.handleRemovereview.bind(this);
    }

    handleRemovereview(id){
        this.props.removereview(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemovereview(this.reviewId)}>
                      &times;
                </span>
                <p className="noteContent">{ this.reviewContent }</p>
            </div>
        )
    }
}

Review.propTypes = {
    reviewContent: PropTypes.string
}

