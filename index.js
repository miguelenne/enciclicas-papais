function modoLeitura(){
    if (this.checked) {
        body.setAttribute("style", "background-color: #edd1b0");
        if (alertaTraducao !== null) { alertaTraducao.setAttribute("style", "color: black"); }
        if (textoDocumento !== null) { textoDocumento.setAttribute("style", "color: black"); }
        if (tipo !== null) { tipo.setAttribute("style", "color: black"); }
        if (descricao !== null) { descricao.setAttribute("style", "color: black"); }
        if (switchWrapper !== null){ switchWrapper.setAttribute("style", "color: black"); }
        if (nome !== null){ nome.setAttribute("style", "color: black;"); }
        if (header !== null){ header.setAttribute("style", "color: black;"); }
        if (textoIndex !== null){ textoIndex.setAttribute("style", "color: black"); }
        if (barraPapa !== null){
            for(i=0;i<barraPapa.length;i++){ barraPapa[i].setAttribute("style", "color: black"); }
        }
       

    }

    else {
        body.setAttribute("style", "background-color: white"); 
        if (alertaTraducao !== null) { alertaTraducao.setAttribute("style", "color: black"); }
        if (textoDocumento !== null) { textoDocumento.setAttribute("style", "color: black"); }
        if (tipo !== null) { tipo.setAttribute("style", "color: black"); }
        if (descricao !== null) { descricao.setAttribute("style", "color: black"); }
        if (switchWrapper !== null){ switchWrapper.setAttribute("style", "color: black"); }
        if (nome !== null){ nome.setAttribute("style", "color: black"); }
        if (header !== null){ header.setAttribute("style", "color: black"); }
        if (textoIndex !== null){ textoIndex.setAttribute("style", "color: black"); }
        if (barraPapa !== null){
            for(i=0;i<barraPapa.length;i++){ barraPapa[i].setAttribute("style", "color: black"); }
        }
    }
    
  
}

function modoEscuro(){
    if (this.checked) {
        body.setAttribute("style", "background-color: black");
        if (alertaTraducao !== null) { alertaTraducao.setAttribute("style", "color: #e8e6e3"); }
        if (textoDocumento !== null) { textoDocumento.setAttribute("style", "color: #e8e6e3"); }
        if (tipo !== null) { tipo.setAttribute("style", "color: #e8e6e3"); }
        if (descricao !== null) { descricao.setAttribute("style", "color: #e8e6e3"); }
        if (switchWrapper !== null){ switchWrapper.setAttribute("style", "color: #e8e6e3"); }
        if (nome !== null){ nome.setAttribute("style", "color: #e8e6e3"); }
        if (header !== null){ header.setAttribute("style", "color: #e8e6e3"); }
        if (textoIndex !== null){ textoIndex.setAttribute("style", "color: #e8e6e3"); }
        if (barraPapa !== null){
            for(i=0;i<barraPapa.length;i++){ barraPapa[i].setAttribute("style", "color: white"); }
        }
    } 
  
    else {
        body.setAttribute("style", "background-color: white");
        if (alertaTraducao !== null) { alertaTraducao.setAttribute("style", "color: black"); }
        if (textoDocumento !== null) { textoDocumento.setAttribute("style", "color: black"); }
        if (tipo !== null) { tipo.setAttribute("style", "color: black"); }
        if (descricao !== null) { descricao.setAttribute("style", "color: black"); }
        if (switchWrapper !== null){ switchWrapper.setAttribute("style", "color: black"); }
        if (nome !== null){ nome.setAttribute("style", "color: black"); }
        if (header !== null){ header.setAttribute("style", "color: black"); }
        if (textoIndex !== null){ textoIndex.setAttribute("style", "color: black"); }
        if (barraPapa !== null){
            for(i=0;i<barraPapa.length;i++){ barraPapa[i].setAttribute("style", "color: black"); }
        }
    }
}


const darkModeSwitch = document.querySelector("#switch-basic-1");
const readModeSwitch = document.querySelector("#switch-basic-2");
const switchWrapper = document.querySelector(".switch-wrapper");
const barraPapa = document.querySelectorAll(".barraPapa");
const body = document.querySelector("body");
const textoDocumento = document.querySelector(".textoDocumento");
const nome = document.querySelector(".nomePapa");
const tipo = document.querySelector(".tipoDocumento");
const descricao = document.querySelector(".descricaoDocumento");
const header = document.querySelector("header");
const textoIndex = document.querySelector(".documentosRecentes");
const alertaTraducao = document.querySelector(".alertaTraducao");
readModeSwitch.addEventListener("change", modoLeitura)
darkModeSwitch.addEventListener('change', modoEscuro)
