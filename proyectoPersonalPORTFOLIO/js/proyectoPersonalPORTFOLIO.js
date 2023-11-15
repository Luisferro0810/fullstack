
    function fadePage(url) {
        document.body.classList.add('fade');
        setTimeout(function () {
            window.location.href = url;
        }, 1000); // Ajusta el tiempo de transición según sea necesario
    }

    // function toggleDesplegable(sectionId) {
    //     const section = document.getElementById(sectionId);
    //     const contenidoDesplegable = section.querySelector('.contenidoDesplegable');
    //     const contenidoCompleto = section.querySelector('.contenidoCompleto');

    //     if (contenidoDesplegable.style.maxHeight) {
    //         contenidoDesplegable.style.maxHeight = null;
    //         contenidoCompleto.style.display = 'none';
    //         section.querySelector('.botonDesplegable').textContent = 'Ver Más';
    //     } else {
    //         contenidoDesplegable.style.maxHeight = contenidoCompleto.scrollHeight + "px";
    //         contenidoCompleto.style.display = 'block';
    //         section.querySelector('.botonDesplegable').textContent = 'Ver Menos';
    //     }
    // }





    
  function toggleDesplegable(id) {
    var contenidoDesplegable = document.querySelector('#' + id + ' .contenidoDesplegable');
    var contenidoCompleto = document.querySelector('#' + id + ' .contenidoCompleto');
    var botonDesplegable = document.querySelector('#' + id + ' .botonDesplegable');

    if (contenidoDesplegable.style.maxHeight) {
      contenidoDesplegable.style.maxHeight = null;
      contenidoCompleto.style.display = 'none';
      botonDesplegable.innerText = 'Ver Más...';
    } else {
      contenidoDesplegable.style.maxHeight = contenidoDesplegable.scrollHeight + 'px';
      contenidoCompleto.style.display = 'block';
      botonDesplegable.innerText = 'Ver Menos';
    }
  }


  

