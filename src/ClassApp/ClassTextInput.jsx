import React, { Component } from "react";

export class ClassTextInput extends Component {
  render() {
    const { labelText, inputProps } = this.props;

    return (
      <div className="input-wrap">
        <label>{labelText}</label>
        <input {...inputProps} />
      </div>
    );
  }
}
