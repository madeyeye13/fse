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

// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".slide");
//     let currentIndex = 0;

//     function showNextSlide() {
//         slides[currentIndex].classList.remove("active");
//         slides[currentIndex].classList.add("inactive");

//         currentIndex = (currentIndex + 1) % slides.length;

//         slides[currentIndex].classList.remove("inactive");
//         slides[currentIndex].classList.add("active");
//     }

//     setInterval(showNextSlide, 7000); // Change slide every 7 seconds
// });


document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        
        if (currentIndex > 1) {
            // Reset to the first image without a sliding effect
            currentIndex = 0;
            sliderWrapper.style.transition = 'none'; // Disable transition
            sliderWrapper.style.transform = 'translateX(0%)';
            
            // Re-enable the transition for the next slide
            setTimeout(() => {
                sliderWrapper.style.transition = 'transform 1s ease-in-out';
            }, 50); // Small delay to allow the browser to register the transition reset
        } else {
            // Slide to the next image
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, 7000); // Change image every 7 seconds
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
    const satisfy = document.getElementById('satisfaction-coun');
    const clientTarget = 8;
    const satisfactionTarget = 150;
    const satisfyTarget = 100;
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
                animateCount(satisfactionCount, satisfactionTarget, '+');
                animateCount(satisfy, satisfyTarget, '%');
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

function getBoxWidth() {
    return window.innerWidth >= 1024 ? 50 : 100;
}

// Clone the first two testimonials and append them to the end (only for larger screens)
if (window.innerWidth >= 1024) {
    testimonialWrapper.appendChild(testimonials[0].cloneNode(true));
    testimonialWrapper.appendChild(testimonials[1].cloneNode(true));
}

function showTestimonial(index) {
    testimonialWrapper.style.transition = 'transform 0.5s ease-in-out';
    testimonialWrapper.style.transform = `translateX(-${index * getBoxWidth()}%)`;
}

function nextTestimonial() {
    index++;
    showTestimonial(index);

    // Instantly reset to first testimonial without visible transition
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
        testimonialWrapper.style.transform = `translateX(-${index * getBoxWidth()}%)`;
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



//JAVASCRIPT FOR NEWSLETTER SUBMISSION


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Show loading box
        const loadingBox = document.getElementById('loadingBox');
        loadingBox.classList.add('show-box');

        // Send form data to Google Sheets
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            // Hide loading box after response
            loadingBox.classList.remove('show-box');

            // Show success box
            const successBox = document.getElementById('successBox');
            document.getElementById('successMessage').innerText = `Hi ${name}, we got your e-mail and we will reply to you very soon.`;
            successBox.classList.add('show-box');

            // Hide success box after 6 seconds and reset form
            setTimeout(() => {
                successBox.classList.remove('show-box');
                successBox.classList.add('hide-box');

                // Reset the form
                document.getElementById('newsletterForm').reset();

                // Ensure the box is hidden after transition
                setTimeout(() => {
                    successBox.classList.remove('hide-box');
                }, 500); // Match with the CSS transition time
            }, 6000);
        }).catch(error => {
            console.error('Error:', error);
            loadingBox.classList.remove('show-box');
            alert('There was an error submitting your request. Please try again later.');
        });
    });
});






