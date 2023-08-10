const nuevoProducto = (imageURL, name, price, id) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="productos">
                <div class="productos--contenedor">
                    <img class="producto--img" src=${imageURL}">
                    <h3 class="producto--titulo">${name}</h3>
                    <p class="producto--precio">${price}</p>
                    <button class="producto--boton" href="/screens/index.galeria.html" id=${id}>Ver producto</button>
                </div>
    `
    card.innerHTML = contenido
    card.dataset.id = id

    return card
}

const productos = document.querySelector("[data-product]")