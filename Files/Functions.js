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

// #region To-links
function toHomePage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../index.html")
    }, 500);
}

function toHomePageFromHiddenPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../../index.html")
    }, 500);
}

function toAboutPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../otherPages/About.html")
    }, 500);
}

function toLearnPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../otherPages/Learn.html")
    }, 500);
}

function toProjectsPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../otherPages/Projects.html")
    }, 500);
}

function toLearnCSharpPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../Learn/CSharp.html")
    }, 500);
}

function toLearnHTMLPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../Learn/HTML.html")
    }, 500);
}

function toLearnCSSPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../Learn/CSS.html")
    }, 500);
}

function toHiddenPage()
{
    toPageAnimation();
    setTimeout(function ()
    {
        location.replace("../otherPages/hiddenPages/hiddenHome.html")
    }, 500);
}

function toPageAnimation()
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
}
// #endregion

// #region Hidden page analitics
var count01 = 0;
var count02 = 0;
var count04 = 0;
var showHiddenPage = false;

function get01OneUp()
{
    count01++;
    sessionStorage.setItem("count01Saved", count01);
    checkForHiddenPage();
}

function get02OneUp()
{
    count02++;
    sessionStorage.setItem("count02Saved", count02);
    checkForHiddenPage();
}

function get04OneUp()
{
    count04++;
    sessionStorage.setItem("count04Saved", count04);
    checkForHiddenPage();
}

function checkForHiddenPage()
{
    count01 = sessionStorage.getItem("count01Saved");
    count02 = sessionStorage.getItem("count02Saved");
    count04 = sessionStorage.getItem("count04Saved");
    showHiddenPage = sessionStorage.getItem("showHiddenPageSave");

    if ((count01 == 2 && count02 == 8 && count04 == 1) || showHiddenPage)
    {
        showHiddenPage = true;
        sessionStorage.setItem("showHiddenPageSave", showHiddenPage);

        if (document.getElementById("hoddenPageNotification") != null)
            document.getElementById("hoddenPageNotification").style.display = "unset";

        if (document.getElementById("HiddenPageButton") != null)
            document.getElementById("HiddenPageButton").style.display = "unset";

        if (document.getElementById("hiddenPageBanner") != null)
            document.getElementById("hiddenPageBanner").style.display = "none";
    }
}
// #endregion

function changeLearnBox(thisLearnBox, newLearnBoxHolderID)
{
    var oldLearnBox = document.getElementById("learnBoxHolder");
    oldLearnBox.remove();

    var BottomBar = document.getElementById("bottomBar");
    BottomBar.remove();
    var BottomBarText = document.getElementById("bottomBarHolder").innerHTML;

    var scrollBoxButtons = document.getElementsByClassName("scrollSectionBox");
    for (i = 0; i < scrollBoxButtons.length; i++)
        scrollBoxButtons[i].className = "scrollSectionBox";

    var newLearnBox = document.getElementById(newLearnBoxHolderID).innerHTML;
    document.getElementById("pageContent").innerHTML += newLearnBox;
    document.getElementById("pageContent").innerHTML += BottomBarText;
    document.getElementById(thisLearnBox).className += " Active";
}

function copyText(textToCopyID)
{
    var range = document.createRange();
    range.selectNode(document.getElementById(textToCopyID));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function defaultFunction()
{

}