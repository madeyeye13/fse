const cursor = document.getElementById('custom-cursor');

        // Update cursor position on mouse move
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            cursor.style.opacity = 1; // Show the cursor when the mouse moves
        });

        // Hide cursor when mouse leaves the document
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = 0;
        });

        // Change cursor size and style on hover
        document.querySelectorAll('a, button, input[type="button"], input[type="submit"]').forEach(element => {
            element.addEventListener('mouseover', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.backgroundColor = 'rgba(255, 217, 0, 0.714)';
            });

            element.addEventListener('mouseout', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'gold';
            });
        });



// HEADER AND NAVIGATION



document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.hamburger-menu');
    const openIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('#close');
    const navBar = document.getElementById('nav-bar');
    const serviceMenuLink = document.querySelector('.service-menu a');
    const serviceList = document.querySelector('.service-list');
    const chevron = document.querySelector('.service-menu .fa-chevron-right');

    let isNavOpen = false;

    function recalculateNavHeight() {
        navBar.style.maxHeight = 'auto';
        navBar.style.maxHeight = navBar.scrollHeight + "px";
    }

    menuBtn.addEventListener('click', function() {
        if (isNavOpen) {
            navBar.style.maxHeight = null;
            openIcon.classList.remove('hide');
            closeIcon.classList.add('hide');
            serviceList.classList.add('hide');
            if (chevron) chevron.classList.remove('chevron-down');
        } else {
            recalculateNavHeight();
            openIcon.classList.add('hide');
            closeIcon.classList.remove('hide');
        }
        isNavOpen = !isNavOpen;
    });

    chevron.addEventListener('click', function(event) {
        event.preventDefault();
        if (serviceList.classList.contains('hide')) {
            serviceList.classList.remove('hide');
            serviceList.classList.add('show');
            if (chevron) chevron.classList.add('chevron-down');
        } else {
            serviceList.classList.remove('show');
            serviceList.classList.add('hide');
            if (chevron) chevron.classList.remove('chevron-down');
        }
        recalculateNavHeight();
    });
});



// TEXT ROTATION AFTER 6SECONDS


document.addEventListener("DOMContentLoaded", function() {
    const span = document.querySelector("#intro .intro1 span");
    const texts = ['Planning', 'Coordination', 'Consultancy', 'Management'];
    let index = 0;

    function changeText() {
        index = (index + 1) % texts.length;
        span.textContent = texts[index];
    }

    setInterval(changeText, 6000); // Change text every 6 seconds
});



// HEROIMAGE



document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".hero img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 7000); // Change image every 7 seconds
});






