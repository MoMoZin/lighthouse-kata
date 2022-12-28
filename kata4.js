const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let length = 0;
  let result = 0;
  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name.length;
    if (nameLength > length) {
      result = i;
      length = nameLength;
    }
  }
  return instructors[result];
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
