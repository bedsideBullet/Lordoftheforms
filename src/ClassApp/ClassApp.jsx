import React, { Component } from 'react';
import { ProfileInformation } from '../ProfileInformation';
import { ClassForm } from './ClassForm';

export class ClassApp extends Component {
 
  state = {
    user: null
  }

  handleFormSubmit = (user) => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state; 
    return (
      <>
        <h2>Class Component</h2>
        <ProfileInformation userData={user} />
        <ClassForm onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}

