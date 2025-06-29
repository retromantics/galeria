$(document).ready(() => {
    const contenedor = document.getElementById("gallery");
    const pics = [
        { "name": "Gackt", "src": "assets/img/gackt.jpg" },
        { "name": "GacktEra", "src": "assets/img/gacktEra.jpg" },
        { "name": "Kami", "src": "assets/img/kami.jpg" },
        { "name": "Klaha", "src": "assets/img/klaha.jpg" },
        { "name": "KlahaEra", "src": "assets/img/klahaEra.jpg" },
        { "name": "Kozi", "src": "assets/img/kozi.jpg" },
        { "name": "Mana", "src": "assets/img/mana.jpeg" },
        { "name": "Mana", "src": "assets/img/mana.jpg" },
        { "name": "Merveilles", "src": "assets/img/merveilles.jpg" },
        { "name": "PostGackt", "src": "assets/img/postGackt.webp" },
        { "name": "Tetsu", "src": "assets/img/tetsu.jpg" },
        { "name": "TetsuEra", "src": "assets/img/tetsuEra.jpeg" },
        { "name": "Yuki", "src": "assets/img/yuki.jpg" }
    ];
    let currentIndex = 0;
    let images = null;

    function loadPics(lista) {
        contenedor.innerHTML = "";
        lista.forEach((img, idx) => {
            const html = `
                <div class="col-auto mx-2 mb-4 p-0 card" style="cursor:pointer;" data-img="${img.src}" data-name="${img.name}">
                    <img src="${img.src}" id="img${idx}" data-index="${idx}" alt="${img.name}" name="${img.name}" />
                </div>
            `;
            contenedor.innerHTML += html;
        });

        images = $('#gallery img');

        images.on('click', function () {
            // Obtener el índice a partir del id de la imagen
            const imgId = $(this).attr('id'); // ej: "img2"
            const idNum = parseInt($(this).attr('data-index'));
            currentIndex = idNum;
            mostrarModalPorId(imgId);
        });
    }

    function mostrarModalPorId(imgId) {
        // Busca la imagen por su id
        const img = $('#' + imgId);
        $('#modalImg').attr('src', img.attr('src'));
        $('#modalTitle').text(img.attr('alt'));
        $('#modal').css('display', 'flex').hide().fadeIn(); // para que no aparezca en la  esquina
    }

    loadPics(pics);

    // Cerrar modal al hacer clic fuera de la imagen o en el botón cerrar
    $('#modal').click(function (e) {
        if (!$(e.target).closest('#modalContent').length) {
            $('#modal').fadeOut();
        }
    });

    $('#closeBtn').click(function () {
        $('#modal').fadeOut();
    });

    // Botón siguiente
    $('#nextBtn').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        const nextImg = images.eq(currentIndex);
        $('#modalImg').attr('src', nextImg.attr('src'));
        $('#modalTitle').text(nextImg.attr('alt'));
    });

    // Botón anterior
    $('#prevBtn').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        const prevImg = images.eq(currentIndex);
        $('#modalImg').attr('src', prevImg.attr('src'));
        $('#modalTitle').text(prevImg.attr('alt'));
    });
});