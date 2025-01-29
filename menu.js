let menu = document.getElementById('menu');
let nav = document.getElementById('nav-1');
let bx = document.getElementsByClassName('bx-menu')[0]

// nav.style.height="0px";
menu.addEventListener('click',show);

function show(){
    if(nav.style.display=="none"){
        nav.style.height="100vh";
        menu.innerHTML="X";
        nav.style.backgroundColor="lightblue"
        nav.style.display="block"
       
    }
    else{
        nav.style.display="none"
        menu.innerHTML="<i class='bx bx-menu'></i>";

    }
    
}

