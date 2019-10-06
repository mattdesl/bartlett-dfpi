# Node.js and npm Code Snippets

## Contents

- [Working with JSON](#working-with-json)
- [Requiring a Module from npm](#requiring-a-module)
- [Reading a File in Node.js](#reading-a-file-in-nodejs)
- [Writing to a File in Node.js](#writing-to-a-file-in-nodejs)
- [Reading JSON Files in Node.js](#reading-json-files-in-nodejs)
- [Writing JSON Files in Node.js](#writing-json-files-in-nodejs)

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