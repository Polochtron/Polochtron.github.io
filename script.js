var nbAleatoires=Math.floor(Math.random()*1000)+1;
var solution=document.getElementById("solution");
console.log("test");
function compare(rep) 
{
    if (rep==nbAleatoires)
    {
        console.log("rv");
        solution.innerHTML="Bravo! Vous avez trouvez le nombre";
    }
    else if (rep>nbAleatoires)
    {
        console.log("rv");
        solution.innerHTML="C'est plus petit !";
    }
    else if (rep>nbAleatoires)
    {
        console.log("rv");
        solution.innerHTML="C'est plus grand !";
    }
}