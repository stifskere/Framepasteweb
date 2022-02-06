window.addEventListener('scroll', function() {
    let navbar_height;
    if (window.scrollY > 600) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
    }
});
