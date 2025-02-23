document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(nextSlide, 3000);

    // Pause auto-slide when user interacts
    document.querySelector('.prev').addEventListener('click', function() {
        prevSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000); // Restart auto-slide
    });

    document.querySelector('.next').addEventListener('click', function() {
        nextSlide();
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000); // Restart auto-slide
    });
    

    // Initialize first slide
    showSlide(currentSlide);
});

function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('active'); // Toggle the 'active' class
}

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("NbAipG7d0lcWRjaiv"); // Initialize EmailJS with your public key

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_bkpo6fj", "template_f17kg3n", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById('form-status').innerText = "Pesan Anda berhasil dikirim!";
            document.getElementById('contactForm').reset(); // Clear the form after success
        }, function(error) {
            console.log("FAILED...", error);
            document.getElementById('form-status').innerText = "Terjadi kesalahan, silakan coba lagi.";
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load

    // Existing functionality here (sliders, menu toggle, etc.)
    // Auto-slide and EmailJS setup
});

document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.profile-img');
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load

    // Existing functionality here (sliders, menu toggle, etc.)
    // Auto-slide and EmailJS setup
});
