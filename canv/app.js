document.querySelector('.menu',".dot").addEventListener('click', function() {
    document.querySelector('.img').classList.toggle('visible');
    document.querySelectorAll('.digital','.dot').forEach(function(digital,dot) {
        digital.classList.toggle('visible');
        dot.classList.toggle('visible');
    });
});

