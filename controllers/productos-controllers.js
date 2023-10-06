const nuevoProducto = (imageURL, name, price, id) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="productos">
                <div class="productos--contenedor">
                    <img class="producto--img" src=${imageURL}">
                    <h3 class="producto--titulo">${name}</h3>
                    <p class="producto--precio">${price}</p>
                    <a href="/screens/index.galeria.html"><button class="producto--boton" id=${id}>Ver producto</button></a>
                </div>
    `
    card.innerHTML = contenido
    card.dataset.id = id

    return card
}

const productos = document.querySelector("[data-product]")