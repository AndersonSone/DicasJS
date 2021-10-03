
let checkbox = document.getElementById('termos_de_contrato');
checkbox.addEventListener('click',()=>{


if(checkbox.checked) {
    console.log("O cliente marcou o checkbox");
} else {
    console.log("O cliente não marcou o checkbox");
}
})