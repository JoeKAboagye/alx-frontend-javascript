const getStudentIdsSum = (students) => students.reduce(
  (previousValue, currentValue) => previousValue + currentValue.id, 0
);

export default getStudentIdsSum;
