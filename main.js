// Main JavaScript for John Blackmun Jekyll Theme
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-navigation');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll reveal
    document.querySelectorAll('.card, .album-card, .news-card').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
    
    // Add fade-in animation to cards
    document.querySelectorAll('.card-grid .card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Music player functionality (basic)
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i') || this;
            
            // Toggle play/pause icon
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                this.style.background = '#f4cf47';
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                this.style.background = '#d4af37';
            }
        });
    });
    
    // Add hover effects to streaming links
    document.querySelectorAll('.streaming-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Contact form enhancement
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
            }
        });
    }
    
    // Add typing effect to hero tagline
    const tagline = document.querySelector('.hero-content .tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.borderRight = '2px solid #d4af37';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    tagline.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add music note animation
    function createMusicNote() {
        const note = document.createElement('div');
        note.innerHTML = '♪';
        note.style.position = 'fixed';
        note.style.left = Math.random() * window.innerWidth + 'px';
        note.style.top = window.innerHeight + 'px';
        note.style.color = '#d4af37';
        note.style.fontSize = '20px';
        note.style.opacity = '0.3';
        note.style.pointerEvents = 'none';
        note.style.zIndex = '1';
        note.style.transition = 'all 3s ease-out';
        
        document.body.appendChild(note);
        
        // Animate the note
        setTimeout(() => {
            note.style.top = '-50px';
            note.style.opacity = '0';
        }, 100);
        
        // Remove the note after animation
        setTimeout(() => {
            document.body.removeChild(note);
        }, 3100);
    }
    
    // Create music notes periodically on music-related pages
    if (document.body.classList.contains('page-template-page-music') || 
        document.body.classList.contains('page-template-page-discography')) {
        setInterval(createMusicNote, 3000);
    }
    
    // Add vinyl record rotation on hover
    document.querySelectorAll('.album-artwork, .album-cover img').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'running';
            this.style.animationDuration = '2s';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animationDuration = '10s';
        });
    });
    
    // Initialize any embedded music players
    initializeMusicPlayers();
});

// Function to initialize music players
function initializeMusicPlayers() {
    // This would integrate with Spotify, Apple Music, etc. APIs
    // For now, we'll just add placeholder functionality
    
    document.querySelectorAll('.music-player').forEach(player => {
        const playButton = player.querySelector('.play-button');
        if (playButton && !playButton.querySelector('i')) {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
}

// Utility function for smooth animations
function animateElement(element, animation, duration = 1000) {
    element.style.animation = `${animation} ${duration}ms ease-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Add loading screen
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Trigger initial animations
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

