var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");


function new_image()
{
fabric.Image.fromURL('AniversarioImagem.png', function(img){
    blockImageObject = img;
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
        top:0,
        left:0
    });
    canvas.add(blockImageObject)
   })
}

var ilv = "Feliz  aniversário !";
function playSound(){
    x.play();
    document.getElementById("textILV").innerHTML = ilv;
    document.getElementById("clickBtnS").innerHTML = ":D"
}
