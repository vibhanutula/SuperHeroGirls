Canvas = new fabric.Canvas("myCanvas");

Bumble_X = 10;
Bumble_Y = 10;

Wonder_X = 30;
Wonder_Y = 30;

Super_X = 50;
Super_Y = 50;

BatX = 70;
BatY = 70;

height = 320;
width = 100;
function NewImage(){
    fabric.Image.fromURL(get_image ,function (Img){
        BlockObject = Img;
        BlockObject.scaleToWidth(Block_Img_Wid);
        BlockObject.scaleToHeight(Block_Img_Hei);
        BlockObject.set({
            top: Player_Y,
            left: Player_X
        });
        Canvas.add(BlockObject);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPress = e.keyCode;
    console.log(keyPress);

    if(keyPress == '87'){
        NewImage("Wonder.png");
        console.log("w");
    }

    if(keyPress == '71'){
        NewImage("Super.png");
        console.log("g");
    }

    if(keyPress == '76'){
        NewImage("Bumble.png");
        console.log("l");
    }

    if(keyPress == '84'){
        NewImage("Bat.jpg");
        console.log("t");
    }
}
