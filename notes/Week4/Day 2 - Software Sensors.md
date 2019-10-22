# Week 4 — Day 2 (Software Sensors)

Today we will:

- Explore software sensors:
  - Face Tracking
  - Body Tracking
- ML5
- Get ready for Tate
- Review
  - Debugging: Console
  - Taking Sketches Offline
  - Adding Libraries into `index.html`
- Troubleshooting / Q&A
- Chat about office hours

- Thursday 24th @ 2PM-3PM

# References

- [clmtrackr](https://github.com/auduno/clmtrackr) (Face Tracker)
- [ML5](https://ml5js.org/) (PoseNet, body tracker)
- [ml4a](https://ml4a.github.io/ml4a/)
- Zach Lieberman [Más Que la Cara](https://medium.com/@zachlieberman/m%C3%A1s-que-la-cara-overview-48331a0202c0), Daily Sketches [2016](https://medium.com/@zachlieberman/daily-sketches-2016-28586d8f008e) and [2017](https://medium.com/@zachlieberman/daily-sketches-in-2017-1b4234b0615d)
- [Rotoscope Ballet](https://www.ignant.com/2017/10/13/rotoscope-ballet/)
- [Futrue You](https://universaleverything.com/projects/future-you)

# Demos

- [dfpi-face-track](https://glitch.com/edit/#!/dfpi-face-track?path=sketch.js)
- [dfpi-body-track](https://glitch.com/edit/#!/dfpi-body-track?path=sketch.js)

# Going Offline

## Tools

The first thing to do is host it locally, so that we no longer rely on Glitch.com servers. Before doing this, you'll want to install the tool `serve` globally, if you haven't already:

```sh
npm install serve --global
```

> :bulb: If it doesn't work, try `sudo npm install serve --global`

## Serving it Locally

1. While editing your Glitch.com project, press the **Tools** button (on the bottom), then **Git, Import, and Export**. Click **Download Project**

2. Extract the folder to some place on your computer, like your Downloads or Desktop.

3. Open the folder in Terminal by dragging and dropping it into your command-line interface and/or using the `cd` command.

4. Now from within the extracted folder, run `serve .` (the dot means "current folder")

5. It should run a local server on [http://localhost:5000/](http://localhost:5000/) which you can open in your browser to see the sketch.

## Making it entirely Offline

Although you're no longer relying on Glitch.com, you might still have absolute URLs to the internet in your `index.html` and `sketch.js` files.

Look for any URLs that begin with `http://...` in your `index.html` and `sketch.js` files and open those in your browser. Then, download (Cmd/Ctrl + S) the file into the same project folder. Then we need to replace the absolute URL with a relative URL, like below.

Before:

```html
  <!-- Inside index.html -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
  <script src="sketch.js"></script>
```

After:

```html
  <!-- Inside index.html -->
  <script src="p5.js"></script>
  <script src="sketch.js"></script>
```

Where now the `p5.js` file exists in the same folder as `sketch.js` and `index.html`.

This also goes for OBJ, PNG and other files loaded in p5:

```js
function preload() {
  // Use a relative URL instead of absolute
  const modelUrl = "monky.obj";
  myModel = loadModel(modelUrl, true);
}
```

To test, disable your WiFi and try running the page. If you get errors, open your console.