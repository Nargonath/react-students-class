import { connect } from 'react-redux';

import { AddStudentForm } from 'components/AddStudentForm';
import { addStudent } from 'store/actionCreators';

const mapDispatchToProps = dispatch => ({
  onSubmit: studentData => dispatch(addStudent(studentData)),
});
const NewStudent = connect(null, mapDispatchToProps)(AddStudentForm);

export { NewStudent };
