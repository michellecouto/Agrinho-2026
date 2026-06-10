const botao = document.getElementById("btnSaibaMais");
const texto = document.getElementById("textoCompleto");

botao.addEventListener("click", () => {
    if (texto.style.display === "block") {
        texto.style.display = "none";
        botao.textContent = "Saiba Mais";
    } else {
        texto.style.display = "block";
        botao.textContent = "Mostrar Menos";
    }
});