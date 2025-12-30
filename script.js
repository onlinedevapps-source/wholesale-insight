document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for CTA
    const ctaBtn = document.querySelector('a[href="#signup-form"]');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const formSection = document.querySelector('#signup-form');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});
