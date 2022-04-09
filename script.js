var nbAleatoires=Math.floor(Math.random()*1000)+1;
var solution=document.getElementById("solution");
var rep=document.getElementById("rep");

function compare() 
{
    if (rep.value==nbAleatoires)
    {
        solution.innerHTML="Bravo! Vous avez trouvez le nombre";
    }
    else if (rep.value>nbAleatoires)
    {
        solution.innerHTML="C'est plus petit !";
    }
    else if (rep.value<nbAleatoires)
    {
        solution.innerHTML="C'est plus grand !";
    }
}