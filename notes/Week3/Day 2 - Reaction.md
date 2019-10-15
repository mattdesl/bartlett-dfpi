# Week 3 — Day 2 (Reaction/Visualization)

Today we will learn:

- More about frequencies
- Loading sounds from different sources:
  - Music file (MP3 added to Glitch.com assets)
  - Microphone
- Analysing Audio
  - Waveform
  - Meter
  - FFT

## Demos

- https://dfpi-audio-demos.glitch.me

## Guides

- [Waveforms](https://pudding.cool/2018/02/waveforms/)
- [Learning Synths](https://learningsynths.ableton.com/)
- [Music Theory Primer](https://www.lightnote.co/)
- [Learning Music](https://learningmusic.ableton.com/make-beats/make-beats.html)

## References

- [Patatap](https://www.patatap.com)
- [Adultswim – Choir](http://www.adultswim.com/etcetera/choir/)
- [Adultswim - Elastic Man](http://www.adultswim.com/etcetera/elastic-man/)
- [Chrome Music Lab](https://musiclab.chromeexperiments.com/Experiments)
- [Because Recollection](http://www.because-recollection.com/dj-mehdi)
- [FITC Tokyo](https://vimeo.com/118919656)

## AudioEnergy

I've made a small class called [AudioEnergy](https://glitch.com/edit/#!/dfpi-audio-fft?path=AudioEnergy.js) that you can drag and drop into your projects. Steps to include in a Glitch.com sketch:

1. Make a new file called `AudioEnergy.js` and copy and paste the script [here](https://glitch.com/edit/#!/dfpi-audio-fft?path=AudioEnergy.js)
2. Open `index.html` and add the following *after* Tone.js and *before* `sketch.js`:
```html
  <script src="AudioEnergy.js"></script>
```
3. Now you can use it in your `sketch.js` file

Quick start:

```js
let analyser;

function setup () {
  ...
  analyser = new AudioEnergy();
  source.connect(analyser);
}

function draw () {
  ...

  // Gets energy of bass in decibels
  const lowEnergy = analyser.getEnergy('bass');

  // Convert dB to 0..1 range
  const lowScale = map(lowEnergy, -100, -30, 0, 1);

  // Draw a circle scaled by bass
  circle(x, y, diameter * lowScale);
}
```

Examples:

- [Energy Ranges](https://glitch.com/edit/#!/dfpi-audio-fft-2?path=sketch.js
)
- [Get Bins](https://glitch.com/edit/#!/dfpi-audio-fft?path=sketch.js)

### API

#### `analyser = new AudioEnergy(size = 2048)`

Creates an energizer that analysizes `size` number of frequency bins.

#### `dB = analyser.getEnergy(range)`

Where `range` can be one of `'bass','lowMid','mid','highMid','treble'` which have predefined frequency ranges

Or you can pass frequencies like: `getEnergy(250, 500)`

#### `bins = analyser.getEnergyBins(logarithmic, n, minHz, maxHz)`

Returns a list of decibels for each 'bin' in the frequency spectrum.

- logarithmic will scale it logarithmically instead of mapping linearly
- `n` is the number of bins, defaults to `analyser.size`
- `minHz`, `maxHz` are the range of frequencies to map within


## Homework

### Brief

Let's create a sort of [Patatap](https://www.patatap.com) experience, but simpler:

- Push and hold with the mouse to trigger "ON" the random visuals

### Exercise

1.
Open [this](https://glitch.com/edit/#!/dfpi-audio-homework-basic?path=sketch.js) sketch and remix it (it includes `AudioEnergy` and a list of `riso-colors.js`)

2.
Look for the `drawShapes(palette)` function and remix your shape drawing in there.

3.
Make sure your shapes hook up or interact with audio somehow.

Just stick to one or two minimal designs. Don't make them full-bleed patterns, but instead floating elements near the centre.

Keep it Simple — and maybe use this as practice toward the visuals for your final project

### Ideas

- Try adding effects on the audio source, for example a delay or echo when you let go of the mouse
- Try making things move instead of always being static
- Try experimenting with `noise` to create random sizes

### My Example

[Here](https://glitch.com/edit/#!/dfpi-audio-homework) is what I came up with.