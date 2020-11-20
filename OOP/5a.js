var person={
name:"Garik",
surname:"Hayrapetyan",
index:"s19551",

get personName(){
	return this.name+":"+typeof this.name;
},

get personSurname(){
	return this.surname+":"+typeof this.surname;
} ,

get personIndex(){
	return this.index+":"+typeof this.index;
} 
};


function print(person){
console.log(person.personName);
console.log(person.personSurname);
console.log(person.personIndex);
}

print(person);


