var setadireita =window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaesquerda =window.document.getElementById("setaesquerda")


function RolarParaDireita() {
    setadireita.style = "display:none"
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaesquerda.style = "display:flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    setadireita.style = "display:flex"
    leonardo.style ="display:flex"
    setaesquerda.style = "display:none"
    bruna.style ="display:none"
}