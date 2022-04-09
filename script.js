var nbAleatoires=Math.floor(Math.random()*1000)+1;
var solution=document.getElementById("solution");
function compare(rep) 
{
    if (rep==nbAleatoires)
    {
        solution.innerHTML="Bravo! Vous avez trouvez le nombre"
    }
    else if (rep>nbAleatoires)
    {
        solution.innerHTML="C'est plus petit !"
    }
    else if (rep>nbAleatoires)
    {
        solution.innerHTML="C'est plus grand !"
    }
    var a=1
}