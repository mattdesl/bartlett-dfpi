// Data from:
// https://data.london.gov.uk/dataset/daily-areal-rainfall

const fs = require('fs');
const path = require('path');

// get the text
const file = path.join(__dirname, 'daily-areal-rainfall.csv');
let txt = fs.readFileSync(file).toString();

// split into lines
let lines = txt.split('\n');

// skip the first two lines as they are header info
lines = lines.slice(2);

// clean up the data so its just { date, rainfall }
const data = [];
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  // strip whitespace
  line = line.trim();
  // if line is empty, skip this iteration
  if (!line) continue;
  // split by comma
  const parts = line.split(',');
  // get date
  const date = parts[0];
  // get rainfall value as float
  const rainfall = parseFloat(parts[1]);
  // return an object for each data point
  data.push({
    date,
    rainfall
  });
}

console.log('North London Daily Rainfall in mm')
console.log('First Day:', data[0].date);
console.log('Last Day:', data[data.length - 1].date);
console.log('Total Days', data.length);

const dataStr = JSON.stringify(data);
const outFile = path.join(__dirname, 'daily-rainfall.json');

console.log('Writing to', outFile);

fs.writeFileSync(outFile, dataStr);
