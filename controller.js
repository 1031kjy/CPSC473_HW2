//to prepare some test student data
var students = [
  { fname: "Jiyeon", lname: "Kim", course: "CPSC473", gpa: 4.5 },
  { fname: "JongHyeon", lname: "Lee", course: "CPSC201", gpa: 4.5 },
  { fname: "JH", lname: "Lee", course: "CPSC202", gpa: 4.5 },
  { fname: "Jong", lname: "Lee", course: "CPSC203", gpa: 4.5 },
  { fname: "Hyeon", lname: "Lee", course: "CPSC204", gpa: 3.7 },
  { fname: "Suzy", lname: "Heo", course: "CPSC301", gpa: 3.7 },
  { fname: "Su", lname: "Heo", course: "CPSC302", gpa: 4.0 },
  { fname: "zy", lname: "Heo", course: "CPSC303", gpa: 4.5 },
  { fname: "Sungwon", lname: "Moon", course: "CPSC501", gpa: 4.3 },
  { fname: "Sung", lname: "Moon", course: "CPSC502", gpa: 4.0 },
  { fname: "won", lname: "Moon", course: "CPSC503", gpa: 4.5 },
];

var students_course="";
var students_gpa="";

//to retrieve the students with the given last name in response to the ‘click’ event
function myEventHandler() {
  var str="";
  str = document.getElementById("lastName").value;

  var full_name="";

  for(var i=0 ; i< students.length; i++){
    if(students[i].lname == str){
      /*
      const lnameList = students.map(function(student) {
        return students[i].fname + " "+ students[i].lname;
      })
      */
      full_name = students[i].fname + " "+ students[i].lname;
      students_course = students[i].fname;
      students_gpa = students[i].lname;
      document.getElementById("students").innerHTML = full_name;
    }
  }
}

//to retrieve the student name, and display the student’s grades
function myEventHandler2() {
  var example = document.getElementById("students").textContent;
  document.getElementById("studentsName").innerHTML = example;

  for(var i=0 ; i< students.length; i++){
    if(students[i].fname == students_course && students[i].lname == students_gpa ){
      document.getElementById("courseInfo").innerHTML = students[i].course;
      document.getElementById("gpaInfo").innerHTML = students[i].gpa;
    }
  }
}
