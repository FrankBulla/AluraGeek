//GET

const listaProductos = () => {
    fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))   
}

export const productosServicios = {
    listaProductos
}