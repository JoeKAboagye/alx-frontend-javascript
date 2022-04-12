const getStudentIdsSum = (students) => students.reduce((preValue, next) => prevValue + next.id, 0);

export default getStudentIdsSum;
