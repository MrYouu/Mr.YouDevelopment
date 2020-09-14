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

function defaultFunction()
{

}