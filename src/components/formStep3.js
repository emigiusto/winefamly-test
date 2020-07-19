import React, { Component } from 'react';

class FormStep3 extends Component {
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
          }
        return (
            <div className="form-group">
                <p className="tak-rating">Tak for din tid</p>
                <button className="go-back-button">Luk vinduet</button>
            </div>
        );
    }
}

export default FormStep3;