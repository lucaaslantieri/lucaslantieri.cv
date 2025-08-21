document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la animación de entrada de secciones
    const sections = document.querySelectorAll('.section-container');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Lógica para la animación de las tarjetas de experiencia y pop-ups
    const cards = document.querySelectorAll('.experience-card');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-btn');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const jobData = card.getAttribute('data-job');
            document.getElementById(`${jobData}-popup`).style.display = 'flex';
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            popup.style.display = 'none';
        });
    });
    window.addEventListener('click', (event) => {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });

    // Lógica para animar las barras de progreso cuando la sección es visible
    const skillsSection = document.getElementById('habilidades');
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = skillsSection.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                skillsObserver.unobserve(skillsSection); // Detiene la observación después de la primera animación
            }
        });
    }, { threshold: 0.5 });
    skillsObserver.observe(skillsSection);
});