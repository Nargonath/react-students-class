export class Api {
  static currentId = 0;

  static addStudent(studentData) {
    return new Promise(resolve => {
      setTimeout(() => resolve({ ...studentData, id: ++Api.currentId }), 1000);
    });
  }
}
