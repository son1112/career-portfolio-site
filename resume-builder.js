// Dynamic Resume Builder for Role-Specific Content
// Matches the 5 hero variants: ai-focused, rails-backend, tech-lead, fullstack, enterprise-fintech

const resumeVariants = {
    'ai-focused': {
        title: 'AI-Focused Software Engineer',
        summary: 'AI-focused Rails engineer with 10+ years building high-performance systems from rapid MVPs to enterprise scale. Expert in AI tooling integration, autonomous development, and shipping fast - currently building production AI platforms with Claude Code and modern Rails architecture.',
        
        skills: {
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
            'Founder & Technical Lead': [
                'Built production 🦆 rubberDucky platform with 13+ specialized AI agents and Claude 4 integration',
                'Developed comprehensive context engineering methodology for AI prompt optimization',
                'Implemented voice-enabled AI with AssemblyAI real-time streaming and WebSocket technology',
                'Created AI-powered business strategy, security, and application development assistants'
            ],
            'Senior Software Engineer (Rails)': [
                'Engineered AI-augmented development workflows reducing development time by 60%',
                'Integrated multiple AI APIs (Claude, GPT-4, AssemblyAI) into production Rails applications',
                'Advanced development in AI integration, context engineering, and intelligent system design'
            ]
        },
        
        projects: [
            {
                title: '🦆 AI-Powered Career Development System',
                type: 'Production AI Platform',
                achievements: [
                    'Built comprehensive AI system generating 500+ documents across multiple career domains',
                    'Developed 8 specialized AI agents for interview preparation, resume optimization, and technical coaching',
                    'Achieved 99%+ system reliability with Claude Code integration and intelligent response caching',
                    'Demonstrated advanced AI integration and natural language processing capabilities'
                ]
            },
            {
                title: 'Context Engineering Framework',
                type: 'AI Development Methodology',
                achievements: [
                    'Created systematic approach to prompt engineering and AI agent development',
                    'Developed testing frameworks for AI response quality and consistency',
                    'Implemented multi-agent coordination systems for complex problem solving',
                    'Established best practices for AI-augmented development workflows'
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
        title: 'Technical Lead & Founder',
        summary: 'Technical leader and founder with 10+ years building teams and products. Expert in scaling from MVP to enterprise, team mentorship, and strategic technical decisions - founded Can.Code and led engineering teams to deliver high-impact solutions.',
        
        skills: {
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
            'Founder & Technical Lead': [
                'Founded Can.Code, securing initial funding and building technical team from ground up',
                'Led development of 13+ specialized AI agents and production platform architecture',
                'Established engineering culture, processes, and technical standards for scalable growth',
                'Mentored junior developers and coordinated cross-functional team collaboration'
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
                title: 'Can.Code Platform Development',
                type: 'Technical Leadership & Strategy',
                achievements: [
                    'Led end-to-end platform development from concept to production deployment',
                    'Coordinated 13+ AI agent development with strategic roadmap planning',
                    'Established technical architecture supporting voice integration and real-time features',
                    'Built scalable foundation supporting rapid feature development and user growth'
                ]
            },
            {
                title: 'Enterprise Team Leadership',
                type: 'Technical Management',
                achievements: [
                    'Led technical teams at Stripe, Huntress, and TaxJar delivering enterprise solutions',
                    'Mentored 15+ developers across multiple organizations and technology stacks',
                    'Established engineering best practices improving team velocity by 40%',
                    'Drove technical innovation while maintaining system reliability and security standards'
                ]
            }
        ]
    },

    'fullstack': {
        title: 'Full-Stack Engineer',
        summary: 'Full-stack engineer with 10+ years building complete web applications. Expert in Rails backend, modern frontend frameworks, and deployment automation - delivered products from initial concept through production scale.',
        
        skills: {
            'Backend Development': [
                { name: 'Ruby on Rails', level: 'expert' },
                { name: 'Ruby', level: 'expert' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'API Development', level: 'expert' }
            ],
            'Frontend Development': [
                { name: 'JavaScript', level: 'expert' },
                { name: 'TypeScript', level: 'advanced' },
                { name: 'React', level: 'advanced' },
                { name: 'HTML/CSS', level: 'expert' }
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
        title: 'Enterprise Fintech Engineer',
        summary: 'Enterprise software engineer with 10+ years in financial technology. Expert in payment processing, tax compliance automation, and PCI-compliant systems - architected solutions for 50,000+ users across multiple processors.',
        
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