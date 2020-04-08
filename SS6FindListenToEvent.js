function domfind1()
{
let h3 = document.getElementById("title");
console.log(h3);
}

function domfind2()
{
    let p123 = document.getElementsByClassName("text");
    console.log(p123[2]);
}

function domfind3()
{
    let h1123 = document.getElementsByTagName("h1");
    console.log(h1123[1]); 
}

clickbtn.addEventListener("click",domeventlisten1);
function domeventlisten1()
{
    alert("User Clicked");
}

inpt.addEventListener("keyup",domeventlisten2);
function domeventlisten2()
{
    console.log("User keyed up");
}

bai3.addEventListener("mouseover",domeventlisten3)
function domeventlisten3()
{
    console.log("User moused over");
}


md.addEventListener("mousedown",function(e)
{
    console.log(e.target);
    console.log(e.target.value);
})

var dulieu;
click.addEventListener("click", clickchuot)
inp5.addEventListener("keyup",function(e){
    dulieu = e.target.value;
})
function clickchuot()
{
    alert(dulieu);
}




