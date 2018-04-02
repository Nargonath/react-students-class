import { connect } from 'react-redux';

import { AddStudentForm } from 'components/AddStudentForm';
import { addStudentRequest } from 'store/actionCreators';

const mapStateToProps = ({ students: { isAdding, addError } }) => {
  return { isAdding, addError };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: studentData => dispatch(addStudentRequest(studentData)),
});
const NewStudent = connect(mapStateToProps, mapDispatchToProps)(AddStudentForm);

export { NewStudent };
