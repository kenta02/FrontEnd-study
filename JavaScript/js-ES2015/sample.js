class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    hello(){
        return "My name is" + this.name + ", I am " + this.age + "years old";
    }
}
