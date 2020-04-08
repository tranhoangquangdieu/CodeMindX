function domchange1()
{
    let h3 = document.getElementById("bai1");
    h3.textContent="Game Started";
}

function domchange23()
{
    let p=document.getElementById("content");
    p.style.color="blue";
    p.style.backgroundColor="purple";
}

function domchange4()
{
    let h1p=document.getElementsByClassName("font-20");
    for(i=0;i<=(h1p.length-1);i++)
    {
        h1p[i].style.fontSize="20px";
    }
}
