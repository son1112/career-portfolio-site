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
    
    // Contact form functionality
    initializeContactForm();
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
    
    // Initialize external link monitoring
    initializeExternalLinkMonitoring();
    
    // Initialize skills visualization
    initializeSkillsVisualization();
    
    // Initialize career timeline
    initializeCareerTimeline();
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
            showNotification('Copy failed. Trying alternative method...', 'warning');
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
        const successful = document.execCommand('copy');
        if (!successful) {
            throw new Error('Copy command failed');
        }
        // Successfully copied using fallback method
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        showNotification('Unable to copy to clipboard. Please copy manually.', 'error');
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
                try {
                    // Validate required data attributes
                    if (!encoded) {
                        throw new Error('Contact data not found');
                    }
                    if (!valueElement) {
                        throw new Error('Contact display element not found');
                    }
                    
                    // Decode the contact information
                    const decoded = atob(encoded);
                    
                    // Validate decoded content
                    if (!decoded || decoded.trim() === '') {
                        throw new Error('Invalid contact data');
                    }
                    
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
                
                } catch (error) {
                    // Handle errors gracefully
                    console.error('Contact reveal error:', error);
                    
                    // Show user-friendly error message
                    valueElement.textContent = 'Contact info temporarily unavailable';
                    this.classList.add('error-state');
                    this.style.cursor = 'not-allowed';
                    this.title = 'Contact information could not be loaded';
                    
                    // Show error notification
                    showNotification('Unable to load contact information. Please try refreshing the page.', 'error');
                    
                    // Track error for analytics
                    if (typeof gtag === 'function') {
                        gtag('event', 'contact_reveal_error', {
                            event_category: 'Error',
                            event_label: error.message,
                            value: 1
                        });
                    }
                }
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
 * Download resume as PDF with role-specific options
 */
function downloadResumeAsPDF() {
    // Get current hero variant to suggest matching resume role
    const currentVariant = window.currentHeroVariant || 'ai-focused';
    
    // Create resume options modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        font-family: var(--font-family);
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 30px;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        ">
            <h3 style="color: var(--primary); margin-bottom: 20px; font-size: 1.5rem;">
                📄 Resume Download Options
            </h3>
            <p style="margin-bottom: 25px; color: var(--text-secondary); line-height: 1.6;">
                Choose your preferred resume format:
            </p>
            
            <div style="display: grid; gap: 15px; margin-bottom: 25px;">
                <button onclick="openDynamicResume('${currentVariant}')" style="
                    padding: 15px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: var(--transition);
                ">
                    🎯 Role-Optimized Resume (${currentVariant.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())})
                </button>
                
                <button onclick="openStaticResume()" style="
                    padding: 15px;
                    background: var(--secondary);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: var(--transition);
                ">
                    📋 Standard Resume
                </button>
            </div>
            
            <button onclick="closeResumeModal()" style="
                padding: 8px 16px;
                background: none;
                border: 1px solid var(--border);
                border-radius: 6px;
                cursor: pointer;
                color: var(--text-muted);
                font-size: 0.9rem;
            ">
                Cancel
            </button>
        </div>
    `;
    
    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeResumeModal();
        }
    });
    
    document.body.appendChild(modal);
    
    // Store modal reference
    window.resumeModal = modal;
}

/**
 * Open dynamic resume with role-specific content
 */
function openDynamicResume(role = 'ai-focused') {
    try {
        // Validate role parameter
        const validRoles = ['ai-focused', 'rails-backend', 'tech-lead', 'fullstack', 'enterprise-fintech'];
        if (!validRoles.includes(role)) {
            throw new Error(`Invalid role: ${role}`);
        }
        
        closeResumeModal();
        
        // Attempt to open resume window
        const resumeWindow = window.open(
            `dynamic-resume.html?role=${role}&print=true`, 
            '_blank', 
            'width=900,height=1200,scrollbars=yes,resizable=yes'
        );
        
        if (!resumeWindow || resumeWindow.closed || typeof resumeWindow.closed === 'undefined') {
            // Popup blocked - offer alternative
            showNotification('Popup blocked. Please allow popups or try the direct link below.', 'warning');
            
            // Create alternative link
            const linkNotification = document.createElement('div');
            linkNotification.innerHTML = `
                <p>Popup blocked! <a href="dynamic-resume.html?role=${role}&print=true" target="_blank" 
                   style="color: var(--primary); text-decoration: underline;">
                   Click here to open your ${role.replace('-', ' ')} resume
                </a></p>
            `;
            linkNotification.style.cssText = `
                position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10001; border: 2px solid var(--warning);
            `;
            
            document.body.appendChild(linkNotification);
            
            // Auto-remove after 10 seconds
            setTimeout(() => {
                if (linkNotification && linkNotification.parentNode) {
                    linkNotification.parentNode.removeChild(linkNotification);
                }
            }, 10000);
            
            // Track popup blocked event
            if (typeof gtag === 'function') {
                gtag('event', 'popup_blocked', {
                    event_category: 'User Experience',
                    event_label: 'Dynamic Resume',
                    value: 1
                });
            }
        } else {
            showNotification(`Role-optimized resume opened for ${role.replace('-', ' ')}! Print dialog will appear automatically.`, 'success');
        }
        
    } catch (error) {
        console.error('Dynamic resume error:', error);
        showNotification('Unable to open dynamic resume. Please try again or use the standard resume option.', 'error');
        
        // Track error
        if (typeof gtag === 'function') {
            gtag('event', 'dynamic_resume_error', {
                event_category: 'Error',
                event_label: error.message,
                value: 1
            });
        }
    }
}

/**
 * Open static resume (original)
 */
function openStaticResume() {
    try {
        closeResumeModal();
        
        const resumeWindow = window.open('resume.html', '_blank', 'width=900,height=1200,scrollbars=yes,resizable=yes');
        
        if (!resumeWindow || resumeWindow.closed || typeof resumeWindow.closed === 'undefined') {
            // Popup blocked - offer alternative
            showNotification('Popup blocked. Please allow popups or try the direct link below.', 'warning');
            
            // Create alternative link
            const linkNotification = document.createElement('div');
            linkNotification.innerHTML = `
                <p>Popup blocked! <a href="resume.html" target="_blank" 
                   style="color: var(--primary); text-decoration: underline;">
                   Click here to open your standard resume
                </a></p>
            `;
            linkNotification.style.cssText = `
                position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10001; border: 2px solid var(--warning);
            `;
            
            document.body.appendChild(linkNotification);
            
            // Auto-remove after 10 seconds
            setTimeout(() => {
                if (linkNotification && linkNotification.parentNode) {
                    linkNotification.parentNode.removeChild(linkNotification);
                }
            }, 10000);
            
            // Track popup blocked event
            if (typeof gtag === 'function') {
                gtag('event', 'popup_blocked', {
                    event_category: 'User Experience',
                    event_label: 'Static Resume',
                    value: 1
                });
            }
        } else {
            showNotification('Standard resume opened! Print dialog will appear automatically.', 'info');
        }
        
    } catch (error) {
        console.error('Static resume error:', error);
        showNotification('Unable to open resume. Please try refreshing the page.', 'error');
        
        // Track error
        if (typeof gtag === 'function') {
            gtag('event', 'static_resume_error', {
                event_category: 'Error',
                event_label: error.message,
                value: 1
            });
        }
    }
}

/**
 * Close resume options modal
 */
function closeResumeModal() {
    if (window.resumeModal) {
        document.body.removeChild(window.resumeModal);
        window.resumeModal = null;
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

/**
 * Initialize external link monitoring for error handling
 */
function initializeExternalLinkMonitoring() {
    // Monitor external links for potential failures
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="mailto"], a[href^="tel"]');
    
    externalLinks.forEach(link => {
        // Add error handling for external links
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            try {
                // For mailto and tel links, validate format
                if (href.startsWith('mailto:')) {
                    const email = href.substring(7);
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        e.preventDefault();
                        showNotification('Invalid email address. Please check the contact information.', 'error');
                        return false;
                    }
                }
                
                if (href.startsWith('tel:')) {
                    const phone = href.substring(4);
                    const phoneRegex = /^[\+]?[\d\-\(\)\s]+$/;
                    if (!phoneRegex.test(phone) || phone.length < 10) {
                        e.preventDefault();
                        showNotification('Invalid phone number format.', 'error');
                        return false;
                    }
                }
                
                // For external HTTP links, add visual feedback
                if (href.startsWith('http') && !href.includes(window.location.hostname)) {
                    // Add loading state
                    this.classList.add('loading');
                    
                    // Remove loading state after 3 seconds
                    setTimeout(() => {
                        this.classList.remove('loading');
                    }, 3000);
                    
                    // Track external link clicks
                    if (typeof gtag === 'function') {
                        gtag('event', 'external_link_click', {
                            event_category: 'Outbound Link',
                            event_label: href,
                            value: 1
                        });
                    }
                }
                
            } catch (error) {
                console.error('Link validation error:', error);
                showNotification('Link validation failed. Proceeding anyway...', 'warning');
                
                // Track link errors
                if (typeof gtag === 'function') {
                    gtag('event', 'link_validation_error', {
                        event_category: 'Error',
                        event_label: error.message,
                        value: 1
                    });
                }
            }
        });
        
        // Add network error detection for HTTP links
        if (link.href.startsWith('http') && !link.href.includes(window.location.hostname)) {
            link.addEventListener('mouseenter', function() {
                // Preload check - try to fetch favicon to test connectivity
                if (!this.classList.contains('network-checked')) {
                    const url = new URL(this.href);
                    const faviconUrl = `${url.protocol}//${url.hostname}/favicon.ico`;
                    
                    const testImg = new Image();
                    testImg.onload = () => {
                        this.classList.remove('network-error');
                    };
                    testImg.onerror = () => {
                        this.classList.add('network-error');
                        this.title = 'This link may not be available right now';
                    };
                    testImg.src = faviconUrl;
                    
                    this.classList.add('network-checked');
                }
            });
        }
    });
    
    // Monitor for global network connectivity
    window.addEventListener('online', function() {
        showNotification('Network connection restored.', 'success');
        // Remove network error indicators
        document.querySelectorAll('.network-error').forEach(el => {
            el.classList.remove('network-error');
            el.classList.remove('network-checked');
        });
    });
    
    window.addEventListener('offline', function() {
        showNotification('Network connection lost. Some features may be unavailable.', 'warning');
    });
}

/**
 * Global error handler for unhandled JavaScript errors
 */
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    
    // Show user-friendly error message for critical errors
    if (e.error && e.error.stack) {
        showNotification('A technical error occurred. Please refresh the page if you experience issues.', 'error');
        
        // Track JavaScript errors
        if (typeof gtag === 'function') {
            gtag('event', 'javascript_error', {
                event_category: 'Error',
                event_label: e.error.message || 'Unknown error',
                value: 1
            });
        }
    }
});

/**
 * Global promise rejection handler
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    
    // Track promise rejections
    if (typeof gtag === 'function') {
        gtag('event', 'promise_rejection', {
            event_category: 'Error',
            event_label: e.reason?.message || 'Unknown promise rejection',
            value: 1
        });
    }
});

/**
 * Initialize interactive skills visualization
 */
function initializeSkillsVisualization() {
    const skillsVisualization = document.getElementById('skillsVisualization');
    if (!skillsVisualization) return;

    // Create intersection observer for skill animations
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateSkillBars(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all skill categories
    const skillCategories = skillsVisualization.querySelectorAll('.skill-category-interactive');
    skillCategories.forEach(category => {
        skillsObserver.observe(category);
        
        // Add stagger animation delay
        const skillItems = category.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.style.setProperty('--animation-delay', `${index * 0.1}s`);
        });
    });

    // Add click tracking for skill items
    const skillItems = skillsVisualization.querySelectorAll('.skill-item');
    skillItems.forEach(skillItem => {
        skillItem.addEventListener('click', function() {
            const skillName = this.dataset.skill;
            const skillLevel = this.dataset.level;
            
            // Track skill interaction
            if (typeof gtag === 'function') {
                gtag('event', 'skill_interaction', {
                    event_category: 'Skills Visualization',
                    event_label: skillName,
                    value: parseInt(skillLevel)
                });
            }
            
            // Show detailed skill info
            showSkillDetails(this);
        });
    });
}

/**
 * Animate skill progress bars in a category
 */
function animateSkillBars(category) {
    const skillItems = category.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        const progressBar = item.querySelector('.skill-progress');
        const targetWidth = progressBar.dataset.width;
        
        // Stagger animations
        setTimeout(() => {
            progressBar.style.width = targetWidth + '%';
            
            // Add pulse effect for high skill levels
            if (parseInt(targetWidth) >= 90) {
                setTimeout(() => {
                    progressBar.style.animation = 'skillPulse 0.6s ease-in-out';
                }, 1500);
            }
        }, index * 100);
    });
}

/**
 * Show detailed skill information
 */
function showSkillDetails(skillItem) {
    const skillName = skillItem.dataset.skill;
    const skillLevel = skillItem.dataset.level;
    const skillYears = skillItem.dataset.years;
    
    // Create skill detail modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        font-family: var(--font-family);
    `;
    
    const proficiencyDescription = getProficiencyDescription(parseInt(skillLevel));
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        ">
            <h3 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.5rem;">
                ${skillName}
            </h3>
            <div style="margin-bottom: 1.5rem;">
                <div style="
                    width: 100%;
                    height: 12px;
                    background: #f1f5f9;
                    border-radius: 6px;
                    overflow: hidden;
                    margin-bottom: 1rem;
                ">
                    <div style="
                        width: ${skillLevel}%;
                        height: 100%;
                        background: linear-gradient(90deg, var(--primary), var(--accent));
                        border-radius: 6px;
                        transition: width 1s ease-out;
                    "></div>
                </div>
                <p style="font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">
                    ${skillLevel}% Proficiency
                </p>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    ${skillYears} years experience
                </p>
                <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">
                    ${proficiencyDescription}
                </p>
            </div>
            <button onclick="this.closest('div[style*=\"position: fixed\"]').remove()" style="
                padding: 0.75rem 1.5rem;
                background: var(--primary);
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 1rem;
                transition: var(--transition);
            ">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Close on escape key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

/**
 * Get proficiency description based on skill level
 */
function getProficiencyDescription(level) {
    if (level >= 95) {
        return 'Expert level - Can architect complex systems, mentor others, and innovate in this technology.';
    } else if (level >= 85) {
        return 'Advanced level - Highly proficient with deep understanding and ability to solve complex problems.';
    } else if (level >= 70) {
        return 'Intermediate level - Solid working knowledge with ability to work independently on most tasks.';
    } else if (level >= 50) {
        return 'Developing level - Good foundation with growing experience and confidence.';
    } else {
        return 'Beginner level - Basic understanding with supervised experience.';
    }
}

/**
 * Initialize interactive career timeline
 */
function initializeCareerTimeline() {
    const timeline = document.getElementById('careerTimeline');
    if (!timeline) return;

    // Create intersection observer for timeline animations
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all timeline items
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        // Add stagger delay
        item.style.setProperty('--animation-delay', `${index * 0.2}s`);
        item.style.transitionDelay = `${index * 0.1}s`;
        
        timelineObserver.observe(item);
        
        // Add click handlers
        const content = item.querySelector('.timeline-content');
        const marker = item.querySelector('.timeline-marker');
        
        [content, marker].forEach(element => {
            element.addEventListener('click', () => showTimelineModal(item));
        });
    });
}

/**
 * Show detailed timeline modal
 */
function showTimelineModal(timelineItem) {
    const company = timelineItem.dataset.company;
    const role = timelineItem.dataset.role;
    const duration = timelineItem.dataset.duration;
    const location = timelineItem.dataset.location;
    const year = timelineItem.dataset.year;
    
    // Get full job details from the original experience section
    const jobDetails = getJobDetails(company, year);
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        font-family: var(--font-family);
        backdrop-filter: blur(4px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            position: relative;
        ">
            <button onclick="this.closest('div[style*=\"position: fixed\"]').remove()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: #f1f5f9;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                color: #64748b;
                transition: var(--transition);
            " onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
                ×
            </button>
            
            <div style="margin-bottom: 1.5rem;">
                <div style="color: var(--primary); font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem;">
                    ${duration}
                </div>
                <h2 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1.6rem; line-height: 1.3;">
                    ${role}
                </h2>
                <h3 style="color: var(--accent); margin-bottom: 0.5rem; font-size: 1.2rem; font-weight: 600;">
                    ${company}
                </h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">
                    📍 ${location}
                </p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.1rem;">
                    Key Achievements
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${jobDetails.achievements.map(achievement => `
                        <li style="
                            margin-bottom: 0.75rem;
                            padding-left: 1.5rem;
                            position: relative;
                            color: var(--text-secondary);
                            line-height: 1.6;
                        ">
                            <span style="
                                position: absolute;
                                left: 0;
                                top: 0.5rem;
                                width: 6px;
                                height: 6px;
                                background: var(--primary);
                                border-radius: 50%;
                            "></span>
                            ${achievement}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div>
                <h4 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.1rem;">
                    Technologies & Skills
                </h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${jobDetails.technologies.map(tech => `
                        <span style="
                            background: var(--primary);
                            color: white;
                            padding: 0.4rem 0.8rem;
                            border-radius: 20px;
                            font-size: 0.85rem;
                            font-weight: 500;
                        ">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Close on escape key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
    
    // Track timeline interaction
    if (typeof gtag === 'function') {
        gtag('event', 'timeline_interaction', {
            event_category: 'Career Timeline',
            event_label: `${company} - ${year}`,
            value: 1
        });
    }
}

/**
 * Get detailed job information
 */
function getJobDetails(company, year) {
    const jobData = {
        'Can.Code': {
            achievements: [
                'Founded innovative AI company specializing in context engineering and intelligent business solutions',
                'Built production 🦆 rubberDucky platform from concept to deployment in 8-10 days using AI-augmented development',
                'Developed context engineering methodology enabling rapid AI integration across business domains',
                'Created autonomous AI agent system processing thousands of requests with Rails-like development velocity',
                'Shipped MVP-to-production pipelines using modern Rails architecture with real-time AI capabilities'
            ],
            technologies: ['AI Integration', 'Claude Code', 'Ruby on Rails', 'Context Engineering', 'Leadership', 'Entrepreneurship']
        },
        'Huntress Labs': {
            achievements: [
                'Engineered Microsoft 365 integration for enterprise cybersecurity platform serving thousands of MSPs',
                'Architected scalable Rails backend supporting real-time threat detection and response workflows',
                'Led SRE rotations monitoring Honey Badger, Splunk, Sentry, and NewRelic across multiple platforms',
                'Implemented automated security compliance reporting reducing manual oversight by 75%',
                'Built high-performance API integrations handling millions of security events per day'
            ],
            technologies: ['Ruby on Rails', 'Microsoft 365', 'Cybersecurity', 'SRE', 'API Integration', 'Monitoring']
        },
        'Stripe': {
            achievements: [
                'Built middleware for Account Updater service to AWS SAM, processing millions of card updates monthly',
                'Architected payment processing workflows with 99.99% uptime and sub-100ms response times',
                'Implemented fraud detection algorithms reducing false positives by 40%',
                'Developed merchant onboarding automation reducing manual review time by 60%',
                'Collaborated with product teams on global payment method expansion initiatives'
            ],
            technologies: ['Ruby', 'AWS', 'Payment Processing', 'Microservices', 'Fraud Detection', 'API Design']
        },
        'TaxJar': {
            achievements: [
                'Enabled accurate tax compliance for 50,000+ users across multiple states and jurisdictions',
                'Built automated tax calculation engine reducing processing time by 80%',
                'Integrated with Amazon API for seamless e-commerce tax reporting',
                'Implemented real-time tax rate updates supporting dynamic compliance requirements',
                'Developed customer-facing dashboard improving user engagement by 45%'
            ],
            technologies: ['Ruby on Rails', 'Amazon API', 'Tax Systems', 'PostgreSQL', 'E-commerce Integration']
        },
        'PaymentSpring': {
            achievements: [
                'Developed payment processor integration libraries enabling secure transaction processing',
                'Built comprehensive merchant dashboard with real-time analytics and reporting',
                'Implemented PCI DSS compliant payment flows handling $50M+ in annual transaction volume',
                'Created automated reconciliation system reducing accounting discrepancies by 90%',
                'Led cross-functional team delivering mobile payment SDK used by 100+ merchants'
            ],
            technologies: ['Ruby on Rails', 'Full Stack', 'Payment APIs', 'JavaScript', 'PCI Compliance', 'Mobile SDK']
        },
        'CardFlight': {
            achievements: [
                'Built core payment infrastructure supporting mobile card readers and point-of-sale systems',
                'Developed merchant API enabling seamless integration with third-party applications',
                'Implemented real-time transaction processing with 99.5% success rate',
                'Created comprehensive testing framework reducing deployment bugs by 70%',
                'Led technical documentation initiative improving developer onboarding efficiency'
            ],
            technologies: ['Ruby on Rails', 'Core Systems', 'Mobile SDK', 'APIs', 'Point of Sale', 'Technical Documentation']
        },
        'Freelance': {
            achievements: [
                'Started Rails development career with freelance projects across multiple industries',
                'Built custom web applications for small businesses and educational institutions',
                'Developed systematic teaching methodologies and mentorship skills',
                'Created automated workflows reducing manual administrative tasks by 60%',
                'Established foundation for entrepreneurial and technical leadership skills'
            ],
            technologies: ['Rails Journey Begins', 'Freelance', 'Full Stack', 'Entrepreneurship', 'Web Applications']
        },
        'Prairie Hill Learning Center': {
            achievements: [
                'Developed systematic teaching methodologies and mentorship skills',
                'Led educational programs for diverse learning environments',
                'Created structured learning frameworks improving student outcomes',
                'Built leadership foundation through team coordination and program management',
                'Established systems thinking approach applied throughout technical career'
            ],
            technologies: ['Leadership Foundation', 'Mentorship', 'Education', 'Systems Thinking', 'Program Management']
        }
    };
    
    return jobData[company] || {
        achievements: ['Key role in company operations and technical development'],
        technologies: ['Professional Development']
    };
}

/**
 * Initialize Contact Form functionality
 */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');
    
    if (!form || !statusDiv) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        statusDiv.className = 'form-status loading';
        statusDiv.textContent = 'Sending your message...';
        
        // Get form data for display
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const company = form.querySelector('#company').value;
        const role = form.querySelector('#role').value;
        const message = form.querySelector('#message').value;
        
        // Track contact form submission
        if (typeof gtag === 'function') {
            gtag('event', 'contact_form_submit', {
                event_category: 'Contact',
                event_label: 'Form Submission',
                value: 1
            });
        }
        
        // Create email content
        let emailSubject = `Portfolio Contact from ${name}`;
        if (company && role) {
            emailSubject += ` - ${role} at ${company}`;
        }
        
        let emailBody = `Hello Anderson,\n\n`;
        emailBody += `${message}\n\n`;
        emailBody += `Best regards,\n${name}`;
        if (company) emailBody += `\n${role ? role + ' at ' : ''}${company}`;
        emailBody += `\nEmail: ${email}`;
        
        // Create mailto link
        const mailtoLink = `mailto:anderson@sonander.dev?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Show success message with direct contact options
        statusDiv.className = 'form-status success';
        statusDiv.innerHTML = `
            <strong>Thank you for your message, ${name}!</strong><br><br>
            <div style="margin: 1rem 0;">
                <a href="${mailtoLink}" 
                   style="background: #059669; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; display: inline-block; margin: 0.5rem 0; font-weight: 500;">
                    📧 Send Email
                </a>
            </div>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: #6b7280;">
                Your message has been prepared. Click "Send Email" to open your email client with the pre-filled message.
            </p>
        `;
        
        // Scroll to the success message
        statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form after a delay so user can see the success message
        setTimeout(() => {
            form.reset();
        }, 100);
        
        // Track successful form completion
        if (typeof gtag === 'function') {
            gtag('event', 'contact_form_success', {
                event_category: 'Contact',
                event_label: 'Contact Info Provided',
                value: 1
            });
        }
        
        // Show success notification
        showNotification('Contact information ready!', 'success');
        
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
    
    // Add form validation feedback
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#dc2626';
            } else {
                this.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '';
            }
        });
    });
    
    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#dc2626';
                statusDiv.className = 'form-status error';
                statusDiv.textContent = 'Please enter a valid email address.';
            } else if (this.value) {
                this.style.borderColor = '#059669';
                statusDiv.className = 'form-status';
                statusDiv.style.display = 'none';
            }
        });
    }
}

// PWA Install Functionality
let deferredPrompt;
let installButton;

// Create install button
function createInstallButton() {
    installButton = document.createElement('button');
    installButton.id = 'pwa-install-btn';
    installButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/>
        </svg>
        Install App
    `;
    installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
        transform: translateY(100px);
        opacity: 0;
    `;
    
    installButton.addEventListener('click', installApp);
    document.body.appendChild(installButton);
}

// Show install button with animation
function showInstallButton() {
    if (installButton) {
        installButton.style.transform = 'translateY(0)';
        installButton.style.opacity = '1';
    }
}

// Hide install button with animation
function hideInstallButton() {
    if (installButton) {
        installButton.style.transform = 'translateY(100px)';
        installButton.style.opacity = '0';
        setTimeout(() => {
            if (installButton && installButton.parentNode) {
                installButton.parentNode.removeChild(installButton);
                installButton = null;
            }
        }, 300);
    }
}

// Install app function
async function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        // Track install attempt
        if (typeof gtag !== 'undefined') {
            gtag('event', 'pwa_install_attempt', {
                event_category: 'PWA',
                event_label: outcome,
                value: outcome === 'accepted' ? 1 : 0
            });
        }
        
        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
            hideInstallButton();
        }
        
        deferredPrompt = null;
    }
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button after a delay to avoid overwhelming users
    setTimeout(() => {
        if (!installButton) {
            createInstallButton();
        }
        showInstallButton();
    }, 3000);
});

// Listen for successful app installation
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    hideInstallButton();
    
    // Track successful installation
    if (typeof gtag !== 'undefined') {
        gtag('event', 'pwa_installed', {
            event_category: 'PWA',
            event_label: 'successful_install',
            value: 1
        });
    }
});

// Check if app is already installed
window.addEventListener('DOMContentLoaded', () => {
    // Hide install button if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
        console.log('App is running in standalone mode');
        hideInstallButton();
    }
    
    // Also check for iOS standalone mode
    if (window.navigator.standalone === true) {
        console.log('App is running in iOS standalone mode');
        hideInstallButton();
    }
});

// Service Worker registration and updates
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered successfully');
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content is available
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Show update notification
function showUpdateNotification() {
    const updateBanner = document.createElement('div');
    updateBanner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #667eea;
        color: white;
        padding: 12px;
        text-align: center;
        z-index: 10000;
        font-size: 14px;
    `;
    updateBanner.innerHTML = `
        New content is available! 
        <button onclick="window.location.reload()" style="margin-left: 10px; background: white; color: #667eea; border: none; padding: 4px 12px; border-radius: 4px; cursor: pointer;">
            Refresh
        </button>
    `;
    document.body.insertBefore(updateBanner, document.body.firstChild);
}

// Portfolio Projects Data
const portfolioProjects = [
    {
        id: 'rubber-ducky-live',
        title: 'Rubber Ducky Live',
        category: 'AI-Powered Development Platform',
        technologies: ['Next.js', 'React', 'Node.js', 'Anthropic Claude', 'TypeScript', 'Tailwind CSS'],
        linesOfCode: '24.3K LOC',
        description: 'AI-powered development companion featuring voice-first technical conversations, Claude 4 integration, and professional export capabilities. Built for software developers and technical professionals.',
        highlights: [
            'Voice-first AI conversations with technical context',
            'Claude 4 intelligence integration',
            'Professional export and session management',
            'Sub-150ms response times',
            'Enterprise-grade security'
        ],
        screenshot: 'screenshots/rubber-ducky-live.png',
        githubUrl: 'https://github.com/son1112/rubber-ducky-live',
        liveUrl: 'https://rubberducklive.com',
        status: 'active'
    },
    {
        id: 'storytimestar',
        title: 'StoryTimeStar',
        category: 'AI Storytelling Platform',
        technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB', 'Express', 'TypeScript'],
        linesOfCode: '18.5K LOC',
        description: 'AI-powered storytelling platform that generates personalized narratives with multi-language support and analytics dashboard for content creators.',
        highlights: [
            'AI-powered story generation and personalization',
            'Multi-language narrative support',
            'Analytics dashboard for content insights',
            'Responsive cross-platform design',
            'Real-time story collaboration features'
        ],
        screenshot: 'screenshots/storytimestar.png',
        githubUrl: 'https://github.com/son1112/storytimestar',
        liveUrl: 'https://storytimestar.com',
        status: 'active'
    },
    {
        id: 'replayready',
        title: 'ReplayReady',
        category: 'A/B Testing Analytics Platform',
        technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'Chart.js', 'AssemblyAI'],
        linesOfCode: '22.1K LOC',
        description: 'Advanced A/B testing platform with speech-to-text integration, real-time analytics, and comprehensive test result visualization.',
        highlights: [
            'Advanced A/B testing with statistical significance',
            'AssemblyAI speech-to-text integration',
            'Real-time analytics dashboard',
            'MongoDB-based session data consistency',
            'Interactive result visualization'
        ],
        screenshot: 'screenshots/replayready.png',
        githubUrl: 'https://github.com/son1112/replayready',
        liveUrl: 'https://replayready.com',
        status: 'active'
    },
    {
        id: 'project-universe',
        title: 'Project Universe',
        category: 'Meta-Development Intelligence',
        technologies: ['Node.js', 'TypeScript', 'Knowledge Graphs', 'AI Analysis', 'Data Visualization'],
        linesOfCode: '28.3K LOC',
        description: 'Meta-development intelligence system that analyzes 128+ project portfolios, providing strategic insights and cross-project pattern recognition for the CAN.CODE ecosystem.',
        highlights: [
            'Portfolio analysis across 128+ projects',
            'Strategic meta-development intelligence',
            'Cross-project pattern recognition',
            'Business development insights',
            'Knowledge graph technology'
        ],
        screenshot: 'screenshots/project-universe.png',
        githubUrl: 'https://github.com/son1112/project-universe',
        liveUrl: 'https://project-universe.com',
        status: 'active'
    },
    {
        id: 'job-automation',
        title: 'Job Application Automation',
        category: 'Career Development System',
        technologies: ['Ruby on Rails', 'Sidekiq', 'AI/ML', 'PostgreSQL', 'Redis', 'OpenAI'],
        linesOfCode: '15.7K LOC',
        description: 'Intelligent job application system with AI-powered cover letter generation, 22-skill matching algorithm, and automated response tracking for Rails + AI positions.',
        highlights: [
            'AI-powered personalized cover letter generation',
            '22-skill weighted scoring algorithm',
            'Rails 8 + Sidekiq infrastructure',
            'OpenAI GPT-4 integration',
            'Automated employer communication tracking'
        ],
        screenshot: null, // No screenshot available yet
        githubUrl: 'https://github.com/son1112/job-application-automation',
        liveUrl: null,
        status: 'development'
    },
    {
        id: 'career-portfolio-site',
        title: 'Career Portfolio Site',
        category: 'Professional Portfolio Platform',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'WebP', 'GitHub Pages'],
        linesOfCode: '1.4K LOC',
        description: 'This very portfolio! A high-performance, PWA-enabled professional portfolio with dynamic resume generation, interactive timeline, and comprehensive A/B testing system.',
        highlights: [
            'Progressive Web App with offline capabilities',
            '5-variant dynamic resume system',
            'Interactive career timeline visualization',
            'Performance optimization (5.7MB reduction)',
            'Professional A/B testing implementation'
        ],
        screenshot: 'screenshots/career-portfolio.png',
        githubUrl: 'https://github.com/son1112/career-portfolio-site',
        liveUrl: 'https://sonander.dev',
        status: 'active'
    }
];

// Portfolio initialization
function initializePortfolio() {
    console.log('Initializing portfolio section...');
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    if (!portfolioGrid) {
        console.log('Portfolio grid not found');
        return;
    }
    
    // Clear existing content
    portfolioGrid.innerHTML = '';
    
    // Generate project cards
    portfolioProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        portfolioGrid.appendChild(projectCard);
    });
    
    // Add scroll animations for portfolio cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all portfolio cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    console.log(`Portfolio initialized with ${portfolioProjects.length} projects`);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    const screenshot = project.screenshot ? 
        `<img src="${project.screenshot}" alt="${project.title} Screenshot" class="project-screenshot" loading="lazy">` :
        `<div class="project-placeholder">🚧</div>`;
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const highlightsList = project.highlights.map(highlight => 
        `<li>${highlight}</li>`
    ).join('');
    
    const statusClass = project.status === 'active' ? 'status-active' : 'status-development';
    const statusText = project.status === 'active' ? 'Live' : 'In Development';
    
    // Hide live site buttons until projects are ready for public access
    const liveLink = `<span class="project-link disabled">
            <span>🌐</span> Coming Soon
        </span>`;
    
    const githubLink = project.githubUrl ? 
        `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
            <span>👨‍💻</span> GitHub
        </a>` : '';
    
    card.innerHTML = `
        ${screenshot}
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-category">${project.category}</div>
                </div>
            </div>
            
            <p class="project-description">${project.description}</p>
            
            <div class="project-tech">
                ${techTags}
            </div>
            
            <div class="project-highlights">
                <h4>Key Features:</h4>
                <ul class="highlight-list">
                    ${highlightsList}
                </ul>
            </div>
            
            <div class="project-stats">
                <span class="project-loc">${project.linesOfCode}</span>
                <span class="project-status ${statusClass}">${statusText}</span>
            </div>
            
            <div class="project-links">
                ${liveLink}
                ${githubLink}
            </div>
        </div>
    `;
    
    // Add analytics tracking for project interactions
    card.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            trackEvent('portfolio_project_view', {
                project_id: project.id,
                project_title: project.title,
                project_category: project.category
            });
        }
    });
    
    // Track link clicks
    card.querySelectorAll('.project-link:not(.disabled)').forEach(link => {
        link.addEventListener('click', (e) => {
            const linkType = e.currentTarget.textContent.includes('Live Site') ? 'live_site' : 'github';
            trackEvent('portfolio_link_click', {
                project_id: project.id,
                project_title: project.title,
                link_type: linkType,
                url: e.currentTarget.href
            });
        });
    });
    
    return card;
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});