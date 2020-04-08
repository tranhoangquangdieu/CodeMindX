btn_search.addEventListener("click",function(){
    let clickinp=document.getElementById("search_bar");
    let p=document.getElementById("para");
    console.log(clickinp);
    console.log(clickinp.value);
    p.textContent=clickinp.value;
    p.style.color="clickinp.value";
    clickinp.value="";
})


btn_test.addEventListener("click",function(){
    let h3=document.getElementById("quote");
    console.log(h3);
    h3.style.color="red";
    h3.textContent="You are the source of my joy, the center of my world and the whole of my heart";
    h3.style.fontSize="30px";
})
