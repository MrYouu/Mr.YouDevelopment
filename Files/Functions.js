//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: mr.youdevelopment@gmail.com

function showCoords(event)
{
  var x = event.clientX;
  var y = event.clientY;
  var coords = "Y coords: " + y + ", X coords: " + x;
  document.getElementById("mouseCoordinatesText").innerHTML = coords;
}

function openSideMenu()
{
    document.getElementById("sideMenu").style.transform = "translateX(0%)";
}

function closeSideMenu()
{
    document.getElementById("sideMenu").style.transform = "translateX(100%)";
}

function redirectionButtonAnimation()
{
    document.getElementById("redirectionButton01").style.height = "100%";

    setTimeout(function ()
    {
        document.getElementById("redirectionButton02").style.height = "100%";
    }, 100);

    setTimeout(function ()
    {
        document.getElementById("redirectionButton03").style.height = "100%";
    }, 200);

    setTimeout(function ()
    {
        location.replace("../otherPages/About.html")
    }, 500);
}

function defaultFunction()
{

}