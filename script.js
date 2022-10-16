  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("img");

function draw() {
  x = 1;
  y = 1;
  width = 15; //width of tiles
  height = 15; //height of tiles
  gap = 2; //size of gap between tiles
  for (i = 0; i < canvas.width; i++){
    console.log("lying tile");
    if(y < canvas.height) {
      ctx.drawImage(img,x,y,width,height);
      y += height + gap;
    } else {
      x += width + gap;
      y = 1;
    }
  }
}

function whichTile(x,y,width,height) {
  return Math.ceil(x/width) + " " + Math.ceil(y/height);
}

  console.log(whichTile(42,100,17,17)); //finding what tile the cordinate (42,100) is in
