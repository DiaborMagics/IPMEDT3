window.onload = function()
{
    document.getElementById('navIntroductionPage').style.color = '#d50000';
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    console.log('Page needs to be refreshed when switching between desktop and mobile width');
}
// $(window).resize(function()
// {
//     resize();
// });
//
//
// function resize()
// {
//     $("#introduction h1").css("left", (($("#introduction").width() - $("#introduction h1").width()) / 2));
// }

if (screen.width < 801)
{
    function openMenu()
    {
        document.getElementById("mySidenav").style.width = "80%";
        document.getElementById("filter").style.display = "block";
    }

    /* set 0 */
    function closeMenu()
    {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("filter").style.display = "none";

    }
}

else if (screen.width > 800)
{
        function openMenu()
    {
        document.getElementById("mySidenav").style.width = "248px";
    }

    /* set 0 */
    function closeMenu()
    {
        console.log('Desktop version; not closing');
    }

    //openMenu(); hier aanroepen voor DESKTOP VERSIE
    openMenu();
}



function highlightIntro()
{
    document.getElementById('navIntroductionPage').style.color ='#d50000';
    document.getElementById('navPokemonPage').style.color ='#212121';
    document.getElementById('navVRpage').style.color ='#212121';
}

function highlightPokemon()
{
    document.getElementById('navPokemonPage').style.color ='#d50000';
    document.getElementById('navIntroductionPage').style.color ='#212121';
    document.getElementById('navVRpage').style.color ='#212121';
}

function highlightVR()
{
    document.getElementById('navVRpage').style.color ='#d50000';
    document.getElementById('navPokemonPage').style.color ='#212121';
    document.getElementById('navIntroductionPage').style.color ='#212121';
}