
	var input = document.getElementById("input-suscribir").value;
	var boton= document.getElementById("boton-suscri");
  
  boton.addEventListener("click",function(){
  	if (input.length=== 0){
		alert("escribe tu correo")
	}
	else{
      alert("bien")
	}
  });