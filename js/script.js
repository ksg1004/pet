document.addEventListener("DOMContentLoaded",()=>{

    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");
    
    let i = 0;
    menu.addEventListener("click",()=>{
        i++;
        if(i==1)          nav.style.height ="90vh";
        else{
            nav.style.height ="0";
            i = 0;
        }


    });

    const search =document.querySelector("#hair #search");
    const searchBox = document.querySelector("#hair header input");
    search.addEventListener("click" , ()=>{
        searchBox.style.display = "block";
        searchBox.style.width = "100px";
    });

});////////////////////end