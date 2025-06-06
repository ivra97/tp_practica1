
document.getElementById('como-se-entero').addEventListener('change', function() {
    const otroEspecifique = document.getElementById('otro-especifique');
    otroEspecifique.style.display = this.value === 'otro' ? 'block' : 'none';
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado');
    this.reset();
});