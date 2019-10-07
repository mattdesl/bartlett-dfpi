# Node.js and npm Code Snippets

## Contents

- [Working with JSON](#working-with-json)
- [Requiring a Module from npm](#requiring-a-module)
- [Reading a File in Node.js](#reading-a-file-in-nodejs)
- [Writing to a File in Node.js](#writing-to-a-file-in-nodejs)
- [Reading JSON Files in Node.js](#reading-json-files-in-nodejs)
- [Writing JSON Files in Node.js](#writing-json-files-in-nodejs)
- [Creating a Basic Server](#creating-a-basic-server)
- [Creating an HTML Server](#creating-an-html-server)
- [Creating a WebSocket Server](#creating-a-websocket-server)

## Working with JSON

```js
// You can define JSON objects like so
const data = {
  someNumber: 23.5,
  isFoo: true,
  hello: 'world',
  coolObject: {
    myArray: [ 23, 40, 50 ],
    name: 'bar'
  }
};

// You can turn the object into a string like this
const text = JSON.stringify(data);

// And/or parse JSON strings into plain objects
const parsed = JSON.parse(text);

// And then access some property deep in the object
console.log(parsed.coolObject.name);
// prints 'bar'
```

## Requiring a Module from npm

> :bulb: Make sure you have a `package.json` in your folder before installing modules. See the [Node.js](./node-and-npm.md) guide for details.

First, you'll need to install the module from npm.

For example, [superheroes](https://www.npmjs.com/package/superheroes):

```sh
npm install superheroes
```

Then you can require it:

```js
// Require a module you installed via npm
const superheroes = require('superheroes');

console.log(superheroes.random());
```

## Reading a File in Node.js

```js
// Import file/path modules
const fs = require('fs');
const path = require('path');

// Get absolute path to 'myfile.txt'
const file = path.join(__dirname, 'myfile.txt');

// Read the contents of the file
const text = fs.readFileSync(file).toString();

// Print
console.log(text);
```

## Writing to a File in Node.js

```js
// Import file/path modules
const fs = require('fs');
const path = require('path');

// Get absolute path to 'myfile.txt'
const file = path.join(__dirname, 'myfile.txt');

// The contents of the file
const text = 'hello world';

// Write the file to disk
fs.writeFileSync(file, text);
```

## Reading JSON Files in Node.js

You can easily load JSON files with a relative `require()` statement to the file:

```js
const data = require('./myfile.json');

// print some nested data
console.log(data.some_data[0].foo);
```

Or, by loading a file into a string, and then parsing:

```js
// Import file/path modules
const fs = require('fs');
const path = require('path');

// Get absolute path to 'myfile.json'
const file = path.join(__dirname, 'myfile.json');

// Read the contents of the file
const text = fs.readFileSync(file).toString();

// Parse the string
const data = JSON.parse(text);

// print some nested data
console.log(data.some_data[0].foo);
```

## Writing JSON Files in Node.js

This is similar to writing a plain file, but you first have to turn the JSON object into a string:

```js
// Import file/path modules
const fs = require('fs');
const path = require('path');

// Your JSON data as an object
const data = {
  some_data: [
    {
      foo: 'bar'
    }
  ]
};

// Get absolute path to 'myfile.json'
const file = path.join(__dirname, 'myfile.json');

// Stringify JSON object into text string
const text = JSON.stringify(data)

// Write the file to disk
fs.writeFileSync(file, text);
```

## Creating a Basic Server

We will use `express`, so make sure you install it in your project first:

```sh
npm install express
```

Now you can write a `server.js` script:

```js
// require modules
const express = require("express");

// create an application
const app = express();

// when user visits /api
app.get('/api', (req, res) => {
  const data = {
    hello: 'world'
  };
  res.send(data);
});

// setup a server
const server = http.createServer(app);

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on http://localhost:" + port);
});
```

And run it with `node server.js`. Now when you hit `http://localhost:3000/api` you will see the result of your custom API.

## Creating an HTML Server

Similar to the code for [Creating a Basic Server](#creating-a-basic-server), but we will send "static" files with `express.static`.

```js
// require modules
const express = require("express");

// create an application
const app = express();

// when user visits the homepage
app.use(express.static(__dirname));

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on http://localhost:" + port);
});
```

Now you can add an `index.html` and `sketch.js` to your folder, and start the server:

```sh
node server.js
```

## Creating a WebSocket Server

If you want to make a *WebSocket Server* to be able to communicate back and forth, you need to install `express` and `socket.io` modules. You can install them both in a single command:

```sh
npm install express socket.io
```

Now, our server code resembles the earlier examples, but we will add in `socket.io` features. We also have to use `http` module to create the server, like so:

```js
// Require some modules
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

// setup an express app
const app = express();

// setup a server
const server = http.createServer(app);

// Serve the current directory as a static website
// This allows us to use HTML, JavaScript, etc
app.use(express.static(__dirname));

// -------- Start of WebSocket Code -------- //

// hook up socketio with the server
const io = socketio.listen(server);

// number of active users
let count = 0;

// A user joined our site
io.on("connection", socket => {
  // do something when a socket joins
});

// -------- End of WebSocket Code -------- //

// Start listening on a standard port
const port = process.env.PORT || 3000;
server.listen(port, () => {
  // Print to console just so we know its ready to go...
  console.log("Server listening on http://localhost:" + port);
});
```

*Important!* There is one additional step. In your `index.html`, you have to add this line before your `sketch.js`:

```html
  ...
  <head>
    <!-- This is the line we need to add... -->
    <script src="/socket.io/socket.io.js"></script>

    <!-- Here's our other p5.js script tags as usual -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  ...
```