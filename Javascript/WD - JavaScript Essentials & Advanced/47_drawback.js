// Q.47 What is the drawback of declaring methods directly in JavaScript objects?

/* 1. Memory Inefficiency:
When you declare a method directly in an object, each instance of that object gets its own copy of the method.
This leads to redundant copies of the same method being stored in memory for every object that has the method. If you create many instances of that object, it consumes more memory unnecessarily.

javascript code: */ 
const obj1 = {
    name : "rahul",
    sayHello : function(){
        console.log("hello " + this.name)
    }
}
obj1.sayHello()
  // Each person object has its own 'sayHello' method, duplicating the function in memory.
      
  // Each person object has its own 'sayHello' method, duplicating the function in memory.
  
// Each person object has its own 'sayHello' method, duplicating the function in memory.
/* 2. Performance Issues:
If the same method is declared directly in each object, it means the JavaScript engine has to create a new function for every instance, which can degrade performance.
This is inefficient, especially when many instances are created, such as in loops or large-scale applications.
3. Code Duplication:
You’re essentially duplicating the method in every object, which can lead to more difficult maintenance.
If you need to modify the method, you would have to make changes everywhere, leading to higher risk of errors or inconsistencies.
Solution (Using Prototypes):
To avoid this drawback, you can use prototypes in JavaScript. By adding methods to the prototype, all instances share the same method, which saves memory and improves performance.
 */
// javascript
/* function Personf(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {  // Method added to prototype
  console.log("Hello, " + this.name);
};

const person3 = new Person("John");
const person4 = new Person("Jane");
 */
// Both person1 and person2 share the same 'sayHello' method from the prototype.

/* Key Difference:
Direct method declaration: Creates a new copy of the method for each object instance.
Prototype method: All object instances share the same method, leading to better memory management and performance.
In summary, the main drawback of declaring methods directly in JavaScript objects is memory inefficiency and performance degradation, especially when dealing with many object instances. Using prototypes is a better practice to avoid these issues.



 */








