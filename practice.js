//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //It depends on how it is called in the function but in general it can't be set by assignment during execution, and it may be different each time the function is called.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Explicit (call/apply/bind): Where a function uses the this keyword in its body, its value can be bound to a particular object in the call using the call or apply methods; Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.
      //Implicit: a function is called as a method of an object: its this is set to the object the method is called on
      //Default/window: refers to the global object
      //Constructor(new): When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.

  // 3) What is the difference between call and apply?

      //Call: calls a function with a given this value and arguments provided individually.
      //Apply: The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).

  // 4) What does .bind do?

      //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "eco",
  email: "me@me.com",
  getUsername: function() {
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
  }
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser);

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //the myUser username

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //myUser

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
