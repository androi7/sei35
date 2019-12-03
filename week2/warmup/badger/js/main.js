const revengeOfBadger = {
  students: [
    {
      name: 'student1',
      clapping: 0
    },
    {
      name: 'student2',
      clapping: 2
    },
    {
      name: 'student3',
      clapping: 5
    },
    {
      name: 'student4',
      clapping: 3
    }
  ],
  studentDraw: [],
  clap: function(name) {
    this.students.forEach(a => {
      for (let key in a) {
        return a[key] === name ? a.clapping++ : null;
      }
    })
  },
  trackClapping: function() {
    for(let i = 0; i < this.students.length; i++) {
      // if updating without resetting then check if student is already pushed to the array
      if (this.students[i].clapping > 2 && !this.studentDraw.includes(this.students[i].name)) {
        this.studentDraw.push(this.students[i].name);
      }
    }
    return this.studentDraw;
  },
  pickRandomStudent: function() {
    const randomIndex = Math.floor(Math.random()*this.studentDraw.length);

    return this.studentDraw[randomIndex] || 'Badger';
  },
  setNewWeek: function() {
    this.studentDraw = [];
    this.students.forEach(a => a.clapping = 0);
  }
};

let currentStudents = revengeOfBadger.trackClapping();
//console.log(currentStudents);


let pickedStudent = revengeOfBadger.pickRandomStudent();
console.log(`List of all potential users of the draw: ${currentStudents.join(', ')}.
The chosen student is ${pickedStudent}.`);

revengeOfBadger.clap('student1');
revengeOfBadger.clap('student1');
revengeOfBadger.clap('student1');
revengeOfBadger.clap('student4');

currentStudents = revengeOfBadger.trackClapping();
pickedStudent = revengeOfBadger.pickRandomStudent();
console.log(`List of all potential users of the draw: ${currentStudents.join(', ')}.
The chosen student is ${pickedStudent}.`);

revengeOfBadger.setNewWeek();
console.log(revengeOfBadger.studentDraw);

currentStudents = revengeOfBadger.trackClapping();
pickedStudent = revengeOfBadger.pickRandomStudent();
console.log(`List of all potential users of the draw: ${currentStudents.join(', ')}.
The chosen student is ${pickedStudent}.`);

revengeOfBadger.clap('student1');
revengeOfBadger.clap('student1');
revengeOfBadger.clap('student1');
revengeOfBadger.clap('student4');

currentStudents = revengeOfBadger.trackClapping();
pickedStudent = revengeOfBadger.pickRandomStudent();
console.log(`List of all potential users of the draw: ${currentStudents.join(', ')}.
The chosen student is ${pickedStudent}.`);
