// Dynamic Resume Builder for Role-Specific Content
// Matches the 5 hero variants: ai-focused, rails-backend, tech-lead, fullstack, enterprise-fintech

const resumeVariants = {
    'ai-focused': {
        title: 'Empathy-Driven AI Research Engineer',
        summary: 'Empathy-driven AI research engineer building accessible intelligence for underserved communities. Founded can.code Research Labs to create PRISM for neurodivergent communication assistance and Rubber Ducky for accessible voice-AI problem-solving. 10+ years professional experience with accessibility-first architecture, achieving 73% success rate through transparent limitation documentation and honest capability assessment.',

        skills: {
            'Accessible AI Engineering': [
                { name: 'Universal Design Principles', level: 'expert' },
                { name: 'WCAG 2.1 AA/AAA Compliance', level: 'advanced' },
                { name: 'Assistive Technology Development', level: 'advanced' },
                { name: 'Multi-Modal Interfaces', level: 'expert' }
            ],
            'Backend Development': [
                { name: 'Ruby on Rails', level: 'expert' },
                { name: 'Ruby', level: 'expert' },
                { name: 'Python', level: 'advanced' },
                { name: 'Node.js', level: 'intermediate' }
            ],
            'AI & Machine Learning': [
                { name: 'Claude API Integration', level: 'expert' },
                { name: 'OpenAI GPT APIs', level: 'advanced' },
                { name: 'Context Engineering', level: 'expert' },
                { name: 'AI Agent Development', level: 'advanced' }
            ],
            'Frontend Development': [
                { name: 'JavaScript', level: 'advanced' },
                { name: 'TypeScript', level: 'intermediate' },
                { name: 'React', level: 'intermediate' },
                { name: 'HTML/CSS', level: 'expert' }
            ],
            'Database & Storage': [
                { name: 'PostgreSQL', level: 'expert' },
                { name: 'Redis', level: 'advanced' },
                { name: 'Vector Databases', level: 'intermediate' },
                { name: 'ElasticSearch', level: 'advanced' }
            ],
            'Cloud & DevOps': [
                { name: 'AWS', level: 'expert' },
                { name: 'CI/CD', level: 'advanced' },
                { name: 'Docker', level: 'intermediate' },
                { name: 'Lambda', level: 'intermediate' }
            ],
            'AI Tools & Practices': [
                { name: 'Prompt Engineering', level: 'expert' },
                { name: 'RAG Systems', level: 'advanced' },
                { name: 'AI Workflow Integration', level: 'expert' },
                { name: 'Autonomous Development', level: 'advanced' }
            ]
        },
        
        experienceHighlights: {
            'Founder & Research Lead': [
                'Created PRISM (Personal Reality Into Shared Meaning) - assistive communication platform for neurodivergent users with voice preservation and perspective refinement',
                'Built Rubber Ducky accessible voice-AI platform with 126+ experimental implementations achieving 73% documented success rate',
                'Developed accessibility-first architecture with WCAG compliance, screen reader optimization, and multi-modal interfaces from day one',
                'Established empathy-first research methodology prioritizing transparent limitation documentation alongside capabilities'
            ],
            'Senior Software Engineer (Rails)': [
                'Engineered AI-augmented development workflows reducing development time by 60%',
                'Integrated multiple AI APIs (Claude, GPT-4, AssemblyAI) into production Rails applications',
                'Advanced development in AI integration, context engineering, and intelligent system design'
            ]
        },
        
        projects: [
            {
                title: 'PRISM - Empathy-First Communication Assistance',
                type: 'Assistive Technology Platform',
                achievements: [
                    'Personal Reality Into Shared Meaning: assistive communication for neurodivergent users',
                    'Voice preservation with perspective refinement for different audiences and contexts',
                    'Recognition over correction paradigm - honors individual speech methods rather than enforcing conformity',
                    'Accessibility-first architecture: WCAG compliance, screen reader optimization, keyboard navigation from day one',
                    'Universal design principles serving neurodivergent and neurotypical users equally'
                ]
            },
            {
                title: 'Rubber Ducky - Accessible Voice-AI Research Platform',
                type: 'Experimental Research System',
                achievements: [
                    '126+ systematic implementations documenting voice-AI problem-solving effectiveness',
                    'Achieved 73% documented success rate for structured problem-solving sessions',
                    'Transparent limitation analysis: identified context switching failures in longer conversations',
                    'Multi-modal interfaces with voice-first design and text fallbacks for accessibility',
                    'Research methodology prioritizing academic rigor over marketing claims'
                ]
            }
        ]
    },

    'rails-backend': {
        title: 'Senior Rails Engineer',
        summary: 'Senior Rails engineer with 10+ years building scalable backend systems. Expert in API design, database optimization, and payment processing - delivered enterprise solutions serving 50,000+ users with 99%+ uptime.',
        
        skills: {
            'Backend Development': [
                { name: 'Ruby on Rails', level: 'expert' },
                { name: 'Ruby', level: 'expert' },
                { name: 'API Design', level: 'expert' },
                { name: 'Microservices', level: 'advanced' }
            ],
            'Database Systems': [
                { name: 'PostgreSQL', level: 'expert' },
                { name: 'MySQL', level: 'expert' },
                { name: 'Redis', level: 'expert' },
                { name: 'Database Optimization', level: 'expert' }
            ],
            'Enterprise Architecture': [
                { name: 'System Design', level: 'expert' },
                { name: 'Scalability', level: 'expert' },
                { name: 'Performance Tuning', level: 'advanced' },
                { name: 'Load Balancing', level: 'advanced' }
            ],
            'Cloud & Infrastructure': [
                { name: 'AWS', level: 'expert' },
                { name: 'S3', level: 'advanced' },
                { name: 'RDS', level: 'advanced' },
                { name: 'ElastiCache', level: 'advanced' }
            ],
            'Testing & Quality': [
                { name: 'RSpec', level: 'expert' },
                { name: 'TDD/BDD', level: 'expert' },
                { name: 'Code Coverage', level: 'expert' },
                { name: 'Performance Testing', level: 'advanced' }
            ],
            'DevOps & Monitoring': [
                { name: 'CI/CD', level: 'advanced' },
                { name: 'New Relic', level: 'advanced' },
                { name: 'Splunk', level: 'intermediate' },
                { name: 'Honey Badger', level: 'advanced' }
            ]
        },
        
        experienceHighlights: {
            'Senior Software Engineer (Rails)': [
                'Enabled accurate tax compliance for 50,000+ TaxJar users by architecting Amazon Seller Partner API integration',
                'Engineered Microsoft 365 integration enabling monitoring and threat hunting at enterprise scale',
                'Built middleware for Account Updater service to AWS SAM state machine with 99%+ uptime',
                'Developed payment processor integration libraries achieving certifications with major processors'
            ],
            'Technical Leadership': [
                'Led SRE rotations monitoring Honey Badger, Splunk, Sentry, and NewRelic across multiple platforms',
                'Saved 100+ developer hours annually by automating complex tax remediation analysis systems',
                'Established comprehensive testing, coverage, and code analysis practices (RSpec, SimpleCov, RuboCop)'
            ]
        },
        
        projects: [
            {
                title: 'Enterprise Tax Compliance Platform',
                type: 'High-Scale Backend System',
                achievements: [
                    'End-to-end system for archival data retrieval serving 50,000+ users',
                    'Integrated with sharded PostgreSQL databases and AWS S3 Glacier storage',
                    'Automated complex processes reducing manual intervention by 90%',
                    'Implemented secure data handling meeting enterprise security requirements'
                ]
            },
            {
                title: 'Payment Processor Integration Framework',
                type: 'Financial Backend Systems',
                achievements: [
                    'Built integration libraries for Vantiv (Worldpay) and First Data processors',
                    'Achieved PCI compliance certifications for enterprise-grade financial processing',
                    'Created maintainable, scalable transaction processing architecture',
                    'Established comprehensive testing and monitoring for financial systems'
                ]
            }
        ]
    },

    'tech-lead': {
        title: 'Research Lead & Founder - Empathy-First Leadership',
        summary: 'Research leader and founder with 10+ years building accessible experimental systems for underserved communities. Founded can.code Research Labs on empathy-first philosophy - creating PRISM for neurodivergent communication assistance and documenting AI system boundaries through transparent methodology. Leadership approach prioritizes human flourishing over feature extraction, building technology that serves rather than exploits.',

        skills: {
            'Empathy-First Leadership': [
                { name: 'Community-Centered Development', level: 'expert' },
                { name: 'User Thriving Over Productivity', level: 'expert' },
                { name: 'Transparent Documentation', level: 'expert' },
                { name: 'Social Impact Focus', level: 'advanced' }
            ],
            'Leadership & Strategy': [
                { name: 'Team Leadership', level: 'expert' },
                { name: 'Technical Strategy', level: 'expert' },
                { name: 'Product Planning', level: 'expert' },
                { name: 'Stakeholder Management', level: 'advanced' }
            ],
            'Technical Architecture': [
                { name: 'System Architecture', level: 'expert' },
                { name: 'Scalability Design', level: 'expert' },
                { name: 'Technology Selection', level: 'expert' },
                { name: 'Technical Debt Management', level: 'advanced' }
            ],
            'Backend Development': [
                { name: 'Ruby on Rails', level: 'expert' },
                { name: 'Ruby', level: 'expert' },
                { name: 'API Architecture', level: 'expert' },
                { name: 'Database Design', level: 'advanced' }
            ],
            'Business Development': [
                { name: 'Startup Founding', level: 'expert' },
                { name: 'Product Strategy', level: 'advanced' },
                { name: 'Business Planning', level: 'intermediate' },
                { name: 'Client Relations', level: 'advanced' }
            ],
            'Team & Process': [
                { name: 'Agile/Scrum', level: 'expert' },
                { name: 'Code Reviews', level: 'expert' },
                { name: 'Mentoring', level: 'expert' },
                { name: 'Process Improvement', level: 'advanced' }
            ],
            'Innovation & Growth': [
                { name: 'MVP Development', level: 'expert' },
                { name: 'Rapid Prototyping', level: 'advanced' },
                { name: 'Innovation Strategy', level: 'advanced' },
                { name: 'Technology Adoption', level: 'expert' }
            ]
        },
        
        experienceHighlights: {
            'Founder & Research Lead': [
                'Founded can.code Research Labs on empathy-first philosophy to build accessible intelligence for underserved communities',
                'Created PRISM assistive technology platform serving neurodivergent users with voice preservation and perspective refinement',
                'Led Rubber Ducky research platform development with 126+ implementations achieving 73% documented success rate',
                'Established research methodology prioritizing transparent limitation documentation and human flourishing over profit extraction'
            ],
            'Technical Leadership Roles': [
                'Led SRE teams across multiple platforms, establishing monitoring and reliability practices',
                'Guided technical decision-making for enterprise-scale systems serving 50,000+ users',
                'Improved developer onboarding processes and documentation standards across organizations',
                'Drove adoption of modern development practices including TDD, code reviews, and CI/CD'
            ]
        },
        
        projects: [
            {
                title: 'can.code Research Labs - Empathy-First Organization',
                type: 'Leadership & Social Impact',
                achievements: [
                    'Founded research organization on empathy-first philosophy building accessible intelligence for underserved communities',
                    'Created PRISM for neurodivergent communication assistance and Rubber Ducky for accessible voice-AI problem-solving',
                    'Established transparent research methodology documenting both successes (73% rate) and limitations honestly',
                    'Prioritized human flourishing over profit extraction - technology serving users rather than exploiting them',
                    'Built community-centered development practices with marginalized voices in leadership'
                ]
            },
            {
                title: 'Accessible Technology Leadership',
                type: 'Technical & Ethical Innovation',
                achievements: [
                    'Established accessibility-first architecture standards: WCAG compliance, screen reader optimization from day one',
                    'Developed recognition over correction paradigm - honoring individual communication methods vs enforcing conformity',
                    'Created multi-modal interfaces serving neurodivergent and neurotypical users equally through universal design',
                    'Led teams building assistive technology with real impact on marginalized communities'
                ]
            }
        ]
    },

    'fullstack': {
        title: 'Full-Stack Engineer - Universal Design',
        summary: 'Full-stack engineer with 10+ years building complete web applications with accessibility-first architecture and universal design principles. Expert in Rails backend, modern frontend frameworks, and deployment automation - delivered products from initial concept through production scale. Built systems that work for all users, not just majority demographics.',

        skills: {
            'Backend Development': [
                { name: 'Ruby on Rails', level: 'expert' },
                { name: 'Ruby', level: 'expert' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'API Development', level: 'expert' }
            ],
            'Frontend Development & Accessibility': [
                { name: 'JavaScript', level: 'expert' },
                { name: 'TypeScript', level: 'advanced' },
                { name: 'React', level: 'advanced' },
                { name: 'HTML/CSS', level: 'expert' },
                { name: 'WCAG Compliance', level: 'advanced' },
                { name: 'Universal Design', level: 'advanced' }
            ],
            'Modern Frameworks': [
                { name: 'Next.js', level: 'advanced' },
                { name: 'Vue.js', level: 'intermediate' },
                { name: 'Tailwind CSS', level: 'advanced' },
                { name: 'Bootstrap', level: 'expert' }
            ],
            'Database & Storage': [
                { name: 'PostgreSQL', level: 'expert' },
                { name: 'MySQL', level: 'advanced' },
                { name: 'Redis', level: 'advanced' },
                { name: 'MongoDB', level: 'intermediate' }
            ],
            'DevOps & Deployment': [
                { name: 'AWS', level: 'advanced' },
                { name: 'CI/CD', level: 'advanced' },
                { name: 'Docker', level: 'intermediate' },
                { name: 'GitHub Actions', level: 'advanced' }
            ],
            'Tools & Practices': [
                { name: 'Git', level: 'expert' },
                { name: 'Agile/Scrum', level: 'expert' },
                { name: 'TDD/BDD', level: 'expert' },
                { name: 'Responsive Design', level: 'expert' }
            ]
        },
        
        experienceHighlights: {
            'Full Stack Development': [
                'Built complete web applications from database design through responsive frontend interfaces',
                'Developed Next.js 15 platform with voice integration, real-time streaming, and modern UI/UX',
                'Created responsive, mobile-first designs with advanced CSS and JavaScript interactions',
                'Integrated multiple third-party APIs and services for complete application functionality'
            ],
            'End-to-End Product Development': [
                'Launched successful freelance business securing 5+ clients with complete web solutions',
                'Built e-commerce platforms with payment processing, inventory management, and user interfaces',
                'Delivered projects from initial concept through production deployment and maintenance',
                'Established development workflows covering frontend, backend, and deployment automation'
            ]
        },
        
        projects: [
            {
                title: '🦆 RubberDucky Full-Stack Platform',
                type: 'Complete Web Application',
                achievements: [
                    'Built end-to-end platform with Next.js frontend and Rails-compatible backend services',
                    'Implemented voice integration with AssemblyAI real-time streaming and WebSocket technology',
                    'Created responsive UI supporting desktop and mobile experiences with modern design patterns',
                    'Integrated 13+ AI agents with seamless frontend interfaces and real-time response handling'
                ]
            },
            {
                title: 'E-Commerce Platform Suite',
                type: 'Full-Stack Business Solutions',
                achievements: [
                    'Delivered complete e-commerce solutions for 5+ clients with custom requirements',
                    'Built responsive interfaces with shopping carts, payment processing, and admin dashboards',
                    'Integrated inventory management, order processing, and customer communication systems',
                    'Established scalable architecture supporting business growth and feature expansion'
                ]
            }
        ]
    },

    'enterprise-fintech': {
        title: 'Enterprise Fintech Engineer - Inclusive Finance',
        summary: 'Enterprise software engineer with 10+ years in financial technology, building inclusive financial systems that serve diverse users. Expert in payment processing, tax compliance automation, and PCI-compliant systems - architected accessible solutions for 50,000+ users across multiple processors. Designed financial technology to be usable by all users, not just majority demographics.',
        
        skills: {
            'Financial Systems': [
                { name: 'Payment Processing', level: 'expert' },
                { name: 'PCI Compliance', level: 'expert' },
                { name: 'Tax Systems', level: 'expert' },
                { name: 'Financial APIs', level: 'expert' }
            ],
            'Enterprise Backend': [
                { name: 'Ruby on Rails', level: 'expert' },
                { name: 'Ruby', level: 'expert' },
                { name: 'Microservices', level: 'advanced' },
                { name: 'API Design', level: 'expert' }
            ],
            'Compliance & Security': [
                { name: 'Security Architecture', level: 'expert' },
                { name: 'Data Encryption', level: 'advanced' },
                { name: 'Audit Compliance', level: 'expert' },
                { name: 'Risk Management', level: 'advanced' }
            ],
            'Database Systems': [
                { name: 'PostgreSQL', level: 'expert' },
                { name: 'Database Sharding', level: 'advanced' },
                { name: 'Data Archival', level: 'expert' },
                { name: 'Transaction Processing', level: 'expert' }
            ],
            'Integration Platforms': [
                { name: 'Stripe API', level: 'expert' },
                { name: 'Amazon Seller API', level: 'expert' },
                { name: 'Vantiv/Worldpay', level: 'expert' },
                { name: 'First Data', level: 'advanced' }
            ],
            'Enterprise Tools': [
                { name: 'AWS', level: 'expert' },
                { name: 'S3 Glacier', level: 'advanced' },
                { name: 'Enterprise Monitoring', level: 'expert' },
                { name: 'Compliance Reporting', level: 'advanced' }
            ]
        },
        
        experienceHighlights: {
            'Enterprise Financial Systems': [
                'Enabled accurate tax compliance for 50,000+ TaxJar users through Amazon Seller Partner API integration',
                'Engineered payment processor integrations achieving certifications with Vantiv, First Data, and Stripe',
                'Built secure financial data processing systems meeting PCI compliance and enterprise security standards',
                'Developed middleware for Account Updater service handling millions of financial transactions'
            ],
            'Compliance & Security Leadership': [
                'Architected secure data handling systems meeting TaxJar and Stripe security requirements',
                'Implemented comprehensive audit trails and compliance reporting for enterprise financial operations',
                'Led security reviews and PCI compliance initiatives across multiple payment processing platforms',
                'Established financial data archival systems with secure retrieval and disaster recovery protocols'
            ]
        },
        
        projects: [
            {
                title: 'Enterprise Tax Compliance Automation',
                type: 'Financial Compliance System',
                achievements: [
                    'Built end-to-end tax compliance system serving 50,000+ users with 99.9% uptime',
                    'Integrated with sharded PostgreSQL databases and AWS S3 Glacier for secure data archival',
                    'Automated complex compliance processes reducing manual intervention by 90%',
                    'Implemented secure data handling meeting enterprise audit and regulatory requirements'
                ]
            },
            {
                title: 'Multi-Processor Payment Integration Platform',
                type: 'Enterprise Payment Systems',
                achievements: [
                    'Achieved certifications with major payment processors including Vantiv (Worldpay) and First Data',
                    'Built integration libraries handling millions of transactions with 99.99% reliability',
                    'Established comprehensive testing and monitoring for financial transaction processing',
                    'Created maintainable, scalable payment processing architecture for enterprise clients'
                ]
            }
        ]
    }
};

// Utility function to render skills based on role focus
function renderSkillsForRole(skills) {
    return Object.entries(skills).map(([category, skillList]) => {
        const skillsHtml = skillList.map(skill => 
            `<span class="skill ${skill.level}">${skill.name}</span>`
        ).join('');
        
        return `
            <div class="skill-category">
                <h4>${category}</h4>
                <div class="skills-list">${skillsHtml}</div>
            </div>
        `;
    }).join('');
}

// Utility function to render experience highlights
function renderExperienceHighlights(highlights) {
    return Object.entries(highlights).map(([role, achievements]) => {
        const achievementsHtml = achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');
        
        return `
            <div class="experience-item">
                <div class="experience-header">
                    <div class="job-title">
                        <h4>${role}</h4>
                    </div>
                </div>
                <ul class="job-achievements">${achievementsHtml}</ul>
            </div>
        `;
    }).join('');
}

// Utility function to render projects
function renderProjects(projects) {
    return projects.map(project => {
        const achievementsHtml = project.achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');
        
        return `
            <div class="project-item">
                <div class="project-header">
                    <h4>${project.title}</h4>
                    <span class="project-type">${project.type}</span>
                </div>
                <ul class="project-achievements">${achievementsHtml}</ul>
            </div>
        `;
    }).join('');
}

// Main function to generate resume content
function generateResumeForRole(roleType = 'ai-focused') {
    const variant = resumeVariants[roleType];
    if (!variant) {
        console.error(`Resume variant '${roleType}' not found`);
        return null;
    }
    
    return {
        title: variant.title,
        summary: variant.summary,
        skillsHtml: renderSkillsForRole(variant.skills),
        experienceHtml: renderExperienceHighlights(variant.experienceHighlights),
        projectsHtml: renderProjects(variant.projects)
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { resumeVariants, generateResumeForRole };
}