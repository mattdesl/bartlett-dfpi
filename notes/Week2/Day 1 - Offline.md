# Week 2 — Day 1 (Offline)

First we will review some of what we learned last week.

Then we will learn:

- Terminal / Command-Line
- Node.js and npm
- JSON
- Local Development Servers for HTML
- Reading & Writing Files in Node.js
- Working with public JSON data

## Slides

## Guides

- JavaScript
  - [The Coding Train](https://thecodingtrain.com)
  - [JavaScript for Cats](http://jsforcats.com/)
  - [Programming from A to Z](https://shiffman.net/a2z/)
- Terminal
  - [Course Guide](../../guides/terminal.md)
- Node.js and npm
  - [Course Guide](../../guides/node-and-npm.md)
  - [Code Snippets](../../guides/node-snippets.md)
- JSON
  - [Simple JSON Guide](http://montoyamoraga.io/tutorial-json/)
  - [MDN JSON Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- CSV
  - [Course Guide](../../guides/csv.md)

## References

- Tools
  - [http-server](https://www.npmjs.com/package/http-server)
- Data Artworks
  - [Simulated Dendrochronology of U.S. Immigration](https://web.northeastern.edu/naturalizing-immigration-dataviz/) by National Geographic, Northeastern University
  - [Block Bills](http://www.digital-projects-index.julien-drochon.net/portfolio/block-bills/) by Matthias Dorfelt
  - [Every NYT Front Page Since 1852](https://vimeo.com/204951759)
  - [Tōhoku Japanese Earthquake Sculpture](https://www.lukejerram.com/tohoku-japanese-earthquake/) by Luke Jerram
  - [The Sleep Blanket](https://www.theverge.com/2019/7/21/20699484/sleep-blanket-data-visualisation-seung-lee) by Seung Lee
  - [Coral Cities](https://www.archdaily.com/908260/coral-cities-the-worlds-most-liveable-cities-visualized) by Craig Taylor
  - [Melting Memories](http://refikanadol.com/works/melting-memories/) and [Wind of Boston](https://visuall.net/2017/03/22/wind-of-boston-series-of-data-paintings-by-refik-anadol-studio/) by Refik Anadol
  - [Giorgia Lupi](https://giorgialupi.com/data-portraits-at-ted2017)
  - [Stefanie Posavec](http://www.stefanieposavec.com/)
  - [Valentina D'Efilippo](http://www.valentinadefilippo.co.uk/)
  - [Nadieh Bremer](https://www.visualcinnamon.com/)
- Simple JSON Datasets
  - [awesome-json-datasets](https://github.com/jdorfman/awesome-json-datasets)
  - [corpora](https://github.com/dariusk/corpora)
  - [color-names](https://github.com/meodai/color-names)
  - [all-the-cities](https://www.npmjs.com/package/all-the-cities)
  - [supervillains](https://www.npmjs.com/package/supervillains) and [superheroes](https://www.npmjs.com/package/superheroes)
  - [nice-color-palettes](https://www.npmjs.com/package/nice-color-palettes)
- Some Dataset Ideas
  - [Weather Data in NYC 2016](https://www.kaggle.com/mathijs/weather-data-in-new-york-city-2016)
  - [Google Trends](https://trends.google.com/trends/)
  - [Library of Congress](https://www.loc.gov/pictures/)
  - [NYPL Digital Collections](https://digitalcollections.nypl.org)
  - [Andy Kirk's List of Data Sources](9https://www.visualisingdata.com/2017/02/archiving-collection-places-access-data/)

## Exercise

- Tarot Card Bot
  - Write a Node.js Program that Picks a random Tarot Card from a deck and prints your fortune
  - Data: [tarot_interpretations.json](https://github.com/dariusk/corpora/raw/master/data/divination/tarot_interpretations.json) (Right Click > Save As)
  - Solution: [./src/tarot/tarot.js](./src/tarot/tarot.js)

## Assignment

Start to think about your project. The assignment will be one of the following, and will be officially "assigned" tomorrow evening:

- Generative Artwork
  - For example, using P5.js to create a series of images or a looping animation.
- Interactive Artwork
  - For example, a browser artwork that responds to mouse or mobile touch.
- Data Artwork
  - For example, a data visualization or data painting.
- Connected Artwork
  - For example, using WebSockets to communicate wirelessly between devices, and/or across the internet.
  - This may or may not include a hardware component such as Raspberry Pi and Enviro pHAT Sensor
  - Alternatively, this can run entirely on a server, such as a Twitter bot running on Glitch.com or Heroku.

Projects are either solo, or in a group of max 2 people. For Connected Artwork projects it may make sense to work in a team to split effort between frontend (visuals) and backend (networking).
