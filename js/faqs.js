document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                    const answer = document.getElementById(q.getAttribute('aria-controls'));
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0 ' + answer.style.padding.split(' ')[1];
                }
            });
            
            // Toggle current FAQ item
            this.setAttribute('aria-expanded', !isExpanded);
            const answer = document.getElementById(this.getAttribute('aria-controls'));
            
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 ' + answer.style.padding.split(' ')[1] + ' 30px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 ' + answer.style.padding.split(' ')[1];
            }
        });
    });
    
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active category button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide FAQ items based on category
            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Add a slight delay for animation effect
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('faq-question')) {
                e.preventDefault();
                focusedElement.click();
            }
        }
    });
});