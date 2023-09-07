

NoseX = 0;
NoseY = 0;
function preload()
{
     clownnose =  loadImage("https://i.postimg.cc/wvg1zL70/clown.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("Posenet is loaded");
}

function draw()
{
    image(video,0,0,300,300);
    image(clownnose,NoseX,NoseY,20,20);
}

function gotposes(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        NoseX = results[0].pose.nose.x-10;
        NoseY = results[0].pose.nose.y-7;
        console.log("nosex = " + NoseX);
        console.log("nosey = " + NoseY);
        
    }
}

function filterrr()
{
    save("filtered_image.png") 
}