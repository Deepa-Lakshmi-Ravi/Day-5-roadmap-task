class person{
    constructor(firstName,lastName,Age,Gender,Country,City,State,Skills){
        this.firstName=firstName;
        this.lastName=lastName;
        this.Age=Age;
        this.Gender=Gender;
        this.City=City;
        this.State=State;
        this.Country=Country;
        this.Skills=[];
    }

    getFullName(){
        const fullname = this.firstName+' '+this.lastName;
        return fullname;
    }
    get getSkills(){
       return this.Skills;
    }
    setSkill(skill){
        this.Skills.push(skill);
    }
}
const person1 = new person('Deepalakshmi','R','21','Female','Tiruvannamalai','Tamilndu','India');
const person2 = new person('Vijay','S','30','Male','Chennai','Tamilndu','India');
const person3 = new person('Trisha','V','29','Female','Madurai','Tamilndu','India');
const person4 = new person('Ambika','R','27','Female','Tiruvannamalai','Tamilndu','India');

person1.setSkill='HTML';
person1.setSkill='CSS';
person1.setSkill='JAVA';

person2.setSkill='JAVASCRIPT';
person2.setSkill='C';
person2.setSkill='PYTHON';

person3.setSkill='Java';
person3.setSkill='web design';

person4.setSkill='react';
person4.setSkill='UI&UX';



console.log(person1.getSkills);
console.log(person2.getSkills);
console.log(person3.getSkills);
console.log(person4.getSkills);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);