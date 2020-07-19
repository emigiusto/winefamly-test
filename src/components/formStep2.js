import React, { Component } from 'react';

class FormStep2 extends Component {
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
          }
        return (
            <div className="form-group">
                <textarea name="comment" value={this.props.comment} onChange={this.props.handleChange} placeholder="Skriv kommentar"></textarea>
            </div>
        );
    }
}

export default FormStep2;