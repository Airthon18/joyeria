
    function changeImage(color) {
        const productImage = document.getElementById('productImage');

        // Cambia la imagen principal según el color seleccionado
        if (color === 'blanco') {
            productImage.src = 'img/anillo_blanco.png';
        } else if (color === 'rosa') {
            productImage.src = 'img/anillos_rosa.png';
        } else if (color === 'fondo') {
            productImage.src = 'img/fondo_ani.png';
        }  else if (color === 'fondo1') {
            productImage.src = 'img/fondo_ani1.png';
        } else if (color === 'fondo2') {
            productImage.src = 'img/fondo_ani2.png';
        }
    }



