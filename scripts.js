window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function() {
        let navbar_height;

        let description = document.getElementsByClassName('description')[0];
        console.log(description)


        function bound (element) {
           return element.getBoundingClientRect();
        }


        if (bound(description).top === 0 && bound(description).bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').classList.remove('topnavborderradius');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').classList.add('topnavborderradius');
            document.body.style.paddingTop = '0';
        }
    });
})


