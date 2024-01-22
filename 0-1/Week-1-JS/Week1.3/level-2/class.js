class Animal{
    constructor(name, legCount, speaks){
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;  
    }
    static walk(){
      return "I am Walking"
      // console.log("Animal")
    }
    speak(){
      console.log("hi there " + this.speaks );
    }
    leg(){
      console.log("hi there i have " + this.legCount + " Legs")
    }
  }
  
  let dog = new Animal("dog", 4 , "Bhow Bhow"); // create object
  let cat = new Animal("cat", 4, " Meo Meo"); //
  dog.speak(); // call function on object 
  cat.leg();
  
  console.log(Animal.walk());