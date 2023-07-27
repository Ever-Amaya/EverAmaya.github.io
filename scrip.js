const carrito = document.getElementById ('carrito');
const elementos1 = document.getElementById ('lista-1');
const lista = document.querySelector ('#lista-carrito tbody');
const vaciarcarritoBtn  = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners (){

    elementos1.addEventListener('click' , comprarElemento );
    carrito.addEventListener('click', eliminarElemento);
    vaciarcarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento (e){
    e.preventDefault();
    if(e.target.classList.contains ('Agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);

    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector ('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector ('a').getAttribute ('data-id')

    }
    insertarCarrito(infoElemento);
} 

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML=ˋ
       <td>
          <img src="${elemento.imagen}" width = 10 />
        

       <td>
             ${elemento.titulo}
       </td>
             ${elemento.precio}
       <td>
              <a href="#" class="borrar" data-id="${elemento.id}"> </a>
       </td>
      
      ˋ;

    lista.appendChild(row);
  }

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classlist.contains ('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')

    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}
