function obtenerMunicipios(){

	let http = new XMLHttpRequest();

	http. open('GET', 'datos.json', true);

	http.send();

	http.onload = function () {
		
		if(this.readyState == 4 && this.status == 200){   //Confirma si se ha realizado con exito

			let datos = JSON.parse(this.responseText);   //guardamos el responseText y lo convertimos a JSON
			let est = document.getElementById("estados").value;  //Obtenemos el valor del select 'estados'
			let mun =  document.getElementById("municipios");  //Guardamos el select 'municipios' en una variable 
			let mostar = document.getElementById('mostrar'); //Guardamos 'mostrar' 
			let salida = '';

			mun.innerHTML = '<option value = "vacio"> - - - - </option>';   //Reiniciamos el innerHTML del select 'municipios'
			mun.disabled = true; 										//Deshabilitamos el select
			document.getElementById('imagenes').innerHTML = '';   //Reiniciamos el innerHTML del div con las imagenes
			mostar.innerHTML = '';   //Reiniciamos el innerHTML de 'mostar'

			if (est != "vacio") {    //Si nuestro valor no es el placeholder

				mostar.innerHTML = '<h2 >' + datos.estado[est].nombre.toUpperCase() + '</h2>';

				//MUNICIPIOS
				mun.disabled = false;  //Habilitamos el select 'municipios'

				for (var j = 0; j < 5 ; j++) {
					
					//Guardamos en una variable la salida (output) que ira en nuestro select
					salida = salida + "<option value = '" + j + "'>" + datos.estado[est].municipio[j].nom + "</option>";

				}

				mun.innerHTML = mun.innerHTML + salida;   //Modificamos el innerHTML del select 'municipios'

			}

		}

	}

}

function obtenerImagenes(){

	let http = new XMLHttpRequest();    

	http. open('GET', 'datos.json', true);		//cargar la peticion

	http.send();							//Enviar la peticion

	http.onload = function () {
		
		if(this.readyState == 4 && this.status == 200){   //Confirma si se ha realizado con exito

			let datos = JSON.parse(this.responseText);   //guardamos el responseText y lo convertimos a JSON
			let est = document.getElementById("estados").value;  //Obtenemos el valor del select 'estados'
			let mun =  document.getElementById("municipios").value;  //Guardamos el valor del select 'municipios'
			let div =  document.getElementById("imagenes");  //Guardamos el div donde iran las imagenes
			let mostar = document.getElementById('mostrar'); //Guardamos 'mostrar'
			
			let salida = '';
			div.innerHTML = '';   //Reiniciamos el innerHTML del div con las imagenes
			mostar.innerHTML = '<h2>' + datos.estado[est].nombre.toUpperCase() + '</h2><br>'; //Cargamos 'mostar'

			console.log(mun);

			if (mun != "vacio") {    //Si nuestro valor no es el placeholder

				mostar.innerHTML = '<h2>' + datos.estado[est].nombre.toUpperCase() + '</h2><br>' +
									 '<h3>' + datos.estado[est].municipio[mun].nom + '</h3>';


				console.log(mostar.innerHTML);

				//IMAGENES
				for (var i = 0; i < 4 ; i++) {
					
					//Guardamos en una variable la salida (output) que ira en nuestro div
					salida = salida + "<img src = '" + datos.estado[est].municipio[mun].img[i] + "'>";

				}

				div.innerHTML = div.innerHTML + salida;   //Modificamos el innerHTML del select 'municipios'

			}

		}

	}

}


	//Código que se ejecuta al cargar la pagina
	
	let http = new XMLHttpRequest();
	http. open('GET', 'datos.json', true);
	http.send();
	http.onload = function () {
		
		if(this.readyState == 4 && this.status == 200){   //Confirma si se ha realizado con exito

			let datos = JSON.parse(this.responseText);
			let objeto = document.getElementById("estados");  //Guardamos el select 'estados' en una variable 
			let salida = '';

			//ESTADOS
			for (var i = 0; i <= datos.estado.length - 1; i++) {

				//Guardamos en una variable la salida (output) que ira en nuestro select
				salida = salida + "<option value = '" + i + "'>" + datos.estado[i].nombre + "</option>";

			}

			objeto.innerHTML = objeto.innerHTML + salida;   //Modificamos el innerHTML del select 'estados'

		}

	}