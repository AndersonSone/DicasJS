window.onload=function(){
	const txt1=document.querySelector('.escrito');
	const txt2=document.querySelector('.copia');
	const lista=document.querySelector('#adicionando');
	const btn=document.querySelector('.botao');
	const btn2=document.querySelector('.botao2');
	let checkbox = document.getElementById('termos_de_contrato');
	const esconde=document.querySelector('.esconder');
	vetor=[];
btn.addEventListener('click',()=>{
	if(checkbox.checked) {
    //txt2.value=txt1.value;
    vetor.push(txt1.value);
    txt2.value="adicionado com sucesso";

} else {
	alert('deve clicar no botao de confirmar');
    txt2.value="";
}})
btn2.addEventListener('click',()=>{
	for(var i in vetor) {
	var li = document.createElement("li");
	var textoLi = document.createTextNode(vetor[i]);
	li.appendChild(textoLi);
	lista.appendChild(li);

	}
})


esconde.addEventListener('click', function() {
    
  if(lista.style.display === 'block') {
      lista.style.display = 'none';
  } else {
      lista.style.display = 'block';
  }
})

}