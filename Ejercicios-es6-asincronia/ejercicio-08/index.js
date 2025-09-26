// El objetivo es acceder a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página.

// Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

// URL de la documentación (para que indaguéis): https://thronesapi.com/

//Esta sería la URL final (la que deberéis utilizar para vuestra petición):
// https://thronesapi.com/api/v2/Characters

async function getPersonaje() {
    //Seleccionamos las etiquetas HTML que vamos a usar:
    const selector = document.querySelector("#character-list");
    const imagen = document.querySelector(".character-image");
    try{
        //Conectamos con la API:
        const respuesta = await fetch("https://thronesapi.com/api/v2/Characters");
        //Convertimos la respuesta a .json():
        const personajes = await respuesta.json();
        //Recorremos todos los personajes:
        for(const personaje of personajes){
            //Creamos etiquetas option:
            const option = document.createElement("option");
            //Asignamos el nombre completo del personaje al option:
            option.textContent = personaje.fullName;
            //Añadimos el option al selector:
            selector.appendChild(option);
            //Asignamos la URL del personaje al valor del option:
            option.value = personaje.imageUrl;
        }

        // Mostramos la imagen del primer personaje al cargar:
        if (selector.length > 0) {
            imagen.src = selector.value;
        }

        //Creamos un evento para que cuando el usuario seleccione un nombre, cambie la imagen:
        selector.addEventListener("change", event => {
            imagen.src = event.target.value;
        });
    //Capturamos el posible error, en caso de que suceda:
    }catch(error){
        console.log("Error: ", error);
    }
}
//Llamamos a la función:
getPersonaje();