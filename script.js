let menuVisible = false;
// funcion que oculta menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    //oculto el menu una vez selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("excel");
        habilidades[3].classList.add("rstudio");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("tomardecision");
    }
}

window.onscroll =  function(){
    efectoHabilidades();
}