const questionario = window.document.getElementById("questionario")
const resultado = window.document.querySelector(".resultado")
const urso = window.document.getElementById("urso")
const body = window.document.getElementById("body")
const nao = window.document.getElementById("nao")
let estado = -1

function mostrarResultado() {
    urso.style= "display: none;"
    resultado.style= "display: block;";
    questionario.style= "display: none;";
    body.style= "background: url('https://i.makeagif.com/media/11-12-2016/tukYZS.gif'); background-repeat: no-repeat; background-size: cover; height: 100vh;"
    
}

function move() {
    estado ++
    if (estado == 0) {
        nao.style.transform="translate(130px, -150px)"
    } if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}