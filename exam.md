# Node js exam

## Question 1:

### Q : what is the value of the variable z

```javascript
var x,
    y = null,
    z = x == y;
```

### A :D

1. `true`
2. false
3. SyntaxError

## Question 2:

### Q : Choose the correct answer to make msg contain : "You have got an email From Name : email@mail.com"

```javascript
var name = "Name",
    email = "email@mail.com",
    msg = ________________________;
```

### A :D

1. ```javascript
   `You have got an email From ${name} : ${email}`;
   ```

2. ```javascript
   "You have got an email From ${name}" + " : " + "${email}";
   ```

3. ```javascript
   "You have got an email From " + ${name} + " : " + ${email};
   ```

## Question 3:

### Q : what is the value of the max variable

```javascript
var a = "Name",
    b = "Last",
    max = a > b ? a : b;
```

### A :D

1. `"Name"`
2. "Last"
3. true
4. false

## Question 4:

### Q : Which property isn't correctly written ?

```javascript
var person = {
    firstName: "First",
    middle name: "Middle",
    "last name": "Last",
};
```

### A :T

1. 1st
2. `2nd`
3. 3rd

## Question 5:

### Q : What does 'elm' represent in this code :

```javascript
for (var elm in person) {
    //
}
```

### A :T

1. `the keys/indexes of a person object`
2. the values of each property in a person object

## Question 6:

### Q : What is the value of list2 :

```javascript
var list = [10, 0, 5],
    list2 = [5, 10, ...list, 7, 3];
```

### A :D

1. ```javascript
   [5, 10, 10, 0, 5, 7, 3];
   ```

2. ```javascript
   [5, 10, 0, 5, 7, 3];
   ```

3. ```javascript
   [5, 10, 10, 5, 7, 3];
   ```

## Question 7:

### Q : What is the value of otherDetails :

```javascript
var cat = { name: "Ginger", age: 1, color: "orange" },
    { color: name, ...otherDetails } = cat;
```

### A :D

1. ```javascript
   { name: "Ginger", age: 1 }
   ```

2. ```javascript
   { age: 1, color: "orange" }
   ```

3. ```javascript
   { name: "Ginger", age: 1, color: "orange" }
   ```

## Question 8:

### Q : What is the value of element :

```javascript
function Start(element) {
    console.log(element);
}
Start();
```

### A :D

1. ```javascript
   null;
   ```

2. ```javascript
   "element";
   ```

3. ```javascript
   undefined;
   ```

## Question 9:

### Q : What does the console shows ?

```javascript
const [a, , b = 5, , d = 7] = [1, 2, 3, 4];
console.log(a + b + d);
```

### A :D

1. **11**
2. 8
3. 13

## Question 10:

### Q : What is the result of this code ? ?

```javascript
const first = "FName",
    last = "LName";
function shoutOutFor({ first, last }) {
    console.log(`We would like for ${first} ${last} to come to pick up his/her package`);
}
shoutOutFor();
```

### A :D

1. Uncaught TypeError
2. We would like for FName LName to come to pick up his/her package
3. We would like for ${first} ${last} to come to pick up his/her package

## Question 11:

### Q : What does the console shows ?

```javascript
const x = null;
console.log(typeof x);
```

### A :D

1. undefined
2. null
3. object

## Question 12:

### Q : What is the value of x ?

```javascript
const x = Number.isNaN("text");
console.log(x);
```

### A :D

1. **true**
2. false
3. Uncaught TypeError

## Question 13:

### Q : how to check if elm is an array

### A :D

1. Array.isArray(elm);
2. isArray(elm);
3. Array(elm);

## Question 14:

### Q : What is the wrong function declaration ?

### A :D

1. ```javascript
   function name() {}
   ```
2. ```javascript
   const name = () => {};
   ```
3. ```javascript
   function ()=> {}
   ```

## Question 15:

### Q : how to pass a callback function inside another function :

```javascript
function fun() {
    //code
}
caller(________);
```

### A :D

1. caller(fun)
2. caller(fun())
3. caller(fun.name)

## Question 16:

### Q : What does this code do?

```javascript
const result = [1, 2, 3, 4, 5].reduce(function (acc, elm, i, arr) {
    return acc + elm * i;
}, 0);
```

### A :D

1. sum the multiplication of each element with its index
2. product of each element added to its index
3. loop on each element only

## Question 17:

### Q : What does this code do?

```javascript
[10, 84, -35, 21, -12].filter(function (elm, i, arr) {
    return elm % 2 === 0;
});
```

### A :D

1. take off the element who aren't a multiple of two
2. take off the element who are positive and aren't a multiple of two
3. take off the element who are a multiple of two

## Question 18:

### Q : What are the two predefined event time related function that are built in javascript

### A :D

1. setTimeout & setInterval
2. setClock & setTimeInterval
3. setTime & setIntervalOut

## Question 19:

### Q : What is a promise ?

### A :D

1.  It is an object that represents a task that will be completed in the future.
2.  It is a contract between two objects that link them.
3.  It is a function that catch Http requests.

## Question 20:

### Q : How to fulfill a promise manually ?

### A :D

1. using the resolve parameter inside the Promise creation;
2. using the method then.
3. using the method next.

## Question 21:

### Q : How to reject a promise manually ?

### A :T

1. using the method catch.
2. using the method then.
3. using the method finally.

## Question 22:

### Q : Which one of the answers doesn't explain what is an Async function ?

### A :T

1. an asynchronous function that return a Promise
2. an asynchronous function that runs in the main stack
3. an asynchronous function that can be resolved by returning a value

## Question 23:

### Q : Which one of the answers doesn't apply on await ?

### A :T

1. Can only be used inside async function.
2. Returns the rejected value of the promise (error).
3. Returns the fulfilled value of the promise.

## Question 24:

### Q : how to handle err for a block of code ?

### A :T

1. ```javascript
   try {
       /*block*/
   } catch (error) {}
   ```

2. ```javascript
   try {
       /*block*/
   } finally (error) {}
   ```
3. ```javascript
   catch(error){
       /*block*/
   } finally  {}
   ```

## Question 25:

### Q : How to declare a private attribute in js classes ?

### A :T

1. #attribute
2. \_attribute
3. Attribute (first character in uppercase)

## Question 25:

### Q : How to inherit properties of another class into your new class ?

### A :T

1. child extends parent
2. child : parent
3. child inherit parent

## Question 26:

### Q : What

```javascript
var text =
        "Inherited Will, The Destiny of the Age, and The Dreams of the People. As long as people continue to pursue the meaning of Freedom, these things will never cease to be!",
    reg = /(?<!\w)\w{4}(?!\w)/g,
    elements = text.match(reg);
```

### A :D

1. **3**
2. 5
3. 7

## Question 27:

### Q : How to import and export other models in Node js

### A :T

1. import() & export()
2. require() and models.exports
3. include & export

## Question 28:

### Q : How to initialize a project in node ?

### A :T

1. npm i
2. npm init
3. npm project

## Question 29:

### Q : Which one of the following answers doesn't allow you to install a package ?

### A :T

1. npm i
2. npm install
3. npm init

## Question 30:

### Q : What is package.json main role

### A :T

1. a file that save the details of project (packages , name ,author ...ect).
2. a file that installs packages for our project.
3. a file that lunches the project scripts.

## Question 31:

### Q : For What npm stands?

### A :T

1. Node Project Manager
2. Node Package Manager
3. New Project Manager
4. New Package Manager

## Question 32:

### Q : how to add express to your project ?

### A :T

1. npm i express
2. npm add express
3. npm express
4. node install express

## Question 33:

### Q : what does port in listen represent

```javascript
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
```

### A :T

1. the id of the app's process
2. the logical address of the application that uses network to communicate

## Question 34:

### Q : How to start a web application with express

### A :T

1. express()
2. app()
3. server()

## Question 35:

### Q : How to create a router as a model in express ?

### A :T

1. express.Router()
2. Router()
3. app.Router()

## Question 36:

### Q : What is morgan used for?

### A :T

1. to debug Database queries
2. to debug http requests in express
3. to send files using express.

## Question 37:

### Q : What is mongoDB?

### A :T

1. a Graph databases
2. Documents databases
3. Relational databases

## Question 38:

### Q : What is the command that list all the databases saved in the mongodb server? (command line)

### A :T

1. show dbs
2. show collections
3. list databases

## Question 39:

### Q : What is the command that allow you to find data in users collection using lastName ? (command line)

### A :T

1. db.users.find({lastName:"Someone's lastName"})
2. users.find({lastName:"Someone's lastName"})
3. db.find(users,{lastName:"Someone's lastName"})

## Question 40:

### Q : What is mongoose js ?

### A :T

1. a package that provides a schema-based solution to model an application data in Mongodb.
2. a package that provides pictures of mongoose animal pictures.
3. a package that create API in Node js.

## Question 41:

### Q : How to connect to a mongodb database using mongoose?

### A :T

1. mongoose.connect(uri)
2. mongoose.con(uri)
3. mongoose(uri)

## Question 42:

### Q : What is mongoose schema ?

### A :T

1. a blueprint that allow us to create data with specific restrictions.
2. an object that lunch queries (find, create , delete ...)

## Question 43:

### Q : Which one of these isn't the way of creating a user data and save it in the DB ?

### A :T

1. user.create({...data})
2. user = new user({...data}); user.save();
3. user.push({..data})

## Question 44:

### Q : Which one of these isn't the way of creating a user data and save it in the DB ?

```javascript
recipeSchema.pre("save", async function (next) {
    if (this.heat.unit === "F") {
        this.heat.unit = "C";
        this.heat.value = (this.heat.value - 32) * (5 / 9);
    }
});
```

### A :D

1. change heat from F to C before saving
2. change heat from F to C after saving
3. change heat from C to F before saving
4. change heat from C to F after saving

## Question 45:

### Q : What is the common way to retrieve data for the Post request in express?

### A :T

1. Parse the data in the body using parsers( json ,urlencoded , text ...)
2. Use the parameters element in the route
3. Use
