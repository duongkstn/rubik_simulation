class Point {
    constructor(x, y) {
      this.x = x * 150; // scale
      this.y = y * 150;
    }
  }
class Cor {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
class sFace{
    constructor(a, b, c, d, idxFace, color){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.idxFace = idxFace;
        this.color = color;
    }
}

var audio = document.getElementById("myAudio"); 
var angleX = 0;
var angleY = -15;
var angleZ = 15;
const originCor = [
    new Cor(1, 1, 0),
    new Cor(0, 1, 0),
    new Cor(0, 0, 0),
    new Cor(1, 0, 0),
    new Cor(1, 1, 1),
    new Cor(0, 1, 1),
    new Cor(0, 0, 1),
    new Cor(1, 0, 1), 
]

function playAudio() { 
    audio.play(); 
} 
var c = document.getElementById("plane");
c_width = c.width;
c_height = c.height;
var ctx = c.getContext("2d");

drawsFace = function(face){
    var a = project3dTo2d(transform(face.a));
    var b = project3dTo2d(transform(face.b));
    var c = project3dTo2d(transform(face.c));
    var d = project3dTo2d(transform(face.d));
    var pixLocA = XY2Pixels(a);
    var pixLocB = XY2Pixels(b);
    var pixLocC = XY2Pixels(c);
    var pixLocD = XY2Pixels(d);
    ctx.beginPath();
    ctx.moveTo(pixLocA[0], pixLocA[1]);
    ctx.lineTo(pixLocB[0], pixLocB[1]);
    ctx.lineTo(pixLocC[0], pixLocC[1]);
    ctx.lineTo(pixLocD[0], pixLocD[1]);
    ctx.lineTo(pixLocA[0], pixLocA[1]);
    
    ctx.fillStyle = face.color;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

var allfaces = [
    new sFace(new Cor(1,1,0),new Cor(2/3,1,0), new Cor(2/3,2/3,0), new Cor(1,2/3,0), 0, "red"),
    new sFace(new Cor(2/3,1,0),new Cor(1/3,1,0), new Cor(1/3,2/3,0), new Cor(2/3,2/3,0), 0, "red"),
    new sFace(new Cor(1/3,1,0),new Cor(0,1,0), new Cor(0,2/3,0), new Cor(1/3,2/3,0), 0, "red"),
    new sFace(new Cor(1,2/3,0),new Cor(2/3,2/3,0), new Cor(2/3,1/3,0), new Cor(1,1/3,0), 0, "red"),
    new sFace(new Cor(2/3,2/3,0),new Cor(1/3,2/3,0), new Cor(1/3,1/3,0), new Cor(2/3,1/3,0), 0, "red"),
    new sFace(new Cor(1/3,2/3,0),new Cor(0,2/3,0), new Cor(0,1/3,0), new Cor(1/3,1/3,0), 0, "red"),
    new sFace(new Cor(1,1/3,0),new Cor(2/3,1/3,0), new Cor(2/3,0,0), new Cor(1,0,0), 0, "red"),
    new sFace(new Cor(2/3,1/3,0),new Cor(1/3,1/3,0), new Cor(1/3,0,0), new Cor(2/3,0,0), 0, "red"),
    new sFace(new Cor(1/3,1/3,0),new Cor(0,1/3,0), new Cor(0,0,0), new Cor(1/3,0,0), 0, "red"),

    new sFace(new Cor(1,1,0),new Cor(1,1,1/3), new Cor(2/3,1,1/3), new Cor(2/3,1,0), 2, "white"),
    new sFace(new Cor(2/3,1,0),new Cor(2/3,1,1/3), new Cor(1/3,1,1/3), new Cor(1/3,1,0), 2, "white"),
    new sFace(new Cor(1/3,1,0),new Cor(1/3,1,1/3), new Cor(0,1,1/3), new Cor(0,1,0), 2, "white"),
    new sFace(new Cor(0,1,0),new Cor(0,1,1/3), new Cor(0,2/3,1/3), new Cor(0,2/3,0), 3, "cyan"),
    new sFace(new Cor(0,2/3,0),new Cor(0,2/3,1/3), new Cor(0,1/3,1/3), new Cor(0,1/3,0), 3, "cyan"),
    new sFace(new Cor(0,1/3,0),new Cor(0,1/3,1/3), new Cor(0,0,1/3), new Cor(0,0,0), 3, "cyan"),
    new sFace(new Cor(0,0,0),new Cor(0,0,1/3), new Cor(1/3,0,1/3), new Cor(1/3,0,0), 4, "yellow"),
    new sFace(new Cor(1/3,0,0),new Cor(1/3,0,1/3), new Cor(2/3,0,1/3), new Cor(2/3,0,0), 4, "yellow"),
    new sFace(new Cor(2/3,0,0),new Cor(2/3,0,1/3), new Cor(1,0,1/3), new Cor(1,0,0), 4, "yellow"),
    new sFace(new Cor(1,0,0),new Cor(1,0,1/3), new Cor(1,1/3,1/3), new Cor(1,1/3,0), 5, "green"),
    new sFace(new Cor(1,1/3,0),new Cor(1,1/3,1/3), new Cor(1,2/3,1/3), new Cor(1,2/3,0), 5, "green"),
    new sFace(new Cor(1,2/3,0),new Cor(1,2/3,1/3), new Cor(1,1,1/3), new Cor(1,1,0), 5, "green"),
    
    new sFace(new Cor(1,1,1/3),new Cor(1,1,2/3), new Cor(2/3,1,2/3), new Cor(2/3,1,1/3), 2, "white"),
    new sFace(new Cor(2/3,1,1/3),new Cor(2/3,1,2/3), new Cor(1/3,1,2/3), new Cor(1/3,1,1/3), 2, "white"),
    new sFace(new Cor(1/3,1,1/3),new Cor(1/3,1,2/3), new Cor(0,1,2/3), new Cor(0,1,1/3), 2, "white"),
    new sFace(new Cor(0,1,1/3),new Cor(0,1,2/3), new Cor(0,2/3,2/3), new Cor(0,2/3,1/3), 3, "cyan"),
    new sFace(new Cor(0,2/3,1/3),new Cor(0,2/3,2/3), new Cor(0,1/3,2/3), new Cor(0,1/3,1/3), 3, "cyan"),
    new sFace(new Cor(0,1/3,1/3),new Cor(0,1/3,2/3), new Cor(0,0,2/3), new Cor(0,0,1/3), 3, "cyan"),
    new sFace(new Cor(0,0,1/3),new Cor(0,0,2/3), new Cor(1/3,0,2/3), new Cor(1/3,0,1/3), 4, "yellow"),
    new sFace(new Cor(1/3,0,1/3),new Cor(1/3,0,2/3), new Cor(2/3,0,2/3), new Cor(2/3,0,1/3), 4, "yellow"),
    new sFace(new Cor(2/3,0,1/3),new Cor(2/3,0,2/3), new Cor(1,0,2/3), new Cor(1,0,1/3), 4, "yellow"),
    new sFace(new Cor(1,0,1/3),new Cor(1,0,2/3), new Cor(1,1/3,2/3), new Cor(1,1/3,1/3), 5, "green"),
    new sFace(new Cor(1,1/3,1/3),new Cor(1,1/3,2/3), new Cor(1,2/3,2/3), new Cor(1,2/3,1/3), 5, "green"),
    new sFace(new Cor(1,2/3,1/3),new Cor(1,2/3,2/3), new Cor(1,1,2/3), new Cor(1,1,1/3), 5, "green"),
    
    new sFace(new Cor(1,1,2/3),new Cor(1,1,1), new Cor(2/3,1,1), new Cor(2/3,1,2/3), 2, "white"),
    new sFace(new Cor(2/3,1,2/3),new Cor(2/3,1,1), new Cor(1/3,1,1), new Cor(1/3,1,2/3), 2, "white"),
    new sFace(new Cor(1/3,1,2/3),new Cor(1/3,1,1), new Cor(0,1,1), new Cor(0,1,2/3), 2, "white"),
    new sFace(new Cor(0,1,2/3),new Cor(0,1,1), new Cor(0,2/3,1), new Cor(0,2/3,2/3), 3, "cyan"),
    new sFace(new Cor(0,2/3,2/3),new Cor(0,2/3,1), new Cor(0,1/3,1), new Cor(0,1/3,2/3), 3, "cyan"),
    new sFace(new Cor(0,1/3,2/3),new Cor(0,1/3,1), new Cor(0,0,1), new Cor(0,0,2/3), 3, "cyan"),
    new sFace(new Cor(0,0,2/3),new Cor(0,0,1), new Cor(1/3,0,1), new Cor(1/3,0,2/3), 4, "yellow"),
    new sFace(new Cor(1/3,0,2/3),new Cor(1/3,0,1), new Cor(2/3,0,1), new Cor(2/3,0,2/3), 4, "yellow"),
    new sFace(new Cor(2/3,0,2/3),new Cor(2/3,0,1), new Cor(1,0,1), new Cor(1,0,2/3), 4, "yellow"),
    new sFace(new Cor(1,0,2/3),new Cor(1,0,1), new Cor(1,1/3,1), new Cor(1,1/3,2/3), 5, "green"),
    new sFace(new Cor(1,1/3,2/3),new Cor(1,1/3,1), new Cor(1,2/3,1), new Cor(1,2/3,2/3), 5, "green"),
    new sFace(new Cor(1,2/3,2/3),new Cor(1,2/3,1), new Cor(1,1,1), new Cor(1,1,2/3), 5, "green"),

    new sFace(new Cor(1,1,1),new Cor(2/3,1,1), new Cor(2/3,2/3,1), new Cor(1,2/3,1), 1, "orange"),
    new sFace(new Cor(2/3,1,1),new Cor(1/3,1,1), new Cor(1/3,2/3,1), new Cor(2/3,2/3,1), 1, "orange"),
    new sFace(new Cor(1/3,1,1),new Cor(0,1,1), new Cor(0,2/3,1), new Cor(1/3,2/3,1), 1, "orange"),
    new sFace(new Cor(1,2/3,1),new Cor(2/3,2/3,1), new Cor(2/3,1/3,1), new Cor(1,1/3,1), 1, "orange"),
    new sFace(new Cor(2/3,2/3,1),new Cor(1/3,2/3,1), new Cor(1/3,1/3,1), new Cor(2/3,1/3,1), 1, "orange"),
    new sFace(new Cor(1/3,2/3,1),new Cor(0,2/3,1), new Cor(0,1/3,1), new Cor(1/3,1/3,1), 1, "orange"),
    new sFace(new Cor(1,1/3,1),new Cor(2/3,1/3,1), new Cor(2/3,0,1), new Cor(1,0,1), 1, "orange"),
    new sFace(new Cor(2/3,1/3,1),new Cor(1/3,1/3,1), new Cor(1/3,0,1), new Cor(2/3,0,1), 1, "orange"),
    new sFace(new Cor(1/3,1/3,1),new Cor(0,1/3,1), new Cor(0,0,1), new Cor(1/3,0,1), 1, "orange"),  
];
function degreeToRad(angle) {
  return angle * (Math.PI / 180);
}
function cos(angle){ // degree
  return Math.cos(degreeToRad(angle));
}
function sin(angle){ // degree
  return Math.sin(degreeToRad(angle));
}
Rt = function(c){
    return new Cor(
      c.x - 1/2,
      c.y - 1/2,
      c.z - 1/2,
    );
}
Rx = function(c, alpha){
  return new Cor(
    c.x,
    c.y * cos(alpha) - c.z * sin(alpha),
    c.y * sin(alpha) + c.z * cos(alpha),
  );
}
Ry = function(c, alpha){
  return new Cor(
    c.x * cos(alpha) + c.z * sin(alpha),
    c.y,
    -c.x * sin(alpha) + c.z * cos(alpha),
  );
}
Rz = function(c, alpha){
  return new Cor(
    c.x * cos(alpha) - c.y * sin(alpha),
    c.x * sin(alpha) + c.y * cos(alpha),
    c.z,
  );
}
transform = function(c){
    c = Rt(c);
    c = Rx(c, angleX);
    c = Ry(c, angleY);
    c = Rz(c, angleZ);
    return c;
}
project3dTo2d = function(c){
    return new Point(
        c.y,
        c.z
    );
}
function XY2Pixels(point){
    return [point.x + c_width / 2, -point.y + c_height / 2];
}

genPoints = function(angleX, angleY, angleZ){
    var points3d = []; 
    for (i = 0; i < originCor.length; i ++){
        c = transform(originCor[i])
        points3d.push(c);
    }
    return points3d;
}

genVecFace = function(points3d){   
    product2vec = function(v1, v2){
        return new Cor(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }
    vec = function(a, b) {
        return new Cor(b.x-a.x, b.y-a.y, b.z-a.z);
    }
    return [
        product2vec(vec(points3d[0], points3d[3]), vec(points3d[0], points3d[1])),
        product2vec(vec(points3d[4], points3d[5]), vec(points3d[4], points3d[7])),
        product2vec(vec(points3d[0], points3d[1]), vec(points3d[0], points3d[4])),
        product2vec(vec(points3d[1], points3d[2]), vec(points3d[1], points3d[5])),
        product2vec(vec(points3d[2], points3d[3]), vec(points3d[2], points3d[6])),
        product2vec(vec(points3d[0], points3d[4]), vec(points3d[0], points3d[3])),
    ];
}

function genFaceMark(vecFace){
    cos2vec = function(v1, v2){
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }    
    vecCamera = new Cor(1, 0, 0);
    var faceMark = [
        false, false, false, false, false, false
    ];
    for (var i = 0; i < 6; i++){
        faceMark[i] = (cos2vec(vecFace[i], vecCamera) >=0)
    }
    return faceMark;
}

function draw(faceMark){
    ctx.clearRect(0,0,c_width,c_height);
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillRect(0,0,c_width,c_height);
    for (var j = 0; j < allfaces.length; j ++ ){
        if (faceMark[allfaces[j].idxFace] === false) continue;
        drawsFace(allfaces[j]);
    }
}
var faceMark = genFaceMark(genVecFace(genPoints(angleX, angleY, angleZ)));
draw(faceMark);

window.addEventListener("keydown", pressdown);
window.addEventListener("keyup", pressup);
var start = null, end;
function pressdown(e){
    if (start === null) {
        start = new Date().getTime();
    }
    if (e.code === "ArrowUp") {
        var deltaY = Math.floor(timeElapsed / 5) ; // degree
        angleY += deltaY;
    }
    else if (e.code === "ArrowDown") {
        var deltaY = Math.floor(timeElapsed / 5) ; // degree
        angleY -= deltaY;
    }
    else if (e.code === "ArrowRight") {
        var deltaZ = Math.floor(timeElapsed / 5) ; // degree
        angleZ += deltaZ;
    }
    else if (e.code === "ArrowLeft") {
        var deltaX = Math.floor(timeElapsed / 5) ; // degree
        angleX += deltaX;   
    }
    else if (e.code === "Digit1"){   
        var sf1 = allfaces[20].color;
        var sf2 = allfaces[32].color;
        var sf3 = allfaces[44].color;
        allfaces[20].color = allfaces[45].color;
        allfaces[32].color = allfaces[46].color;
        allfaces[44].color = allfaces[47].color;
        
        allfaces[45].color = allfaces[36].color;
        allfaces[46].color = allfaces[24].color;
        allfaces[47].color = allfaces[12].color;

        allfaces[36].color = allfaces[2].color;
        allfaces[24].color = allfaces[1].color;
        allfaces[12].color = allfaces[0].color;

        allfaces[2].color = sf1;
        allfaces[1].color = sf2;
        allfaces[0].color = sf3;

        var sf = allfaces[9].color;
        allfaces[9].color = allfaces[33].color;
        allfaces[33].color = allfaces[35].color;
        allfaces[35].color = allfaces[11].color;
        allfaces[11].color = sf;

        var sf = allfaces[21].color;
        allfaces[21].color = allfaces[34].color;
        allfaces[34].color = allfaces[23].color;
        allfaces[23].color = allfaces[10].color;
        allfaces[10].color = sf;
        playAudio();
    } else 
    if (e.code === "Digit2"){
        var sf1 = allfaces[18].color;
        var sf2 = allfaces[30].color;
        var sf3 = allfaces[42].color;
        allfaces[18].color = allfaces[51].color;
        allfaces[30].color = allfaces[52].color;
        allfaces[42].color = allfaces[53].color;
        
        allfaces[51].color = allfaces[38].color;
        allfaces[52].color = allfaces[26].color;
        allfaces[53].color = allfaces[14].color;

        allfaces[38].color = allfaces[8].color;
        allfaces[26].color = allfaces[7].color;
        allfaces[14].color = allfaces[6].color;

        allfaces[8].color = sf1;
        allfaces[7].color = sf2;
        allfaces[6].color = sf3;

        var sf = allfaces[17].color;
        allfaces[17].color = allfaces[41].color;
        allfaces[41].color = allfaces[39].color;
        allfaces[39].color = allfaces[15].color;
        allfaces[15].color = sf;

        var sf = allfaces[29].color;
        allfaces[29].color = allfaces[40].color;
        allfaces[40].color = allfaces[27].color;
        allfaces[27].color = allfaces[16].color;
        allfaces[16].color = sf;
        playAudio();
    } else 
    if (e.code === "Digit3"){
        var sf1 = allfaces[9].color;
        var sf2 = allfaces[21].color;
        var sf3 = allfaces[33].color;
        allfaces[9].color = allfaces[45].color;
        allfaces[21].color = allfaces[48].color;
        allfaces[33].color = allfaces[51].color;
        
        allfaces[45].color = allfaces[41].color;
        allfaces[48].color = allfaces[29].color;
        allfaces[51].color = allfaces[17].color;

        allfaces[41].color = allfaces[6].color;
        allfaces[29].color = allfaces[3].color;
        allfaces[17].color = allfaces[0].color;

        allfaces[6].color = sf1;
        allfaces[3].color = sf2;
        allfaces[0].color = sf3;

        var sf = allfaces[20].color;
        allfaces[20].color = allfaces[44].color;
        allfaces[44].color = allfaces[42].color;
        allfaces[42].color = allfaces[18].color;
        allfaces[18].color = sf;

        var sf = allfaces[32].color;
        allfaces[32].color = allfaces[43].color;
        allfaces[43].color = allfaces[30].color;
        allfaces[30].color = allfaces[19].color;
        allfaces[19].color = sf;
        playAudio();
    } else 
    if (e.code === "Digit4"){
        var sf1 = allfaces[11].color;
        var sf2 = allfaces[23].color;
        var sf3 = allfaces[35].color;
        allfaces[11].color = allfaces[47].color;
        allfaces[23].color = allfaces[50].color;
        allfaces[35].color = allfaces[53].color;
        
        allfaces[47].color = allfaces[39].color;
        allfaces[50].color = allfaces[27].color;
        allfaces[53].color = allfaces[15].color;

        allfaces[39].color = allfaces[8].color;
        allfaces[27].color = allfaces[5].color;
        allfaces[15].color = allfaces[2].color;

        allfaces[8].color = sf1;
        allfaces[5].color = sf2;
        allfaces[2].color = sf3;

        var sf = allfaces[12].color;
        allfaces[12].color = allfaces[36].color;
        allfaces[36].color = allfaces[38].color;
        allfaces[38].color = allfaces[14].color;
        allfaces[14].color = sf;

        var sf = allfaces[24].color;
        allfaces[24].color = allfaces[37].color;
        allfaces[37].color = allfaces[26].color;
        allfaces[26].color = allfaces[13].color;
        allfaces[13].color = sf;
        playAudio();
    } else 
    if (e.code === "Digit5"){
        var sf1 = allfaces[18].color;
        var sf2 = allfaces[19].color;
        var sf3 = allfaces[20].color;
        allfaces[18].color = allfaces[17].color;
        allfaces[19].color = allfaces[16].color;
        allfaces[20].color = allfaces[15].color;
        
        allfaces[17].color = allfaces[14].color;
        allfaces[16].color = allfaces[13].color;
        allfaces[15].color = allfaces[12].color;

        allfaces[14].color = allfaces[11].color;
        allfaces[13].color = allfaces[10].color;
        allfaces[12].color = allfaces[9].color;

        allfaces[11].color = sf1;
        allfaces[10].color = sf2;
        allfaces[9].color = sf3;

        var sf = allfaces[0].color;
        allfaces[0].color = allfaces[6].color;
        allfaces[6].color = allfaces[8].color;
        allfaces[8].color = allfaces[2].color;
        allfaces[2].color = sf;

        var sf = allfaces[3].color;
        allfaces[3].color = allfaces[7].color;
        allfaces[7].color = allfaces[5].color;
        allfaces[5].color = allfaces[1].color;
        allfaces[1].color = sf;
        playAudio();
    } else 
    if (e.code === "Digit6"){
        var sf1 = allfaces[42].color;
        var sf2 = allfaces[43].color;
        var sf3 = allfaces[44].color;
        allfaces[42].color = allfaces[41].color;
        allfaces[43].color = allfaces[40].color;
        allfaces[44].color = allfaces[39].color;
        
        allfaces[41].color = allfaces[38].color;
        allfaces[40].color = allfaces[37].color;
        allfaces[39].color = allfaces[36].color;

        allfaces[38].color = allfaces[35].color;
        allfaces[37].color = allfaces[34].color;
        allfaces[36].color = allfaces[33].color;

        allfaces[35].color = sf1;
        allfaces[34].color = sf2;
        allfaces[33].color = sf3;

        var sf = allfaces[45].color;
        allfaces[45].color = allfaces[51].color;
        allfaces[51].color = allfaces[53].color;
        allfaces[53].color = allfaces[47].color;
        allfaces[47].color = sf;

        var sf = allfaces[48].color;
        allfaces[48].color = allfaces[52].color;
        allfaces[52].color = allfaces[50].color;
        allfaces[50].color = allfaces[46].color;
        allfaces[46].color = sf;
        playAudio();
    }
    faceMark = genFaceMark(genVecFace(genPoints(angleX, angleY, angleZ)));
    draw(faceMark);
}
function pressup(e){
    end = new Date().getTime();
    timeElapsed = end - start;
    start = null;
}