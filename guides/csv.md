# Comma Separated Values (CSV)

## Contents

- [File Format](#file-format)
- [Gotchas](#gotchas)
- [Tools](#tools)
- [Node.js](#nodejs)

## File Format

The CSV format is a common way that data is stored. It acts like a table or spread sheet, with rows and columns.

For example, let's say we found a data source of *Weather Data in NYC (2016)* ([source](https://www.kaggle.com/mathijs/weather-data-in-new-york-city-2016)), it might look like this:

| date     | max temp | min temp | avg temp | precip | snow fall | snow depth | 
|----------|----------|----------|----------|--------|-----------|------------| 
| 1-1-2016 | 42       | 34       | 38.0     | 0.00   | 0.0       | 0          | 
| 2-1-2016 | 40       | 32       | 36.0     | 0.00   | 0.0       | 0          | 
| 3-1-2016 | 45       | 35       | 40.0     | 0.00   | 0.0       | 0          | 
| 4-1-2016 | 36       | 14       | 25.0     | 0.00   | 0.0       | 0          | 
| 5-1-2016 | 29       | 11       | 20.0     | 0.00   | 0.0       | 0          | 
| 6-1-2016 | 41       | 25       | 33.0     | 0.00   | 0.0       | 0          | 
| 7-1-2016 | 46       | 31       | 38.5     | 0.00   | 0.0       | 0          | 
| 8-1-2016 | 46       | 31       | 38.5     | 0.00   | 0.0       | 0          | 

You can see the full data for the year [here](../notes/Week2/src/weather-nyc/weather_data_nyc_centralpark_2016.csv).

Each line in the file corresponds to a row in the data, and we separate each column with commas.

```csv
date,max temp,min temp,avg temp,precip,snow fall,snow depth
1-1-2016,42,34,38.0,0.00,0.0,0
2-1-2016,40,32,36.0,0.00,0.0,0
3-1-2016,45,35,40.0,0.00,0.0,0
...
```

Usually, but not always, the first line represents a "header" that labels each column. Some files may not have a header, or some files may need to be cleaned up slightly to only include a single line at the top as the header.

## Gotchas

In some cases a column has to be wrapped in quotes to include characters like a comma.

```csv
name,age
"Doe, John",29
"Doe, Jane",28
"Bean, Jim",38
"Bond, James",34
```

Also note, some files have tab or space delimited columns, instead of comma delimited.

## Tools

You can use these tools to convert CSV files to JSON:

- [csv2json.com](https://www.csvjson.com)
- [Mr Data Converter](https://shancarter.github.io/mr-data-converter/)
- CLI Tools: [csv-parser](https://www.npmjs.com/package/csv-parser#cli) and [csv2json](https://www.npmjs.com/package/csv2json)

For example, the weather data above might look like this in JSON:

```js
[
  {
    "date": "1-1-2016",
    "max temp": 42,
    "min temp": 34,
    "avg temp": 38.0,
    "precip": 0.00,
    "snow fall": 0.0,
    "snow depth": 0
  },
  {
    "date": "2-1-2016",
    "max temp": 40,
    "min temp": 32,
    "avg temp": 36.0,
    "precip": 0.00,
    "snow fall": 0.0,
    "snow depth": 0
  },
  ...
]
```

## Node.js

Sometimes these tools are not ideal for converting files to JSON. Maybe you want to reformat the JSON as well as converting it, or maybe you are getting JSON from a source that is updated each hour and you want to automate the process.

You can use the following modules:

- [neat-csv](https://www.npmjs.com/package/neat-csv)
- [csv-parser](https://www.npmjs.com/package/csv-parser)

Example with `neat-csv` module:

```js
const neatCsv = require('neat-csv');
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'myfile.csv');
const csv = fs.readFileSync(file).toString();

(async () => {
  const json = await neatCsv(csv);
  console.log(json);
})();
```