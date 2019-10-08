# Week 2 — Day 2 (Online)

Now that we are more comfortable with Terminal, Node.js, npm, and working with JSON and CSV data, we can start to create more interesting connections.

We will learn about:

- Functions
- APIs
  - Fetching data e.g. hourly or daily
  - Writing data e.g. Twitter bot
- Creating a simple Node server locally
- Running Node.js in Glitch.com
- Creating a server in Glitch.com
- Building your own APIs
- Advanced: WebSockets for multidirectional communication
- Bonus: Fetching from public APIs (ColourLovers.com)

## Demos

- https://dfpi-node-demos.glitch.me

## References

- [Times Haiku](https://haiku.nytimes.com/)
- [@grow_slow](http://nicole.pizza/grow_slow/)
- [WiFi Impressionist](https://www.creativeapplications.net/environment/wifi-impressionist-city-as-an-electromagnetic-landscape/) and [Hertzian Landscapes](https://www.creativeapplications.net/js/hertzian-landscapes-the-interactive-space-of-a-radio-spectrum/) by Richard Vijgen
- [Twin Objects](https://www.creativeapplications.net/objects/twin-objects-devices-for-long-distance-relationships/)
- [Paper Signals](https://papersignals.withgoogle.com/)
- [Face Tarde](https://www.creativeapplications.net/c/face-trade-art-vending-machine-that-trades-mugshots-for-free-portraits/)
- [Basic Stamps](https://www.behance.net/gallery/16917491/Basic-Stamps)

## 1. Email Me Your Final Project Idea

Email me at [info@mattdesl.studio](mailto:info@mattdesl.studio) with the rough idea of your final project.

- What is the input?
- What is the output?
- What are the names of your group members?

## 2. Exercise for The Week (Due Monday Oct 15)

We will make a generative flag program using the Node.js module [flag-colors](https://www.npmjs.com/package/flag-colors).

#### Inspirations

Swiss design, op art, hard edge painting, graphic design.

- Auguste Herbin
- Bridget Riley
- Ellsworth Kelly
- Sophie Taeuber-Arp

#### Requirements

- Remix [dfpi-flag-basic](https://glitch.com/edit/#!/dfpi-flag-basic) as a base project
- Canvas size should be 1280x853
- The text of the country name should be shown somewhere
- Clicking the canvas will fetch a new flag to produce a new generative pattern and country

#### Outputs (due Monday)

- Rename your glitch.com project so that it can be easily located
- Right click the canvas and select Save As to download 2-5 different PNG files

You can produce a new design that you haven't created yet (preferred), or repurpose your p5 work from last week but using the flag colors.

#### Full Example

Full example [here](https://glitch.com/edit/#!/dfpi-flag-colors). But make your own art!

#### Flag Data

If you are writing your own server code, you can get the raw flag data from `flag-colors` like so:

```js
const flags = require('flag-colors/data/flagColors.json');

// now you can use the data in your server
console.log(flags);
```

#### Extra Challenges

- Try using the `{ percent }` data within the `flagColors.json` dataset, such as scaling shapes by color percentage
- Try animating your pattern
- Try using a non-uniform distribution of colours, such as weighing one colour more strongly than others.
- Try taking some exercises from [GenerativeArtistry.com](https://generativeartistry.com) and remixing them into a flag design
- Try hooking up some more interesting Node.js code into your server, for example:
  - [geoip-lite](https://www.npmjs.com/package/geoip-lite) and [request-ip](https://www.npmjs.com/package/request-ip) so that the first flag you see is from your current location
  - Data about the flag's country, population, currency, etc like from [world-countries](https://www.npmjs.com/package/world-countries) (i.e. drawing more text on flag)
