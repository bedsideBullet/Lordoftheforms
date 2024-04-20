import React, { Component, createRef } from 'react';

export class ClassPhoneInput extends Component {
  constructor(props) {
    super(props);

    this.refsArray = [createRef(), createRef(), createRef(), createRef()];
  }

  createOnChangeHandler = (index) => (e) => {
    const { phoneNumberInput, setPhoneNumberInput } = this.props;

    const lengths = [2, 2, 2, 1]; 
    const currentMaxLength = lengths[index];
    const nextRef = this.refsArray[index + 1];
    const prevRef = this.refsArray[index - 1];
    const value = e.target.value;

    const shouldGoToNextRef =
      currentMaxLength === value.length && nextRef?.current;
    const shouldGoToPrevRef = value.length === 0 && prevRef?.current;

    const newState = phoneNumberInput.map((input, i) => {
      return i === index ? value : input;
    });

    if (shouldGoToNextRef) {
      nextRef.current.focus();
    }
    if (shouldGoToPrevRef) {
      prevRef.current.focus();
    }

    if (index === 3 && value.length > 1) {
      return;
    }

    setPhoneNumberInput(newState);
  };

  render() {
    const { labelText, phoneNumberInput } = this.props;

    return (
      <div className="input-wrap">
        <label htmlFor="phone">{labelText}</label>
        <div id="phone-input-wrap">
          <input
            type="number"
            id="phone-input-1"
            placeholder="55"
            value={phoneNumberInput[0]}
            onChange={this.createOnChangeHandler(0)}
            ref={this.refsArray[0]}
          />
          -
          <input
            type="number"
            id="phone-input-2"
            placeholder="55"
            value={phoneNumberInput[1]}
            onChange={this.createOnChangeHandler(1)}
            ref={this.refsArray[1]}
          />
          -
          <input
            type="number"
            id="phone-input-3"
            placeholder="55"
            value={phoneNumberInput[2]}
            onChange={this.createOnChangeHandler(2)}
            ref={this.refsArray[2]}
          />
          -
          <input
            type="number"
            id="phone-input-4"
            placeholder="5"
            value={phoneNumberInput[3]}
            onChange={this.createOnChangeHandler(3)}
            ref={this.refsArray[3]}
          />
        </div>
      </div>
    );
  }
}




