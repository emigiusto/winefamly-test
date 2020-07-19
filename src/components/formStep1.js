import React, { Component } from 'react';

class FormStep1 extends Component {
    render() {
        if (this.props.currentStep !== 1) {
          return null
        }
        return(
          <div className="form-group">
            <label>Var vinen god?</label>
          </div>
        )
      }
    }

export default FormStep1;