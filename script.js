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
    
    // Initialize external link monitoring
    initializeExternalLinkMonitoring();
    
    // Initialize skills visualization
    initializeSkillsVisualization();
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