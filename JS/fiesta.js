function tarifas (edad_usuario) {
	if (edad_usuario >= 10 && edad_usuario <= 18){

		console.log ("Menores de 18 pagan tarifa estudiante $$$$")
	}
	
	
	if (edad_usuario >= 19 && edad_usuario <= 30){
	
		console.log ("Entre 19 y 30 años pagan $$$$")
	}
	
	if (edad_usuario >= 31 ){
	
		console.log ("Mayores de 31 pagan $$$$")
	}
	
}


let nombre_apellido = prompt ("Ingresa tu nombre y apellido");
let edad_usuario = 0;

while (true) {

	edad_usuario = parseInt(prompt("ingrese su edad"));

	if (edad_usuario >= 10) {
		break;
	}

}

tarifas (edad_usuario);



console.log ("Bienvenido a la fiesta")