# Live-ASCII-WebCam
Webcam feed as Text


To run the code locally you'll need to download p5.js editor.

Run On Your Computer
1. Go to https://editor.p5js.org/ 
2. Paste the styles.css file.
3. Paste the sketch.js file.
4. Click on the Play button and grant permission to access Webcam.

_Voila!!!!_ 

To **invert** just change line **34** in **sketch.js** from
```
const charIndex = floor(map(avg, 0, 255, 0, len));
```
**to**
```
const charIndex = floor(map(avg, 0, 255, len, 0));
```

Play with the different values in the density string
