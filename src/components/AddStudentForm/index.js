import React, { Component } from 'react';
import { func, bool } from 'prop-types';

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
  };

  isDisabled() {
    return this.props.isAdding || !this.state.firstname || !this.state.lastname;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isAdding && nextProps.isAdding === false && !nextProps.addError) {
      this.setState(initialState);
    }
  }

  render() {
    const { isAdding, addError } = this.props;

    let errorDisplay = null;
    if (addError) {
      errorDisplay = <div>{addError}</div>;
    }

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
        <button type="submit" name="submit" disabled={this.isDisabled()}>
          {isAdding ? 'Creating ...' : 'Create'}
        </button>

        {errorDisplay}
      </form>
    );
  }
}

AddStudentForm.propTypes = {
  onSubmit: func.isRequired,
  isFetching: bool,
};

export { AddStudentForm };
