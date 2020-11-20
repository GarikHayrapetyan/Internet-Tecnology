function Student(name,surname,index,grade){
	this.name=name,
	this.surname=surname,
	this.index=index,
	this.grade=grade,
	this.studentDetail = function (){ 
  	var sum=0;
  	for(var item of grade){
    	sum+=item;
    }    
		return name+" "+surname+" "+ index+" AVG Grade:"+(sum/grade.length);
 	}  
  }
  
  
  var student = new Student("Garik","Hayrapetyan","19551",[4,5,5,6]);
  
  console.log(student.studentDetail());
