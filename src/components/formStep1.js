import React, { Component } from 'react';

class FormStep1 extends Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
          return null
        }
        // The markup for the Step 1 UI
        return(
          <div className="form-group">
            <label>Var vinen god?</label>
          </div>
        )
      }
    }

export default FormStep1;