$(window).resize(function()
{
    resize();
});


function resize()
{
    $("#introduction h1").css("left", (($("#introduction").width() - $("#introduction h1").width()) / 2));
}