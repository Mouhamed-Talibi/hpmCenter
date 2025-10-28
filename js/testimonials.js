document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slider = document.querySelector('.testimonial-slider');
    
    let currentIndex = 0;
    let autoSlideInterval;
    const slideInterval = 5000; // 5 seconds
    
    // Function to show testimonial
    function showTestimonial(index, direction) {
        // Remove active class from all testimonials and dots
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active', 'slide-left', 'slide-right');
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Update current index
        currentIndex = index;
        
        // Add active class to current testimonial and dot
        testimonials[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        
        // Add slide animation based on direction
        if (direction === 'next') {
            testimonials[currentIndex].classList.add('slide-right');
        } else if (direction === 'prev') {
            testimonials[currentIndex].classList.add('slide-left');
        } else {
            // Initial load or dot click - default to slide-left
            testimonials[currentIndex].classList.add('slide-left');
        }
        
        // Move the slider
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Next testimonial
    function nextTestimonial() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex, 'next');
    }
    
    // Previous testimonial
    function prevTestimonial() {
        const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex, 'prev');
    }
    
    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextTestimonial, slideInterval);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextTestimonial();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevTestimonial();
        startAutoSlide();
    });
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            const direction = index > currentIndex ? 'next' : 'prev';
            showTestimonial(index, direction);
            startAutoSlide();
        });
    });
    
    // Pause auto slide on hover
    const testimonialContainer = document.querySelector('.testimonial-container');
    testimonialContainer.addEventListener('mouseenter', stopAutoSlide);
    testimonialContainer.addEventListener('mouseleave', startAutoSlide);
    
    // Initialize
    showTestimonial(0);
    startAutoSlide();
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            stopAutoSlide();
            prevTestimonial();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            stopAutoSlide();
            nextTestimonial();
            startAutoSlide();
        }
    });
});