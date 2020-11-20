class Person{
	constructor (name,surname){
	this.name=name;
	this.surname=surname;
  }
  
   get fullName(){
  	return this.name+" "+this.surname;
 	 }
  
   set fullName(fullName){
  	var items=fullName.split(' ');
  	this.name=items[0];
    this.surname=items[1];
  }
}



class Student extends Person{
	constructor (name,surname,index,grade){
	super(name,surname);
	this.index=index;
	this.grade=grade;
  }
  
  
  get avgGrade(){
   	var sum=0;
  		for(var item of this.grade){
    		sum+=item;
    	}    
    	return sum/this.grade.length;
  } 
  
}

 
  var st = new Student("Garik","Hayrapetyan","19551",[4,5,5,6]);
  
  console.log(st.fullName);
  st.fullName="G G";
  console.log(st.fullName);
  
  
  
