function calcular()
{	
	// Pedir punto_squad
	var puntosSquad = document.getElementById("punto_squad").value;
	var maxPuntos = document.getElementById("max_puntos").value;
	var porcentajeSquad= (100* puntosSquad) / maxPuntos;

	if(porcentajeSquad >= 80)
	{	
		document.getElementById("salida").innerHTML = "Muy bien Squad!";
	}else{
		document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
	}

}
