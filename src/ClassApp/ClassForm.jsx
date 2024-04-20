import React, { Component } from 'react';
import { ErrorMessage } from '../ErrorMessage';
import { ClassTextInput } from './ClassTextInput';
import { ClassPhoneInput } from './ClassPhoneInput';
import { isEmailValid, isNumberValid } from '../utils/validations';
import { allCities } from '../utils/all-cities';
import { ClassCityInput } from './ClassCityInput';

const firstNameErrorMessage = 'First name must be at least 2 characters long';
const lastNameErrorMessage = 'Last name must be at least 2 characters long';
const emailErrorMessage = 'Email is Invalid';
const cityErrorMessage = 'State is Invalid';
const phoneNumberErrorMessage = 'Invalid Phone Number';

export class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phoneNumberInput: ['', '', '', ''],
    };
  }

  reset = () => {
    this.setState({
      isSubmitted: false,
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      phoneNumberInput: ['', '', '', ''],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSubmitted: true });

    const {
      firstName,
      lastName,
      email,
      city,
      phoneNumberInput,
    } = this.state;

    const isFirstNameValid = firstName.length > 2;
    const isLastNameValid = lastName.length > 2;
    const isEmailValidFlag = isEmailValid(email);
    const isCityValid = allCities.includes(city);
    const isPhoneNumberValid = isNumberValid(phoneNumberInput.join(''));

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValidFlag &&
      isCityValid &&
      isPhoneNumberValid
    ) {
      const userData = {
        firstName,
        lastName,
        email,
        city,
        phoneNumber: phoneNumberInput.join(''),
      };

      if (this.props.onSubmit) {
        this.props.onSubmit(userData);
      }

      this.reset(); 
    }
  };

  render() {
    const {
      isSubmitted,
      firstName,
      lastName,
      email,
      city,
      phoneNumberInput,
    } = this.state;

    const isFirstNameValid = firstName.length > 2;
    const isLastNameValid = lastName.length > 2;
    const isEmailValidFlag = isEmailValid(email);
    const isCityValid = allCities.includes(city);
    const isPhoneNumberValid = isNumberValid(phoneNumberInput.join(''));

    const shouldShowFirstNameError = isSubmitted && !isFirstNameValid;
    const shouldShowLastNameError = isSubmitted && !isLastNameValid;
    const shouldShowEmailError = isSubmitted && !isEmailValidFlag;
    const shouldShowCityError = isSubmitted && !isCityValid;
    const shouldShowPhoneNumberError = isSubmitted && !isPhoneNumberValid;

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>
        <ClassTextInput
          labelText="First Name:"
          inputProps={{
            placeholder: 'Bilbo',
            value: firstName,
            onChange: (e) => this.setState({ firstName: e.target.value }),
          }}
        />
        <ErrorMessage
          message={firstNameErrorMessage}
          show={shouldShowFirstNameError}
        />

        <ClassTextInput
          labelText="Last Name:"
          inputProps={{
            placeholder: 'Baggins',
            value: lastName,
            onChange: (e) => this.setState({ lastName: e.target.value }),
          }}
        />
        <ErrorMessage
          message={lastNameErrorMessage}
          show={shouldShowLastNameError}
        />

        <ClassTextInput
          labelText="Email:"
          inputProps={{
            placeholder: 'bilbo-baggins@adventurehobbits.ne',
            value: email,
            onChange: (e) => this.setState({ email: e.target.value }),
          }}
        />
        <ErrorMessage
          message={emailErrorMessage}
          show={shouldShowEmailError}
        />

        <ClassCityInput
          labelText={'City:'}
          inputProps={{
            placeholder: 'Hobbiton',
            value: city,
            onChange: (e) => this.setState({ city: e.target.value }),
          }}
        />
        <ErrorMessage
          message={cityErrorMessage}
          show={shouldShowCityError}
        />

        <ClassPhoneInput
          labelText={'Phone:'}
          phoneNumberInput={phoneNumberInput}
          setPhoneNumberInput={(input) => this.setState({ phoneNumberInput: input })}
        />

        <ErrorMessage
          message={phoneNumberErrorMessage}
          show={shouldShowPhoneNumberError}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}



