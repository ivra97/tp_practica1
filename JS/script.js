document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom cargado completamente");

    document.getElementById('como-se-entero').addEventListener('change', function() {
        const otroEspecifique = document.getElementById('otro-especifique');
        otroEspecifique.style.display = this.value === 'otro' ? 'block' : 'none';
    });


    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Aca traemos los campos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const selectComo = document.getElementById('como-se-entero')
        const nosConocio = selectComo.value;
        const especifiqueComo = document.getElementById('especifique')?.value.trim();

        console.log("Datos del formulario:", {
            nombre, email, mensaje, nosConocio, especifiqueComo
        });

        // Aca validamos los campos obligatorios
        if(!nombre || !email || !mensaje) {
            const camposObligatorios = [];
            if(!nombre) camposObligatorios.push('nombre');
            if(!email) camposObligatorios.push('email');
            if(!mensaje) camposObligatorios.push('mensaje');

            alert("Los campos son obligatorios. Te falta completar el campo: " + camposObligatorios.join(', '))
            return;
        }
        console.log("Validacion de campos obligatorios exitosa.")

        if(nosConocio == 'otro' && (!especifiqueComo || especifiqueComo.length < 3)){
            alert("Porfa decinos como te enteraste de nosotros y que tenga mas de 3 caracteres.");
            return;
        }
        console.log("La validacion del campo 'otros' esta 10 puntos.")

        alert('Mensaje enviado correctamente.');
        console.log("El form se envio el: " + new Date().toLocaleDateString());

        window.location.href = 'index.html';
    });

});