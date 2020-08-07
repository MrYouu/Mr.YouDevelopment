//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: krisvalchev@gmail.com

var sectionID = 1;

function nextSection()
{
    if (sectionID == 1)
    {
        document.getElementById("secondSection").style.clipPath = "circle(140.9% at 0 0)";
        document.getElementById("leftArrow").style.backgroundColor = "#F56040";

        document.getElementById("firstSectionName").className = "";
        document.getElementById("secondSectionName").className = "Active";

        //  Removing first
        document.getElementById("mainPageImage").style.transform = "translateY(0px)";
        document.getElementById("mainPageImage").style.opacity = "1";
        document.getElementById("mainPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
        
        document.getElementById("mainTitle").style.transform = "translateY(0px)";
        document.getElementById("mainTitle").style.opacity = "1";
        document.getElementById("mainTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("mainInfo").style.transform = "translateY(0px)";
        document.getElementById("mainInfo").style.opacity = "1";
        document.getElementById("mainInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("mainButtonOne").style.transform = "translateY(0px)";
        document.getElementById("mainButtonOne").style.opacity = "1";
        document.getElementById("mainButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("mainButtonTwo").style.transform = "translateY(0px)";
        document.getElementById("mainButtonTwo").style.opacity = "1";
        document.getElementById("mainButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        //  Entering second
        document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
        document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

        sectionID = 2;
    }
    else if (sectionID == 2)
    {
        document.getElementById("thirdSection").style.clipPath = "circle(140.9% at 0 0)";
        document.getElementById("leftArrow").style.backgroundColor = "#049DD9";

        document.getElementById("secondSectionName").className = "";
        document.getElementById("thirdSectionName").className = "Active";

        //  Removing first
        document.getElementById("aboutPageImage").style.transform = "translateY(0px)";
        document.getElementById("aboutPageImage").style.opacity = "1";
        document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
        
        document.getElementById("aboutTitle").style.transform = "translateY(0px)";
        document.getElementById("aboutTitle").style.opacity = "1";
        document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("aboutInfo").style.transform = "translateY(0px)";
        document.getElementById("aboutInfo").style.opacity = "1";
        document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("aboutButtonOne").style.transform = "translateY(0px)";
        document.getElementById("aboutButtonOne").style.opacity = "1";
        document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("aboutButtonTwo").style.transform = "translateY(0px)";
        document.getElementById("aboutButtonTwo").style.opacity = "1";
        document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        //  Entering second
        document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
        document.getElementById("learnTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("learnInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

        sectionID = 3;
    }
    else if (sectionID == 3)
    {
        document.getElementById("fourthSection").style.clipPath = "circle(140.9% at 0 0)";
        document.getElementById("leftArrow").style.backgroundColor = "#75FF96";

        document.getElementById("thirdSectionName").className = "";
        document.getElementById("fourthSectionName").className = "Active";

        //  Removing first
        document.getElementById("learnPageImage").style.transform = "translateY(0px)";
        document.getElementById("learnPageImage").style.opacity = "1";
        document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
        
        document.getElementById("learnTitle").style.transform = "translateY(0px)";
        document.getElementById("learnTitle").style.opacity = "1";
        document.getElementById("learnTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("learnInfo").style.transform = "translateY(0px)";
        document.getElementById("learnInfo").style.opacity = "1";
        document.getElementById("learnInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("learnButtonOne").style.transform = "translateY(0px)";
        document.getElementById("learnButtonOne").style.opacity = "1";
        document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        document.getElementById("learnButtonTwo").style.transform = "translateY(0px)";
        document.getElementById("learnButtonTwo").style.opacity = "1";
        document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        //  Entering second
        document.getElementById("projectsPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
        document.getElementById("projectsTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("projectsInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("projectsButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("projectsButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

        sectionID = 4;
    }
}

function prevSection()
{
    if (sectionID == 2)
    {
        document.getElementById("secondSection").style.clipPath = "circle(0.5% at 0 0)";
        document.getElementById("leftArrow").style.backgroundColor = "#FFD400";

        document.getElementById("secondSectionName").className = "";
        document.getElementById("firstSectionName").className = "Active";

        //  Entering first
        document.getElementById("mainPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
        document.getElementById("mainTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("mainInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("mainButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("mainButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

        //  Removing second
        document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
        document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        sectionID = 1;
    }
    else if (sectionID == 3)
    {
        document.getElementById("thirdSection").style.clipPath = "circle(0.5% at 0 0)";
        document.getElementById("leftArrow").style.backgroundColor = "#F56040";

        document.getElementById("thirdSectionName").className = "";
        document.getElementById("secondSectionName").className = "Active";

        //  Entering first
        document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
        document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

        //  Removing second
        document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
        document.getElementById("learnTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("learnInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        sectionID = 2;
    }
    else if (sectionID == 4)
    {
        document.getElementById("fourthSection").style.clipPath = "circle(0.5% at 0 0)";
        document.getElementById("leftArrow").style.backgroundColor = "#049DD9";

        document.getElementById("fourthSectionName").className = "";
        document.getElementById("thirdSectionName").className = "Active";

        //  Entering first
        document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
        document.getElementById("learnTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("learnInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
        document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

        //  Removing second
        document.getElementById("projectsPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
        document.getElementById("projectsTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("projectsInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("projectsButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
        document.getElementById("projectsButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

        sectionID = 3;
    }
}

function Home()
{
    document.getElementById("secondSection").style.clipPath = "circle(0.5% at 0 0)";
    document.getElementById("thirdSection").style.clipPath = "circle(0.5% at 0 0)";
    document.getElementById("fourthSection").style.clipPath = "circle(0.5% at 0 0)";
    document.getElementById("leftArrow").style.backgroundColor = "#FFD400";

    document.getElementById("secondSectionName").className = "";
    document.getElementById("thirdSectionName").className = "";
    document.getElementById("fourthSectionName").className = "";
    document.getElementById("firstSectionName").className = "Active";

    //  Entering first
    document.getElementById("mainPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
    document.getElementById("mainTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("mainInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("mainButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("mainButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

    //  Removing second
    document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("learnTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("projectsPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("projectsTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    sectionID = 1;
}

function About()
{
    document.getElementById("secondSection").style.clipPath = "circle(140.9% at 0 0)";
    document.getElementById("thirdSection").style.clipPath = "circle(0.5% at 0 0)";
    document.getElementById("fourthSection").style.clipPath = "circle(0.5% at 0 0)";
    document.getElementById("leftArrow").style.backgroundColor = "#F56040";

    document.getElementById("firstSectionName").className = "";
    document.getElementById("thirdSectionName").className = "";
    document.getElementById("fourthSectionName").className = "";
    document.getElementById("secondSectionName").className = "Active";

    //  Entering first
    document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
    document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

    //  Removing second
    document.getElementById("mainPageImage").style.transform = "translateY(0px)";
    document.getElementById("mainPageImage").style.opacity = "1";
    document.getElementById("mainPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    
    document.getElementById("mainTitle").style.transform = "translateY(0px)";
    document.getElementById("mainTitle").style.opacity = "1";
    document.getElementById("mainTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainInfo").style.transform = "translateY(0px)";
    document.getElementById("mainInfo").style.opacity = "1";
    document.getElementById("mainInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainButtonOne").style.transform = "translateY(0px)";
    document.getElementById("mainButtonOne").style.opacity = "1";
    document.getElementById("mainButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainButtonTwo").style.transform = "translateY(0px)";
    document.getElementById("mainButtonTwo").style.opacity = "1";
    document.getElementById("mainButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("learnTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("projectsPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("projectsTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    sectionID = 2;
}

function Learn()
{
    document.getElementById("secondSection").style.clipPath = "circle(140.9% at 0 0)";
    document.getElementById("thirdSection").style.clipPath = "circle(140.9% at 0 0)";
    document.getElementById("fourthSection").style.clipPath = "circle(0.5% at 0 0)";
    document.getElementById("leftArrow").style.backgroundColor = "#049DD9";

    document.getElementById("firstSectionName").className = "";
    document.getElementById("secondSectionName").className = "";
    document.getElementById("fourthSectionName").className = "";
    document.getElementById("thirdSectionName").className = "Active";

    //  Entering first
    document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
    document.getElementById("learnTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("learnInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

    //  Removing second
    document.getElementById("mainPageImage").style.transform = "translateY(0px)";
    document.getElementById("mainPageImage").style.opacity = "1";
    document.getElementById("mainPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    
    document.getElementById("mainTitle").style.transform = "translateY(0px)";
    document.getElementById("mainTitle").style.opacity = "1";
    document.getElementById("mainTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainInfo").style.transform = "translateY(0px)";
    document.getElementById("mainInfo").style.opacity = "1";
    document.getElementById("mainInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainButtonOne").style.transform = "translateY(0px)";
    document.getElementById("mainButtonOne").style.opacity = "1";
    document.getElementById("mainButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainButtonTwo").style.transform = "translateY(0px)";
    document.getElementById("mainButtonTwo").style.opacity = "1";
    document.getElementById("mainButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("projectsPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("projectsTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("projectsButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    sectionID = 3;
}

function Projects()
{
    document.getElementById("secondSection").style.clipPath = "circle(140.9% at 0 0)";
    document.getElementById("thirdSection").style.clipPath = "circle(140.9% at 0 0)";
    document.getElementById("fourthSection").style.clipPath = "circle(140.9% at 0 0)";
    document.getElementById("leftArrow").style.backgroundColor = "#75FF96";

    document.getElementById("firstSectionName").className = "";
    document.getElementById("secondSectionName").className = "";
    document.getElementById("thirdSectionName").className = "";
    document.getElementById("fourthSectionName").className = "Active";

    //  Entering first
    document.getElementById("projectsPageImage").style.animation = "mainPageImageAnimationIn .3s ease-in forwards";
    document.getElementById("projectsTitle").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("projectsInfo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("projectsButtonOne").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";
    document.getElementById("projectsButtonTwo").style.animation = "mainPageTextAnimationIn .3s ease-in forwards";

    //  Removing second
    document.getElementById("mainPageImage").style.transform = "translateY(0px)";
    document.getElementById("mainPageImage").style.opacity = "1";
    document.getElementById("mainPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    
    document.getElementById("mainTitle").style.transform = "translateY(0px)";
    document.getElementById("mainTitle").style.opacity = "1";
    document.getElementById("mainTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainInfo").style.transform = "translateY(0px)";
    document.getElementById("mainInfo").style.opacity = "1";
    document.getElementById("mainInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainButtonOne").style.transform = "translateY(0px)";
    document.getElementById("mainButtonOne").style.opacity = "1";
    document.getElementById("mainButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("mainButtonTwo").style.transform = "translateY(0px)";
    document.getElementById("mainButtonTwo").style.opacity = "1";
    document.getElementById("mainButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("aboutPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("aboutTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("aboutButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    document.getElementById("learnPageImage").style.animation = "mainPageImageAnimationOut .3s ease-out forwards";
    document.getElementById("learnTitle").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnInfo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnButtonOne").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";
    document.getElementById("learnButtonTwo").style.animation = "mainPageTextAnimationOut .3s ease-out forwards";

    sectionID = 4;
}

function gameMenuOpen()
{
    var gamesList = document.querySelectorAll("[id='gameHolder']");
    var appsList = document.querySelectorAll("[id='appHolder']");

    for(var i = 0; i < gamesList.length; i++)
    {
        gamesList[i].style.animation = "slipeRightGameAppAnimation .3s ease-out forwards";
    }

    for(var i = 0; i < appsList.length; i++)
    {
        appsList[i].style.animation = "slipeRightGameAppAnimation .3s ease-out forwards";
    }

    document.getElementById("spacerProjects").style.height = "880px";
    document.getElementById("gameButton").className = "buttonsHolder Projects Active"
    document.getElementById("appButton").className = "buttonsHolder Projects theOtherOne";
}

function appMenuOpen()
{
    var gamesList = document.querySelectorAll("[id='gameHolder']");
    var appsList = document.querySelectorAll("[id='appHolder']");

    for(var i = 0; i < gamesList.length; i++)
    {
        gamesList[i].style.transform = "translateY(0px)";
        gamesList[i].style.opacity = "1";
        gamesList[i].style.animation = "slipeLeftGameAppAnimation .3s ease-out forwards";
    }

    for(var i = 0; i < appsList.length; i++)
    {
        appsList[i].style.transform = "translateY(0px)";
        appsList[i].style.opacity = "1";
        appsList[i].style.animation = "slipeLeftGameAppAnimation .3s ease-out forwards";
    }

    document.getElementById("spacerProjects").style.height = "230px";
    document.getElementById("appButton").className = "buttonsHolder Projects Active";
    document.getElementById("gameButton").className = "buttonsHolder Projects theOtherOne";
}

document.addEventListener('keydown', function(event)
{
    if (event.keyCode == 37)
    {
        prevSection();
    }
    else if (event.keyCode == 39)
    {
        nextSection();
    }
});

function defaultFunction()
{

}