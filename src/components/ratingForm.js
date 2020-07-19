import React, { Component } from 'react';
import FormStep1 from './formStep1';
import FormStep2 from './formStep2';
import FormStep3 from './formStep3';
import $ from 'jquery'

class RatingForm extends Component {

    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
          currentStep: 1, // Default is Step 1
          like: false,
          comment: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLikeChange = this.handleLikeChange.bind(this);
        this._next = this._next.bind(this);
        this._hide = this._hide.bind(this);
    }
     // Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
        [name]: value
        })    
    }
    // Handle hands up and down buttons
    handleLikeChange(event) {
        this.setState({
        like: event.target.parentElement.value
        })
        this._next()
    }


    // Trigger an alert on form submission or potential post
    handleSubmit = (event) => {
        event.preventDefault()
        const {like, comment} = this.state
        console.log(`Your rating details: \n 
        Like?: ${like} \n 
        Comment: ${comment}`);
        //Hide Form
        $('#wine-rating-form').addClass('hideForm')
        $('#wine-rating-form').attr("rated", "yes");
    }

    // navigates through the form
    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        });
    }

    // Hide form and reset status to 1
    _hide() {
        // Reset form status to 1
        this.setState({
          currentStep: 1
        });
        //Hide Form
        $('#wine-rating-form').addClass('hideForm')
    }

    //button getters
        //SEND button
        get nextButton(){
            let currentStep = this.state.currentStep;
            // If the current step is 2, then render the "next" button
            if(currentStep ===2){
              return (
                <button 
                  className="send-button" 
                  type="button" onClick={this._next}>
                    Send
                </button>
                )}
            // ...else render nothing
            return null;
        }
        //HANDSUP AND DOWN buttons
        get likesButton(){
            let currentStep = this.state.currentStep;
            // If the current step is 2, then render the "next" button
            if(currentStep ===1){
              return (
                  <div className="like-button-wrapper">
                    <button 
                        className="like-button"
                        type="button" value={true} onClick={this.handleLikeChange}>
                                <img src="./img/icons/handsup.png" alt=""/>

                    </button>    
                    <button 
                        className="like-button"
                        type="button" value={false} onClick={this.handleLikeChange}>
                            <img src="./img/icons/handsdown.png" alt=""/>
                    </button>     
                  </div>
              )}
            // ...else render nothing
            return null;
        }

        //Hide button
        get hideButton(){
            return (
                <button 
                className="hide-button" 
                type="button" onClick={this._hide}>
                    <i className="fas fa-times"></i>
                </button>
        )
        }

    render() {
        return (
            <React.Fragment>
                <form id="wine-rating-form" className="hideForm" rated="no" onSubmit={this.handleSubmit}>
                    <FormStep1 
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleLikeChange}
                        like={this.state.like}
                    />
                    <FormStep2 
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        comment={this.state.comment}
                    />
                    <FormStep3 
                        currentStep={this.state.currentStep} 
                    />       
                    {this.nextButton}
                    {this.likesButton}
                    {this.hideButton}
                </form>
            </React.Fragment>
        );
    }
}

export default RatingForm;