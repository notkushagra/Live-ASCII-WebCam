const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
// let pic;
let video;
let asciiDiv;

// function preload() {
//   pic=loadImage("pic48.jpg");
// }

function setup() {
  pixelDensity(1);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(85, 50);
  asciiDiv = createDiv();
}
function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      //const transparency=pic.pixels[pixelIndex+3];
      const avg = (r + g + b) / 3;

      // noStroke();
      // fill(avg);
      // // square(i * w,j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp";
      else asciiImage += c;
    }
    asciiImage += "<br/>";
    asciiDiv.html(asciiImage);
  }
}
