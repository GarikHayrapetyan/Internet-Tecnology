var studentPro={
		course:["TIN","PRO1"]
  }
  
  
  function StudentDetailGeneration(name,surname,index){
  	var student=Object.create(studentPro);
    student.name=name;
    student.surname=surname;
    student.index=index;
    
    
    return student;
  }
  
  function StudentDetail(name,surname,index){
  var s=StudentDetailGeneration(name,surname,index);
  	console.log(s.name);
  }
  
StudentDetail("Garik","Hayrapetyan","s19551");
  





