// Career Portfolio Site - Interactive JavaScript

// A/B Test Hero Message Variants
const heroVariants = {
    'ai-focused': {
        title: 'AI-Focused Software Engineer',
        subtitle: 'Building reliable systems that consistently exceed expectations',
        taglines: ['Ruby on Rails Expert', 'AI Tooling Specialist', 'Rapid Development'],
        cta1: 'View Experience',
        cta2: "Let's Debug Together",
        bio: 'AI-focused Rails engineer with 10+ years building high-performance systems from rapid MVPs to enterprise scale. Expert in AI tooling integration, autonomous development, and shipping fast - currently building production AI platforms with Claude Code and modern Rails architecture.',
        heroImage: {
            webp: 'public/gemini-hero-v3.webp',
            fallback: 'public/Gemini_Generated_Image_e0qca5e0qca5e0qc.png',
            alt: 'AI-Focused Software Engineer with Natural Problem Solving'
        }
    },
    'rails-backend': {
        title: 'Senior Rails Engineer',
        subtitle: 'Architecting dependable backends with proven scalability',
        taglines: ['Ruby on Rails Expert', 'API Architecture', 'Database Optimization'],
        cta1: 'View Portfolio',
        cta2: 'Discuss Architecture',
        bio: 'Senior Rails engineer with 10+ years building scalable backend systems. Expert in API design, database optimization, and payment processing - delivered enterprise solutions serving 50,000+ users with 99%+ uptime.',
        heroImage: {
            webp: 'public/gemini-hero-v3.webp',
            fallback: 'public/Gemini_Generated_Image_e0qca5e0qca5e0qc.png',
            alt: 'Senior Rails Engineer Backend Architecture Focus'
        }
    },
    'tech-lead': {
        title: 'Technical Lead & Founder',
        subtitle: 'Leading teams to consistently deliver beyond expectations',
        taglines: ['Team Leadership', 'Product Strategy', 'Technical Vision'],
        cta1: 'View Leadership',
        cta2: 'Schedule Coffee',
        bio: 'Technical leader and founder with 10+ years building teams and products. Expert in scaling from MVP to enterprise, team mentorship, and strategic technical decisions - founded Can.Code and led engineering teams to deliver high-impact solutions.',
        heroImage: {
            webp: 'public/gemini-hero-v3.webp',
            fallback: 'public/Gemini_Generated_Image_e0qca5e0qca5e0qc.png',
            alt: 'Technical Leader and Engineering Team Builder'
        }
    },
    'fullstack': {
        title: 'Full-Stack Engineer',
        subtitle: 'Delivering complete solutions that reliably surpass requirements',
        taglines: ['Ruby on Rails', 'Modern Frontend', 'DevOps & Deployment'],
        cta1: 'See Projects',
        cta2: 'Start Building',
        bio: 'Full-stack engineer with 10+ years building complete web applications. Expert in Rails backend, modern frontend frameworks, and deployment automation - delivered products from initial concept through production scale.',
        heroImage: {
            webp: 'public/gemini-hero-v3.webp',
            fallback: 'public/Gemini_Generated_Image_e0qca5e0qca5e0qc.png',
            alt: 'Full-Stack Engineer End-to-End Development'
        }
    },
    'enterprise-fintech': {
        title: 'Enterprise Fintech Engineer',
        subtitle: 'Building secure financial systems with proven compliance excellence',
        taglines: ['Payment Processing', 'Financial Compliance', 'Enterprise Scale'],
        cta1: 'View Solutions',
        cta2: 'Discuss Compliance',
        bio: 'Enterprise software engineer with 10+ years in financial technology. Expert in payment processing, tax compliance automation, and PCI-compliant systems - architected solutions for 50,000+ users across multiple processors.',
        heroImage: {
            webp: 'public/gemini-hero-v3.webp',
            fallback: 'public/Gemini_Generated_Image_e0qca5e0qca5e0qc.png',
            alt: 'Enterprise Fintech Engineer Security and Compliance Focus'
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize A/B testing
    initializeHeroABTest();
    
    // Navigation functionality
    initializeNavigation();
    
    // Scroll animations
    initializeScrollAnimations();
    
    // Smooth scrolling for navigation links
    initializeSmoothScrolling();
    
    // Dynamic content loading
    initializeDynamicContent();
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = ['profile', 'resume', 'case-studies', 'ai-system', 'achievements', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let activeSection = '';
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (activeSection !== sectionId) {
                    activeSection = sectionId;
                    // Track section view for analytics
                    if (typeof trackSectionView === 'function') {
                        trackSectionView(sectionId);
                    }
                }
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll animations
 */
function initializeScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll('.achievement-card, .opportunity-card, .assessment-card, .ai-feature-card, .ai-stat');
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Initialize dynamic content functionality
 */
function initializeDynamicContent() {
    // Add interactive hover effects for cards
    const cards = document.querySelectorAll('.achievement-card, .opportunity-card, .assessment-card, .ai-feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize contact reveal functionality
    initializeContactReveal();
    
    // Initialize resume contact reveal
    initializeResumeContactReveal();
    
    // Initialize resume actions
    initializeResumeActions();

    // Initialize stats counter animation
    initializeStatsCounter();
    
    // Initialize typing effect for hero title
    initializeTypingEffect();
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            // Successfully copied to clipboard
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        // Successfully copied using fallback method
    } catch (err) {
        console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
}

/**
 * Show copy notification
 */
function showCopyNotification(element) {
    const notification = document.createElement('div');
    notification.textContent = 'Copied!';
    notification.style.cssText = `
        position: absolute;
        background: #10b981;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        z-index: 1000;
        pointer-events: none;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    element.style.position = 'relative';
    element.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

/**
 * Initialize stats counter animation
 */
function initializeStatsCounter() {
    const stats = document.querySelectorAll('.stat-number, .ai-stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateNumber(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

/**
 * Animate number counting
 */
function animateNumber(element) {
    const text = element.textContent;
    const target = parseInt(text.replace(/[^0-9]/g, '')) || 0;
    const suffix = text.replace(/[0-9]/g, '');
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        let displayValue;
        if (target >= 1000) {
            displayValue = Math.floor(current / 1000) + 'K';
        } else {
            displayValue = Math.floor(current).toString();
        }
        
        element.textContent = displayValue + suffix.replace(/[K\+]/g, '');
        
        if (suffix.includes('+')) {
            element.textContent += '+';
        }
    }, duration / steps);
}

/**
 * Initialize contact reveal functionality (anti-scraper)
 */
function initializeContactReveal() {
    const revealElements = document.querySelectorAll('.contact-reveal');
    
    revealElements.forEach(element => {
        const encoded = element.dataset.encoded;
        const type = element.dataset.type;
        const valueElement = element.querySelector('.contact-value');
        
        element.addEventListener('click', function() {
            if (!this.classList.contains('revealed')) {
                // Decode the contact information
                const decoded = atob(encoded);
                
                // Update the display
                valueElement.textContent = decoded;
                this.classList.add('revealed');
                
                // Track contact reveal for analytics
                if (typeof trackContactReveal === 'function') {
                    trackContactReveal();
                }
                
                // Add copy functionality
                this.style.cursor = 'pointer';
                this.title = 'Click to copy';
                
                // Set up copy on subsequent clicks
                this.addEventListener('click', function(e) {
                    e.preventDefault();
                    copyToClipboard(decoded);
                    showCopyNotification(this);
                });
                
                // For email, also make it a mailto link
                if (type === 'email') {
                    this.setAttribute('href', `mailto:${decoded}`);
                    this.style.textDecoration = 'none';
                }
                
                // For phone, make it a tel link
                if (type === 'phone') {
                    this.setAttribute('href', `tel:${decoded}`);
                    this.style.textDecoration = 'none';
                }
                
                // Show reveal notification
                showRevealNotification(this, type);
            }
        });
        
        // Add hover hint
        element.addEventListener('mouseenter', function() {
            if (!this.classList.contains('revealed')) {
                valueElement.textContent = `Click to show ${type}`;
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (!this.classList.contains('revealed')) {
                valueElement.textContent = 'Click to reveal';
            }
        });
    });
}

/**
 * Show reveal notification
 */
function showRevealNotification(element, type) {
    const notification = document.createElement('div');
    notification.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} revealed! Click again to copy.`;
    notification.style.cssText = `
        position: absolute;
        background: #06b6d4;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.75rem;
        z-index: 1000;
        pointer-events: none;
        top: -45px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        white-space: nowrap;
    `;
    
    element.style.position = 'relative';
    element.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Initialize resume contact reveal functionality
 */
function initializeResumeContactReveal() {
    const revealElements = document.querySelectorAll('.contact-reveal-mini');
    
    revealElements.forEach(element => {
        const encoded = element.dataset.encoded;
        const type = element.dataset.type;
        
        element.addEventListener('click', function() {
            if (!this.classList.contains('revealed')) {
                // Decode the contact information
                const decoded = atob(encoded);
                
                // Update the display
                this.textContent = `${this.textContent.split(' ')[0]} ${decoded}`;
                this.classList.add('revealed');
                
                // For email, make it a mailto link
                if (type === 'email') {
                    const link = document.createElement('a');
                    link.href = `mailto:${decoded}`;
                    link.textContent = this.textContent;
                    link.style.color = 'inherit';
                    link.style.textDecoration = 'none';
                    this.innerHTML = '';
                    this.appendChild(link);
                }
                
                // For phone, make it a tel link
                if (type === 'phone') {
                    const link = document.createElement('a');
                    link.href = `tel:${decoded}`;
                    link.textContent = this.textContent;
                    link.style.color = 'inherit';
                    link.style.textDecoration = 'none';
                    this.innerHTML = '';
                    this.appendChild(link);
                }
            }
        });
        
        // Add hover effect
        element.addEventListener('mouseenter', function() {
            if (!this.classList.contains('revealed')) {
                this.style.transform = 'scale(1.05)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (!this.classList.contains('revealed')) {
                this.style.transform = 'scale(1)';
            }
        });
    });
}

/**
 * Initialize resume actions
 */
function initializeResumeActions() {
    const downloadButton = document.getElementById('download-resume');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            downloadResumeAsPDF();
        });
    }
}

/**
 * Download resume as PDF by opening dedicated resume page
 */
function downloadResumeAsPDF() {
    // Open the dedicated resume page in a new window
    const resumeWindow = window.open('resume.html', '_blank', 'width=900,height=1200,scrollbars=yes,resizable=yes');
    
    // Show notification to user
    showNotification('Resume page opened! The print dialog will appear automatically for PDF download.', 'info');
    
    // Fallback: If popup is blocked, show instructions
    if (!resumeWindow || resumeWindow.closed || typeof resumeWindow.closed === 'undefined') {
        showNotification('Please allow popups for this site, or manually navigate to resume.html to download PDF.', 'warning');
        
        // Try to navigate to resume page as fallback
        setTimeout(() => {
            window.location.href = 'resume.html';
        }, 3000);
    }
}

/**
 * Show notification helper
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    
    const bgColor = type === 'info' ? '#06b6d4' : type === 'success' ? '#10b981' : '#f59e0b';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

/**
 * Initialize typing effect for hero title
 */
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    const words = originalText.split(' ');
    
    // Only run typing effect on desktop and if user hasn't disabled animations
    if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid var(--primary)';
        
        let wordIndex = 0;
        let charIndex = 0;
        
        function typeWords() {
            if (wordIndex < words.length) {
                if (charIndex < words[wordIndex].length) {
                    heroTitle.textContent += words[wordIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWords, 100);
                } else {
                    if (wordIndex < words.length - 1) {
                        heroTitle.textContent += ' ';
                    }
                    wordIndex++;
                    charIndex = 0;
                    setTimeout(typeWords, 200);
                }
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing effect after a brief delay
        setTimeout(typeWords, 1000);
    }
}

/**
 * Initialize keyboard navigation support
 */
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
        
        // Enter key on contact methods triggers copy
        if (e.key === 'Enter' && e.target.classList.contains('contact-method')) {
            e.target.click();
        }
    });
}

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#profile';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
        transition: top 0.3s;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to interactive elements
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('role', 'button');
    }
    
    // Improve focus indicators
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary)';
            this.style.outlineOffset = '2px';
        });
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// Initialize keyboard navigation and accessibility
document.addEventListener('DOMContentLoaded', function() {
    initializeKeyboardNavigation();
    initializeAccessibility();
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-intensive functions
window.addEventListener('scroll', debounce(updateActiveNavLink, 10));

/**
 * Initialize A/B testing for hero messages
 */
function initializeHeroABTest() {
    // Get variant from URL parameter or use default
    const urlParams = new URLSearchParams(window.location.search);
    const variant = urlParams.get('variant') || 'ai-focused';
    
    // Apply the variant if it exists
    if (heroVariants[variant]) {
        applyHeroVariant(variant);
        
        // Track variant view with Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'hero_variant_view', {
                'variant_name': variant,
                'event_category': 'A/B_Test'
            });
        }
    }
    
    // Add admin controls in development/testing
    if (urlParams.get('admin') === 'true') {
        addHeroVariantControls();
    }
}

/**
 * Apply a hero variant to the page
 */
function applyHeroVariant(variantKey) {
    const variant = heroVariants[variantKey];
    if (!variant) return;
    
    // Update hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = variant.title;
    
    // Update hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = variant.subtitle;
    
    // Update taglines
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline && variant.taglines) {
        heroTagline.innerHTML = variant.taglines
            .map(tag => `<span class="highlight">${tag}</span>`)
            .join(' • ');
    }
    
    // Update CTAs
    const primaryCTA = document.querySelector('.hero-cta .btn-primary');
    const secondaryCTA = document.querySelector('.hero-cta .btn-secondary');
    if (primaryCTA) primaryCTA.textContent = variant.cta1;
    if (secondaryCTA) secondaryCTA.textContent = variant.cta2;
    
    // Update profile bio
    const profileBio = document.querySelector('.profile-bio');
    if (profileBio) profileBio.textContent = variant.bio;
    
    // Update hero image
    if (variant.heroImage) {
        updateHeroImage(variant.heroImage);
    }
    
    // Store current variant for analytics
    window.currentHeroVariant = variantKey;
}

/**
 * Update hero background image with smooth transition
 */
function updateHeroImage(imageConfig) {
    const heroBackground = document.querySelector('.hero-background picture');
    const heroImg = document.querySelector('.hero-bg-image');
    
    if (!heroBackground || !heroImg) return;
    
    // Create new picture element with WebP support
    const newPicture = document.createElement('picture');
    
    // Add WebP source
    const webpSource = document.createElement('source');
    webpSource.srcset = imageConfig.webp;
    webpSource.type = 'image/webp';
    newPicture.appendChild(webpSource);
    
    // Add fallback image
    const newImg = document.createElement('img');
    newImg.src = imageConfig.fallback;
    newImg.alt = imageConfig.alt;
    newImg.className = 'hero-bg-image';
    
    // Add smooth transition effect
    newImg.style.opacity = '0';
    newImg.style.transition = 'opacity 0.5s ease-in-out';
    
    // Handle image load
    newImg.onload = function() {
        // Fade out old image
        const currentImg = heroBackground.querySelector('img');
        if (currentImg) {
            currentImg.style.transition = 'opacity 0.3s ease-in-out';
            currentImg.style.opacity = '0';
            
            setTimeout(() => {
                // Replace entire picture element
                heroBackground.replaceWith(newPicture);
                // Fade in new image
                newImg.style.opacity = '1';
            }, 300);
        } else {
            // No existing image, just replace and fade in
            heroBackground.replaceWith(newPicture);
            newImg.style.opacity = '1';
        }
    };
    
    // Handle image error
    newImg.onerror = function() {
        console.warn('Failed to load hero image:', imageConfig.fallback);
        // Still fade in, better than nothing
        newImg.style.opacity = '1';
    };
    
    newPicture.appendChild(newImg);
    
    // Preload the image
    const preloadImg = new Image();
    preloadImg.src = imageConfig.fallback;
}

/**
 * Add admin controls for testing variants (development only)
 */
function addHeroVariantControls() {
    const controlsDiv = document.createElement('div');
    controlsDiv.id = 'hero-variant-controls';
    controlsDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 10000;
        font-family: system-ui, sans-serif;
        font-size: 14px;
    `;
    
    const title = document.createElement('h4');
    title.textContent = 'Hero Variants';
    title.style.margin = '0 0 10px 0';
    controlsDiv.appendChild(title);
    
    Object.keys(heroVariants).forEach(key => {
        const button = document.createElement('button');
        button.textContent = key.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        button.style.cssText = `
            display: block;
            width: 100%;
            margin: 5px 0;
            padding: 8px 12px;
            border: 1px solid #2563eb;
            background: #fff;
            color: #2563eb;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        button.addEventListener('click', () => {
            applyHeroVariant(key);
            // Update URL without page reload
            const url = new URL(window.location);
            url.searchParams.set('variant', key);
            window.history.replaceState({}, '', url);
        });
        
        controlsDiv.appendChild(button);
    });
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
    `;
    closeBtn.addEventListener('click', () => controlsDiv.remove());
    controlsDiv.appendChild(closeBtn);
    
    document.body.appendChild(controlsDiv);
}

/**
 * Get sharing URLs for different variants
 */
function getVariantURLs() {
    const baseURL = window.location.origin + window.location.pathname;
    const urls = {};
    
    Object.keys(heroVariants).forEach(variant => {
        urls[variant] = `${baseURL}?variant=${variant}`;
    });
    
    return urls;
}

// Service Worker registration for offline capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // ServiceWorker registered successfully
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}