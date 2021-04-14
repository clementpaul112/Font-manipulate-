function setup()
{
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,500);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes)
}

function modelLoaded()
{
    console.log("poseNet is intialized")
}

function gotposes(results)
{
    if (results.lenght > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#FFFFFF');
}