const ingreseTexto = document.getElementById("ingreseTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const right = document.getElementById("right");

let reemplazar = [
    ["e" , "enter"],
    ["o" , "ober"],
    ["a" , "ai"],
    ["u" , "ufat"],
]

const replace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    imagen2.style.display = "none";
    ingreseTexto.value = "";
    mensajeInfo.style.display = "none";
    btnCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

btnEncriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase()
    if(texto != ""){
        function encriptar (newText){
            for(let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar [i][1])
                };
            };
            return newText;
        };
    }
    else {
        alert("Ingrese texto a encriptar");
    }
    replace(encriptar(texto));
});

btnDesencriptar.addEventListener("click", () =>{
    const texto = ingreseTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText){
            for (let i = 0; i < reemplazar.length; i++ ){
                if (newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newText
        };
    } else {
        alert("Ingrese texto a desencriptar");
    }
    replace(desencriptar(texto))
});

btnCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");

    mensajeFinal.innerHTML= "";
    imagen2.style.display = "block";
    mensajeInfo.style.display = "block";
    btnCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingreseTexto.focus();
})
