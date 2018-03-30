import { connect } from 'react-redux';

import { AddStudentForm } from 'components/AddStudentForm';
import { addStudentRequest } from 'store/actionCreators';

const mapDispatchToProps = dispatch => ({
  onSubmit: studentData => dispatch(addStudentRequest(studentData)),
});
const NewStudent = connect(null, mapDispatchToProps)(AddStudentForm);

export { NewStudent };
