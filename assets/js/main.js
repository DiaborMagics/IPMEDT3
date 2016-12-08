window.onload = function()
{
    document.getElementById('navIntroductionPage').style.color = '#d50000';
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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

//functie om huidige pagina link in menu te highlighten en kleuren
// $(function()
// {
//     $('a').each(function()
//     {
//         if ($(this).prop('href') == window.location.href)
//         {
//             $(this).addClass('huidig');
//
//         }
//     });
// });
//
// function reload()
// {
//     location.reload();
// }

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