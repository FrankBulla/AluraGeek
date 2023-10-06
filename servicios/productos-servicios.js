//GET

const listaProductos = () => {
    fetch("http://localhost:3000/producto")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))   
}

const crearProductos = (imageUrl, name, price) => {
    fetch("http://localhost:3000/producto", {
        method: "POST",
        header: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageUrl,
            price,
            name
        })
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")
    }

export const productosServicios = {
    listaProductos,
    crearProductos
}