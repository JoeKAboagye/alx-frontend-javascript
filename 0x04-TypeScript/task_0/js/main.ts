interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Joseph',
  lastName: 'Aboagye',
  age: 28,
  location: 'Kumasi',
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Johnson',
  age: 24,
  location: "Accra",
};

const students: Student[] = [student1, student2];

console.log('Firstname\tLastName\tAge\tLocation');
students.forEach((student) => {
  console.log(`\n${student.firstName}\t\t${student.lastName}\t\t${student.age}\t${student.location}`);
});
