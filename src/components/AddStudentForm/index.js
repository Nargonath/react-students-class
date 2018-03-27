import React, { Component } from 'react';
import { func } from 'prop-types';

const initialState = { firstname: '', lastname: '' };

class AddStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(initialState);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          placeholder="firstname"
          type="text"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
          required
        />
        <input
          placeholder="lastname"
          type="text"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange}
          required
        />
        <button type="submit" name="submit">
          Create
        </button>
      </form>
    );
  }
}

AddStudentForm.propTypes = {
  onSubmit: func.isRequired,
};

export { AddStudentForm };
