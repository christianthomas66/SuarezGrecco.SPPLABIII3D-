import { crearArticulo } from "./dinamicas.js";


const url = "http://localhost:3000/anuncios";

function agregarSpinner(){
    let spinner = document.createElement("img");
    spinner.setAttribute("src","./assets/espiner.gif");
    spinner.setAttribute("alt","Imagen spinner");
    document.getElementById("spinner-container").appendChild(spinner);
}



function eliminarSpinner(){


    const $spinnerContainer = document.getElementById("spinner-container");

    while($spinnerContainer.hasChildNodes()){
        $spinnerContainer.removeChild($spinnerContainer.firstElementChild);
    }
}

function getAnunciosAjax(){

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{

        if(xhr.readyState == 4){

            if(xhr.status >=200 && xhr.status < 300){

                const data = JSON.parse(xhr.responseText);

                console.log(data);
                crearArticulo(data);

            } else {
                
                console.error(`Error: ${xhr.status} : ${xhr.statusText}`);
            }

            eliminarSpinner();

        } else {

            agregarSpinner();
        }
    });

    xhr.open("GET", url);
    xhr.send();
};


getAnunciosAjax();