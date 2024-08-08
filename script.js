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


//JAVASCRIPT FOR COMPANY CLIENTS WORKED FOR

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active");
        slides[currentIndex].classList.add("inactive");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.remove("inactive");
        slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, 7000); // Change slide every 7 seconds
});


//JAVASCRIPT FOR WWD IMAGE

let currentIndex = 0;
const images = document.querySelectorAll('.wwdimage');
const totalImages = images.length;
const overlay = document.getElementById('overlay1');

function showNextImage() {
    overlay.classList.add('flash');
    setTimeout(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
        overlay.classList.remove('flash');
    }, 100); // Adjust this timing to match the overlay transition
}

setInterval(showNextImage, 7000); // Change image every 7 seconds




// JAVASCRIPT FOR NUMBER INCREASE


document.addEventListener('DOMContentLoaded', function() {
    const clientCount = document.getElementById('client-count');
    const satisfactionCount = document.getElementById('satisfaction-count');
    const clientTarget = 8;
    const satisfactionTarget = 150;
    let hasAnimated = false;

    function animateCount(element, target, suffix = '') {
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 60);

        function updateCount() {
            count += increment;
            if (count > target) count = target;
            element.textContent = Math.floor(count) + suffix;
            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        }

        requestAnimationFrame(updateCount);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCount(clientCount, clientTarget, '+');
                animateCount(satisfactionCount, satisfactionTarget, '%');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the section is in view
    });

    observer.observe(document.getElementById('exp'));
});



//JAVASCRIPT FOR TESTIMONIAL


const testimonialWrapper = document.querySelector('.testimonial-wrapper');
const testimonials = document.querySelectorAll('.box');
let index = 0;
const totalTestimonials = testimonials.length;

// Clone the first testimonial and append it to the end
testimonialWrapper.appendChild(testimonials[0].cloneNode(true));

function showTestimonial(index) {
    testimonialWrapper.style.transition = 'transform 0.5s ease-in-out';
    testimonialWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextTestimonial() {
    index++;
    showTestimonial(index);

    // Reset to first testimonial without animation when reaching the cloned slide
    if (index === totalTestimonials) {
        setTimeout(() => {
            testimonialWrapper.style.transition = 'none';
            testimonialWrapper.style.transform = `translateX(0)`;
            index = 0;
        }, 500); // 500ms matches the transition duration
    }
}

// Auto-slide functionality
let autoSlide = setInterval(nextTestimonial, 5000);

// Swipe functionality
let startX = 0;
testimonialWrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

testimonialWrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        clearInterval(autoSlide);
        nextTestimonial();
        autoSlide = setInterval(nextTestimonial, 5000);
    }
    if (startX < endX - 50) {
        clearInterval(autoSlide);
        prevTestimonial();
        autoSlide = setInterval(nextTestimonial, 5000);
    }
});

function prevTestimonial() {
    if (index === 0) {
        testimonialWrapper.style.transition = 'none';
        index = totalTestimonials;
        testimonialWrapper.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            index--;
            testimonialWrapper.style.transition = 'transform 0.5s ease-in-out';
            showTestimonial(index);
        }, 0);
    } else {
        index--;
        showTestimonial(index);
    }
}





