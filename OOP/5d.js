function Student(name,surname,index,grade){
	this.name=name,
	this.surname=surname,
	this.index=index,
	this.grade=grade,

  
   Object.defineProperty(this,'avgGrade',{
 		get(){
  		var sum=0;
  		for(var item of this.grade){
    		sum+=item;
    	}    
    	return sum/this.grade.length;
 	}
 	});  
  
  
   Object.defineProperty(this,'fullName',{
 		get(){
    return name+" "+surname;
    },
    
    set(fullname){
     items=fullname.split(' ');
     this.name=items[0];
     this.surname=items[1];
    }
 	});  
 }
 
  var st = new Student("Garik","Hayrapetyan","19551",[4,5,5,6]);
  
  console.log("AVG Grade:"+st.avgGrade);
  console.log(st.fullName);
  st.fullName="g g";
  console.log(st.fullName);
  
  
