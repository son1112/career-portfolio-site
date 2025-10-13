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
        summary: 'Senior Rails engineer with 10+ years building scalable backend systems. Expert in API design, database optimization, and payment processing - delivered enterprise solutions at scale with 99%+ uptime.',
        
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
                'Guided technical decision-making for enterprise-scale fintech and payment systems',
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

    'zapier-ai-engineer': {
        title: 'Sr. Applied AI Engineer - LLM Production & Agent Architectures',
        summary: 'Applied AI engineer with 10+ years building distributed systems and 1+ year deploying LLMs in production. Architected multi-agent AI systems with systematic evaluation and transparent documentation of capabilities and limitations. Strong expertise in TypeScript/Node.js + Rails, integrating multiple LLM providers (Claude, GPT-4), and building scalable AI infrastructure with real-time streaming and context management. Proven experience designing prompt engineering strategies, RAG-adjacent architectures, and production monitoring for AI systems.',

        skills: {
            'LLM Production Engineering': [
                { name: 'Claude API Integration', level: 'advanced' },
                { name: 'OpenAI GPT-4 APIs', level: 'advanced' },
                { name: 'Multi-Agent Architectures', level: 'advanced' },
                { name: 'Prompt Engineering', level: 'advanced' },
                { name: 'Context Management', level: 'advanced' },
                { name: 'LLM Evaluation Frameworks', level: 'advanced' }
            ],
            'AI Infrastructure & Scalability': [
                { name: 'Real-Time AI Streaming', level: 'advanced' },
                { name: 'Distributed Cloud Systems', level: 'advanced' },
                { name: 'AI System Monitoring', level: 'advanced' },
                { name: 'Production AI Deployment', level: 'advanced' },
                { name: 'Microservices Architecture', level: 'advanced' }
            ],
            'TypeScript & Full-Stack': [
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'Next.js', level: 'advanced' },
                { name: 'React', level: 'advanced' },
                { name: 'Ruby on Rails', level: 'advanced' }
            ],
            'Integration Platforms & APIs': [
                { name: 'API Architecture & Design', level: 'advanced' },
                { name: 'Third-Party Integrations', level: 'advanced' },
                { name: 'Webhook Systems', level: 'advanced' },
                { name: 'RESTful APIs', level: 'advanced' },
                { name: 'Real-Time Data Processing', level: 'advanced' }
            ],
            'Cloud & Data Infrastructure': [
                { name: 'AWS (S3, Lambda, RDS)', level: 'advanced' },
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'MongoDB', level: 'advanced' },
                { name: 'Redis', level: 'advanced' },
                { name: 'Vector Databases', level: 'intermediate' }
            ],
            'AI Evaluation & Monitoring': [
                { name: 'Systematic Testing', level: 'advanced' },
                { name: 'Success Rate Analysis', level: 'advanced' },
                { name: 'Production Monitoring (SRE)', level: 'advanced' },
                { name: 'Performance Optimization', level: 'advanced' },
                { name: 'Error Tracking & Analysis', level: 'advanced' }
            ]
        },

        experienceHighlights: {
            'Research Lead & Founder - can.code Labs': [
                'Built multi-agent AI architecture with specialized agents, context routing, and mode switching for diverse conversation types',
                'Developed comprehensive evaluation framework with systematic documentation of implementation outcomes and transparent limitation analysis',
                'Integrated multiple LLM providers (Claude, GPT-4, AssemblyAI) with production monitoring, fallback strategies, and real-time streaming responses',
                'Designed prompt engineering strategies for different domains: general chat, code assistance, creative writing, research, and brainstorming modes',
                'Created AI infrastructure supporting real-time voice processing, conversation persistence, message tagging/starring, and session management'
            ],
            'Senior Software Engineer - Production AI & Integrations': [
                'Architected enterprise-scale integrations connecting complex third-party APIs (Amazon Seller Partner, Microsoft 365, payment processors)',
                'Built scalable cloud systems on AWS serving enterprise user bases with distributed architecture and high availability',
                'Led SRE rotations monitoring production systems with NewRelic, Splunk, Sentry, and Honey Badger - maintaining high uptime',
                'Developed automation systems significantly reducing manual intervention through intelligent workflow design and error handling',
                'Strong expertise in TypeScript/Node.js and Ruby on Rails for building distributed, scalable cloud web applications'
            ]
        },

        projects: [
            {
                title: 'Rubber Ducky - Multi-Agent LLM Evaluation Platform',
                type: 'Production AI System',
                achievements: [
                    'Systematic evaluation framework: Documented LLM implementation outcomes with transparent analysis of both successes and limitations',
                    'Multi-agent architecture: Specialized AI agents with context management, mode switching, and conversation routing',
                    'Prompt engineering strategies: Designed domain-specific prompting for chat, code, creative, research, and brainstorming modes',
                    'Real-time AI infrastructure: Fast streaming responses with voice integration, WebSocket communication, and session persistence',
                    'Production monitoring: Transparent limitation documentation identifying context switching challenges and capability boundaries',
                    'Tech stack: Next.js, TypeScript, MongoDB, Node.js, Claude API, GPT-4 API, AssemblyAI, real-time streaming'
                ]
            },
            {
                title: 'PRISM - Context-Aware Communication Assistant',
                type: 'RAG-Adjacent AI System',
                achievements: [
                    'Built context-aware AI system for perspective refinement with audience-specific adaptation',
                    'Implemented multi-layered agent architecture maintaining speaker authenticity while adapting communication style',
                    'Designed RAG-adjacent architecture: voice preservation with contextual perspective refinement',
                    'Real-time processing: Streaming AI responses with accessible multi-modal interfaces (voice + text)',
                    'Tech stack: Next.js, TypeScript, Claude AI, MongoDB, AssemblyAI, WCAG 2.1 AA/AAA compliance'
                ]
            },
            {
                title: 'Enterprise Integration Platform Experience',
                type: 'Third-Party API Integration',
                achievements: [
                    'Architected integrations connecting complex third-party systems: Amazon Seller Partner API serving large enterprise user bases',
                    'Built Microsoft 365 integration enabling enterprise-scale threat hunting and monitoring',
                    'Developed payment processor integration libraries achieving certifications with major processors (Vantiv, First Data)',
                    'Created scalable middleware systems with high reliability, comprehensive error handling, and production monitoring',
                    'Relevant to integration platforms: deep experience connecting disparate systems with reliability and scale'
                ]
            }
        ]
    },

    'cardflight-junior': {
        title: 'Junior Backend Software Engineer - Returning CardFlight Alum',
        summary: 'CardFlight alumni (2016-2019) returning with 10+ years Ruby on Rails expertise and payment processor experience gained at Stripe, Huntress, and enterprise fintech companies. Built payment integration libraries, achieved processor certifications, and contributed to CardFlight\'s core Rails infrastructure. Seeking junior role to return to familiar environment while bringing senior-level Rails, testing, and payment systems knowledge. You get experienced backend engineering at junior-level commitment.',

        skills: {
            'Backend Development': [
                { name: 'Ruby on Rails', level: 'advanced' },
                { name: 'Ruby', level: 'advanced' },
                { name: 'API Development', level: 'advanced' },
                { name: 'C# (Learning)', level: 'beginner' }
            ],
            'Payment Systems Experience': [
                { name: 'Payment Processor Integrations', level: 'advanced' },
                { name: 'Vantiv/Worldpay Certification', level: 'advanced' },
                { name: 'First Data Integration', level: 'advanced' },
                { name: 'PCI Compliance', level: 'advanced' }
            ],
            'Testing & Quality': [
                { name: 'RSpec', level: 'advanced' },
                { name: 'Manual Testing', level: 'advanced' },
                { name: 'Automated Testing', level: 'advanced' },
                { name: 'SimpleCov', level: 'advanced' },
                { name: 'RuboCop', level: 'advanced' }
            ],
            'Database & Infrastructure': [
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'MySQL', level: 'advanced' },
                { name: 'Redis', level: 'advanced' },
                { name: 'AWS', level: 'advanced' }
            ],
            'Operations & Support': [
                { name: 'Production Support', level: 'advanced' },
                { name: 'Bug Fixes & Troubleshooting', level: 'advanced' },
                { name: 'Third-Party Collaboration', level: 'advanced' },
                { name: 'Technical Documentation', level: 'advanced' }
            ],
            'Collaboration & Process': [
                { name: 'Fast-Paced Environments', level: 'advanced' },
                { name: 'Remote Work', level: 'advanced' },
                { name: 'Cross-Team Communication', level: 'advanced' },
                { name: 'Continuous Learning', level: 'advanced' }
            ]
        },

        experienceHighlights: {
            'CardFlight Experience (2016-2019)': [
                'Software Engineer on Rails Core team for 3 years building payment processing infrastructure',
                'Engineered integration libraries for multiple payment systems achieving certifications with Vantiv (Worldpay) and First Data',
                'Developed comprehensive testing practices (RSpec), coverage analysis (SimpleCov), and code quality standards (RuboCop)',
                'Collaborated with third-party processors on code certifications and technical integrations',
                'Supported operations team with production troubleshooting and technical issue resolution'
            ],
            'Growth Since Leaving CardFlight': [
                'Stripe/TaxJar (2021-2022): Integrated Amazon Seller Partner API serving large user bases, advanced development in tax compliance',
                'Huntress Labs (2022-2024): Built Microsoft 365 integration, rotational SRE monitoring production systems',
                'PaymentSpring (2019-2021): Developed AWS middleware for payment credential synchronization',
                'Continuous Rails development across multiple companies maintaining and expanding backend expertise'
            ]
        },

        projects: [
            {
                title: 'Payment Processor Integration Libraries at CardFlight',
                type: 'CardFlight Core Work (2016-2019)',
                achievements: [
                    'Built integration libraries for Vantiv (Worldpay) 610 host achieving processor certification',
                    'Developed First Data Omaha integration with comprehensive error handling and testing',
                    'Established testing standards: RSpec for behavior testing, SimpleCov for coverage, RuboCop for code quality',
                    'Created maintainable, scalable transaction processing systems serving CardFlight merchants',
                    'Collaborated directly with processor technical teams on certification requirements'
                ]
            },
            {
                title: 'Enterprise-Scale Payment & Tax Compliance Systems',
                type: 'Post-CardFlight Growth',
                achievements: [
                    'Stripe/TaxJar: Enabled tax compliance by integrating Amazon Seller Partner API with Rails backend',
                    'PaymentSpring: Built AWS SAM middleware for Account Updater service managing credentials on file',
                    'Huntress: Engineered Microsoft 365 integration with rotational SRE responsibilities',
                    'Consistent Rails development across fintech, tax compliance, and cybersecurity domains',
                    'Operations support experience: monitoring, bug triage, production troubleshooting'
                ]
            },
            {
                title: 'Why Junior Role as CardFlight Alumni',
                type: 'Value Proposition',
                achievements: [
                    'Returning to familiar environment: Already know SwipeSimple, payment domain, company culture',
                    'Zero ramp-up time: Understand CardFlight codebase patterns, testing standards, processor integrations',
                    'Senior expertise at junior commitment: 10+ years Rails, payment systems, testing - at junior-level expectations',
                    'Proven cultural fit: 3 successful years at CardFlight demonstrates alignment with team and values',
                    'Growth mindset: Eager to learn C# and new technologies while contributing Rails expertise immediately'
                ]
            }
        ]
    },

    'anthropic-business-tech': {
        title: 'Software Engineer, Business Technology - Accessibility-First Full-Stack',
        summary: 'Full-stack engineer with 10+ years building accessible, empathy-driven applications - currently using Claude API in production to serve neurodivergent users through PRISM and Rubber Ducky. Seeking to transition from research/customer-facing tools to internal business technology at Anthropic, bringing rare accessibility expertise (WCAG 2.1 AA/AAA, screen reader optimization), production Claude integration experience, and full-stack skills (React, TypeScript, Node.js, Rails, AWS). Mission alignment: Built accessible intelligence for underserved communities, want to build internal tools for teams creating beneficial AI.',

        skills: {
            'Accessibility Engineering (Rare Skill)': [
                { name: 'WCAG 2.1 AA/AAA Compliance', level: 'advanced' },
                { name: 'Screen Reader Optimization', level: 'advanced' },
                { name: 'Keyboard Navigation', level: 'advanced' },
                { name: 'Multi-Modal Interfaces', level: 'advanced' },
                { name: 'Neurodivergent User Support', level: 'advanced' },
                { name: 'Universal Design Principles', level: 'advanced' }
            ],
            'Full-Stack Development': [
                { name: 'React', level: 'advanced' },
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'Next.js', level: 'advanced' },
                { name: 'Ruby on Rails', level: 'advanced' },
                { name: 'Python', level: 'intermediate' }
            ],
            'AI Integration (Claude API User)': [
                { name: 'Claude API Production Integration', level: 'advanced' },
                { name: 'OpenAI GPT-4 APIs', level: 'advanced' },
                { name: 'Multi-Agent Architectures', level: 'advanced' },
                { name: 'Real-Time AI Streaming', level: 'advanced' },
                { name: 'Prompt Engineering', level: 'advanced' }
            ],
            'Cloud & Infrastructure': [
                { name: 'AWS (S3, Lambda, RDS)', level: 'advanced' },
                { name: 'MongoDB', level: 'advanced' },
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'Redis', level: 'advanced' }
            ],
            'Collaboration & Process': [
                { name: 'Empathetic Communication', level: 'advanced' },
                { name: 'Cross-Team Collaboration', level: 'advanced' },
                { name: 'Remote Work', level: 'advanced' },
                { name: 'Iterative Improvement', level: 'advanced' },
                { name: 'System Reliability', level: 'advanced' }
            ],
            'Growing Areas (Honest)': [
                { name: 'Internal Business Tools', level: 'beginner' },
                { name: 'Data Pipelines', level: 'intermediate' },
                { name: 'Python (strengthening)', level: 'intermediate' }
            ]
        },

        experienceHighlights: {
            'Why Anthropic - Mission Alignment': [
                'Production Claude API user: Built Rubber Ducky and PRISM using Claude in production to serve neurodivergent users',
                'Empathy-first philosophy: can.code Research Labs mission of "accessible intelligence for underserved communities" aligns with Anthropic\'s beneficial AI mission',
                'Accessibility expertise: WCAG 2.1 AA/AAA compliance, screen reader optimization - rare skills that match Anthropic\'s values',
                'Transparent methodology: Document both successes and limitations, aligning with empirical research culture',
                'Seeking transition: From research/customer-facing tools to internal business technology, applying accessibility-first approach to help Anthropic teams work effectively'
            ],
            'Full-Stack with Accessibility & AI Integration': [
                'Built accessible AI platforms: Rubber Ducky (126+ documented implementations with Claude API) and PRISM (neurodivergent communication assistance)',
                'Full-stack architecture: React, TypeScript, Next.js, Node.js for frontend; Rails, MongoDB, AWS for backend',
                'Real-time AI integration: Streaming Claude API responses, voice processing, multi-modal interfaces with accessibility compliance',
                'Production reliability: Built scalable systems with monitoring, error handling, and iterative improvement',
                'Enterprise experience: 10+ years building systems at Stripe, Huntress, payment processors with high reliability requirements'
            ]
        },

        projects: [
            {
                title: 'Rubber Ducky - Production Claude API Platform',
                type: 'Accessible AI Tool (Customer-Facing)',
                achievements: [
                    'Production Claude API integration: Real-time streaming, multi-agent architecture, systematic evaluation framework',
                    'Accessibility-first: WCAG 2.1 AA/AAA compliance, screen reader optimization, keyboard navigation from day one',
                    'Full-stack: React, TypeScript, Next.js frontend; Node.js, MongoDB backend; AWS infrastructure',
                    'Documented implementations: Transparent methodology showing both capabilities and limitations',
                    'Tech stack: Next.js, TypeScript, Claude API, MongoDB, Node.js, AWS'
                ]
            },
            {
                title: 'PRISM - Accessible Communication Platform',
                type: 'Assistive Technology (Neurodivergent Users)',
                achievements: [
                    'Built for underserved community: Neurodivergent users needing communication assistance with voice preservation',
                    'Recognition over correction paradigm: Honors individual communication methods rather than enforcing conformity',
                    'Multi-modal accessibility: Voice + text interfaces, screen reader support, universal design principles',
                    'Real-time Claude API processing: Streaming responses with accessible interface design',
                    'Empathy-first architecture: Every design decision prioritizes user dignity and autonomy'
                ]
            },
            {
                title: 'Enterprise Systems Experience',
                type: 'Full-Stack Engineering at Scale',
                achievements: [
                    'Stripe/TaxJar: Integrated Amazon Seller Partner API serving large user bases with Rails backend',
                    'Huntress Labs: Built Microsoft 365 integration with rotational SRE monitoring production systems',
                    'PaymentSpring: Developed AWS middleware for payment credential synchronization',
                    'Cross-team collaboration: Worked with operations, product, and third-party technical teams',
                    'System reliability: Production support, monitoring, bug triage across multiple companies'
                ]
            }
        ]
    },

    'avantos-ai-fintech': {
        title: 'Sr. Software Engineer, AI Team - AI + FinTech Specialist',
        summary: 'Remote engineer with rare combination: 10+ years financial services (Stripe, TaxJar, payment processors, CardFlight) + production LLM experience building Claude API platforms. Founded AI research lab (can.code) while maintaining deep fintech expertise. Built end-to-end LLM features with prompt engineering, model evaluation, and RAG systems. Strong TypeScript, AWS, PostgreSQL. Eager to learn Go, Terraform, Kubernetes for AI fintech startup.',

        skills: {
            'LLM & AI Engineering': [
                { name: 'Production LLM Integration (Claude API)', level: 'advanced' },
                { name: 'Prompt Engineering', level: 'advanced' },
                { name: 'Model Evaluation & Testing', level: 'advanced' },
                { name: 'RAG-based Systems', level: 'advanced' },
                { name: 'OpenAI GPT-4 APIs', level: 'advanced' },
                { name: 'Multi-Agent Architectures', level: 'advanced' }
            ],
            'Financial Services Domain': [
                { name: 'Payment Processing', level: 'advanced' },
                { name: 'Tax Compliance Systems', level: 'advanced' },
                { name: 'Financial APIs & Integrations', level: 'advanced' },
                { name: 'FinTech Security & Compliance', level: 'advanced' },
                { name: 'Payment Processors (Vantiv, First Data)', level: 'advanced' }
            ],
            'Backend & Full-Stack': [
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'Ruby on Rails', level: 'advanced' },
                { name: 'Go (learning)', level: 'beginner' },
                { name: 'Microservices Architecture', level: 'advanced' }
            ],
            'Cloud & Infrastructure': [
                { name: 'AWS (S3, Lambda, RDS, SQS)', level: 'advanced' },
                { name: 'AWS Bedrock (learning)', level: 'beginner' },
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'MongoDB', level: 'advanced' },
                { name: 'Redis', level: 'advanced' }
            ],
            'DevOps & Infrastructure': [
                { name: 'Docker', level: 'intermediate' },
                { name: 'Kubernetes (learning)', level: 'beginner' },
                { name: 'Terraform (learning)', level: 'beginner' },
                { name: 'CI/CD', level: 'advanced' },
                { name: 'Datadog (learning)', level: 'beginner' }
            ],
            'Data & Pipelines': [
                { name: 'Data Pipeline Design', level: 'intermediate' },
                { name: 'API Integration & Workflows', level: 'advanced' },
                { name: 'Real-Time Data Processing', level: 'advanced' },
                { name: 'ETL Processes', level: 'intermediate' }
            ]
        },

        experienceHighlights: {
            'Why Avantos.ai - Perfect Fit': [
                'AI + FinTech specialist: Rare combination of production LLM experience + 10+ years financial services',
                'Startup founder: Built can.code Research Labs showing ownership mentality and initiative',
                'Production LLM experience: Built end-to-end AI features with Claude API - not just theory, real product work',
                'FinTech domain expert: Understands financial workflows, compliance, security from years at Stripe, TaxJar, payment processors',
                'Remote work proven: 5+ years successful remote collaboration across distributed teams at multiple companies'
            ],
            'LLM & AI Production Experience': [
                'Built Rubber Ducky: Production LLM platform with Claude API integration, prompt engineering, systematic evaluation',
                'Created PRISM: RAG-adjacent system for neurodivergent communication with voice preservation and context management',
                'Model evaluation framework: Documented implementation outcomes with transparent analysis of successes and limitations',
                'Real-time AI streaming: Built fast streaming response systems with voice integration and multi-modal interfaces',
                'End-to-end LLM features: Designed, built, deployed, and monitored production AI applications'
            ],
            'Financial Services Engineering': [
                'Stripe/TaxJar: Integrated Amazon Seller Partner API serving large user bases with tax compliance automation',
                'PaymentSpring: Built AWS middleware for Account Updater service managing payment credentials',
                'CardFlight: Engineered payment processor integration libraries achieving Vantiv and First Data certifications',
                'Financial data pipelines: Built systems for transaction processing, tax data ingestion, and compliance workflows',
                'Security & compliance: PCI compliance, secure data handling, audit trails across financial platforms'
            ]
        },

        projects: [
            {
                title: 'Rubber Ducky - Production LLM Platform',
                type: 'End-to-End AI Product',
                achievements: [
                    'Production Claude API integration: Built complete LLM-powered application from prompt engineering to deployment',
                    'Model evaluation & testing: Systematic framework documenting implementation outcomes and limitations',
                    'End-to-end ownership: Frontend (React/TypeScript), backend (Node.js), infrastructure (AWS), monitoring',
                    'Real-time processing: Streaming AI responses with voice integration and session management',
                    'Tech stack: TypeScript, Next.js, Claude API, MongoDB, Node.js, AWS - similar to Avantos stack'
                ]
            },
            {
                title: 'PRISM - RAG-based Communication System',
                type: 'AI-Powered Assistive Technology',
                achievements: [
                    'RAG-adjacent architecture: Voice preservation with contextual perspective refinement using LLMs',
                    'Multi-layered agent system: Context management, audience-specific adaptation, real-time processing',
                    'Production deployment: Real users, real-time streaming, monitoring and iteration',
                    'Full-stack with AI: React/TypeScript frontend, Node.js backend, Claude API integration, accessible design'
                ]
            },
            {
                title: 'Enterprise FinTech Systems at Scale',
                type: 'Financial Services Engineering',
                achievements: [
                    'Stripe/TaxJar: Tax compliance automation serving large user bases - data ingestion, workflow triggers, API integration',
                    'PaymentSpring: AWS-based payment credential synchronization - microservices, S3, state machines',
                    'CardFlight: Payment processor integrations with certifications - financial data pipelines, security, compliance',
                    'Cross-platform experience: Built systems processing millions in transactions with high reliability requirements',
                    'Domain expertise: Deep understanding of financial workflows, regulatory requirements, security standards'
                ]
            }
        ]
    },

    'enterprise-fintech': {
        title: 'Enterprise Fintech Engineer - Inclusive Finance',
        summary: 'Enterprise software engineer with 10+ years in financial technology, building inclusive financial systems that serve diverse users. Expert in payment processing, tax compliance automation, and PCI-compliant systems - architected accessible solutions at enterprise scale across multiple processors. Designed financial technology to be usable by all users, not just majority demographics.',
        
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
    },

    'fullstack-ai-architect': {
        title: 'AI Solutions Architect - Builder Transitioning to Strategic Consulting',
        summary: 'AI practitioner with production LLM experience transitioning to strategic consulting and thought leadership. Founded can.code Research Labs building Claude API and GPT-4 applications with systematic evaluation frameworks. 10+ years full-stack engineering provides technical credibility for client consulting. Strong technical communication skills with ability to translate complex AI concepts for business stakeholders. Eager to develop sales/BD skills while leveraging deep hands-on AI implementation experience.',

        skills: {
            'AI Implementation & Strategy': [
                { name: 'Production LLM Integration (Claude API)', level: 'advanced' },
                { name: 'AI Solution Architecture', level: 'advanced' },
                { name: 'Prompt Engineering & Optimization', level: 'advanced' },
                { name: 'Model Evaluation Frameworks', level: 'advanced' },
                { name: 'OpenAI GPT-4 APIs', level: 'advanced' },
                { name: 'RAG-based Systems', level: 'advanced' }
            ],
            'Technical Consulting Foundation': [
                { name: 'AI Strategy Development', level: 'intermediate' },
                { name: 'Technical Communication', level: 'advanced' },
                { name: 'Client Stakeholder Management', level: 'intermediate' },
                { name: 'Solution Design', level: 'advanced' },
                { name: 'Project Scoping', level: 'intermediate' }
            ],
            'Full-Stack Engineering': [
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'React/Next.js', level: 'advanced' },
                { name: 'Ruby on Rails', level: 'advanced' },
                { name: 'Python (learning)', level: 'intermediate' }
            ],
            'Cloud & Infrastructure': [
                { name: 'AWS (S3, Lambda, RDS)', level: 'advanced' },
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'MongoDB', level: 'advanced' },
                { name: 'System Architecture', level: 'advanced' },
                { name: 'API Design', level: 'advanced' }
            ],
            'Thought Leadership Potential': [
                { name: 'Technical Writing', level: 'advanced' },
                { name: 'Documentation', level: 'advanced' },
                { name: 'Content Creation (developing)', level: 'intermediate' },
                { name: 'Public Speaking (developing)', level: 'beginner' },
                { name: 'Community Engagement (developing)', level: 'beginner' }
            ],
            'Business Development (Growing)': [
                { name: 'AI Sales (learning)', level: 'beginner' },
                { name: 'Proposal Development (learning)', level: 'beginner' },
                { name: 'Client Relationship Building', level: 'intermediate' },
                { name: 'Revenue Growth (learning)', level: 'beginner' }
            ]
        },

        experienceHighlights: {
            'Why FullStack - Honest Positioning': [
                'Builder → Consultant transition: Production AI experience provides credibility for strategic consulting',
                'Practitioner depth: Built real LLM applications end-to-end, not just consulted on them',
                'Thought leadership foundation: can.code Research Labs shows initiative and content creation capability',
                'Technical communication: Able to translate complex AI concepts for business stakeholders',
                'Growth mindset: Strong technical foundation with eagerness to develop sales/BD skills',
                'Remote experience: 5+ years distributed team collaboration'
            ],
            'Production AI & LLM Experience': [
                'Built Rubber Ducky: End-to-end LLM platform with Claude API - prompt engineering, evaluation, deployment',
                'Created PRISM: RAG-adjacent communication system with voice preservation and context management',
                'Founded can.code Research Labs: AI research initiative demonstrating thought leadership potential',
                'Systematic evaluation: Documented implementation outcomes with transparent analysis of capabilities and limitations',
                'Real-world AI deployment: Managed production AI applications with real users, not just proof-of-concepts'
            ],
            'Technical Consulting Foundation': [
                'Full-stack expertise: 10+ years building distributed systems provides consulting credibility',
                'Solution architecture: Designed and implemented complex AI integrations across multiple platforms',
                'Stakeholder communication: Experience explaining technical decisions to non-technical audiences',
                'Project delivery: Built and shipped production features with measurable business outcomes',
                'Documentation culture: Strong technical writing and knowledge sharing practices'
            ],
            'Business & Leadership Development': [
                'Entrepreneurial mindset: Founded can.code showing ownership and initiative',
                'Client-facing potential: Technical depth enables confident business development conversations',
                'Content creation ready: Capable of producing thought leadership content (blogs, whitepapers, talks)',
                'Network building: Actively developing presence in AI/tech community',
                'Sales acumen (growing): Eager to learn business development and revenue generation strategies'
            ]
        },

        projects: [
            {
                title: 'Rubber Ducky - Production LLM Platform',
                type: 'AI Product Development',
                achievements: [
                    'Built complete Claude API integration: Prompt engineering, streaming responses, systematic testing',
                    'Developed evaluation framework: Transparent documentation of AI capabilities and limitations',
                    'Production deployment: Real users with voice-enabled AI problem-solving interface',
                    'Technical foundation for consulting: Hands-on experience informs client recommendations'
                ]
            },
            {
                title: 'PRISM - RAG Communication System',
                type: 'AI Strategy & Implementation',
                achievements: [
                    'Architected context-aware AI system: Voice preservation with audience-specific adaptation',
                    'Multi-layered agent design: Conversation mode routing and context management',
                    'Real-world validation: Production deployment serving neurodivergent communication needs',
                    'Consulting insight: Deep understanding of AI implementation challenges and tradeoffs'
                ]
            },
            {
                title: 'can.code Research Labs',
                type: 'Thought Leadership Foundation',
                achievements: [
                    'Founded AI research initiative: Demonstrates entrepreneurial drive and thought leadership',
                    'Built multiple AI products: Hands-on experience across different AI use cases',
                    'Documentation practice: Systematic documentation of implementation learnings',
                    'Content platform: Foundation for publishing AI insights and best practices'
                ]
            }
        ]
    },

    'huzi-fullstack': {
        title: 'Full Stack Engineer - Advanced TypeScript + Production LLM + Multi-Tenant SaaS',
        summary: 'Remote full-stack engineer with advanced TypeScript/Next.js and production LLM integration experience. Built end-to-end AI applications with Claude API and GPT-4 including streaming responses, multi-tenant architecture, and PostgreSQL backends. 10+ years engineering distributed systems with API design, database schema optimization, and real-time data processing. Founded can.code Research Labs demonstrating ownership mentality and initiative for startup environment.',

        skills: {
            'Core Stack (Advanced)': [
                { name: 'TypeScript', level: 'advanced' },
                { name: 'Next.js', level: 'advanced' },
                { name: 'Express.js', level: 'advanced' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'TailwindCSS', level: 'advanced' }
            ],
            'LLM Integration (Production)': [
                { name: 'Claude API Integration', level: 'advanced' },
                { name: 'OpenAI GPT-4 APIs', level: 'advanced' },
                { name: 'Streaming AI Responses', level: 'advanced' },
                { name: 'Prompt Engineering', level: 'advanced' },
                { name: 'LLM Provider Integration', level: 'advanced' },
                { name: 'AI Feedback Systems', level: 'advanced' }
            ],
            'Backend Architecture': [
                { name: 'API Design & Architecture', level: 'advanced' },
                { name: 'Multi-Tenant SaaS', level: 'advanced' },
                { name: 'Database Schema Design', level: 'advanced' },
                { name: 'RESTful APIs', level: 'advanced' },
                { name: 'Real-Time APIs', level: 'advanced' },
                { name: 'Microservices', level: 'advanced' }
            ],
            'Database & Performance': [
                { name: 'PostgreSQL Optimization', level: 'advanced' },
                { name: 'Schema Design', level: 'advanced' },
                { name: 'Query Optimization', level: 'advanced' },
                { name: 'Database Indexing', level: 'advanced' },
                { name: 'Data Pipeline Design', level: 'intermediate' }
            ],
            'DevOps & Infrastructure': [
                { name: 'Docker', level: 'intermediate' },
                { name: 'CI/CD', level: 'advanced' },
                { name: 'AWS Deployment', level: 'advanced' },
                { name: 'Cloud Infrastructure', level: 'advanced' },
                { name: 'Performance Optimization', level: 'advanced' }
            ],
            'Testing & Quality': [
                { name: 'Unit Testing', level: 'advanced' },
                { name: 'Integration Testing', level: 'advanced' },
                { name: 'Test-Driven Development', level: 'advanced' },
                { name: 'API Testing', level: 'advanced' }
            ]
        },

        experienceHighlights: {
            'Why Huzi.ai - Perfect Technical Match': [
                'Strong TypeScript/Next.js: Built production applications with advanced TypeScript patterns and Next.js architecture',
                'Production LLM Integration: Real experience with Claude API and GPT-4 including streaming responses and AI feedback loops',
                'Multi-tenant SaaS background: Built scalable backends serving multiple clients with data isolation and security',
                'Intelligence Layer alignment: Built PRISM as an AI-powered Intelligence Layer - same architectural concept as Huzi.ai',
                'Startup mentality: Founded can.code Research Labs showing ownership, initiative, and building from scratch',
                'Remote work proven: 5+ years successful distributed team collaboration at multiple companies'
            ],
            'Production LLM & AI Integration': [
                'Rubber Ducky: Built complete Claude API integration with streaming responses, prompt optimization, real-time processing',
                'PRISM: Multi-tenant AI communication system with dynamic context routing and personalized AI responses',
                'Streaming AI responses: Implemented real-time LLM response streaming with chunked transfer encoding',
                'AI feedback systems: Built closed-loop evaluation systems documenting AI performance and limitations',
                'LLM provider integration: Direct experience with Claude API and OpenAI GPT-4 in production environments',
                'Dynamic AI task generation: Context-aware AI workflows adapting to user needs and conversation state'
            ],
            'Full-Stack TypeScript/Next.js Experience': [
                'Advanced TypeScript: Advanced types, generics, type guards, utility types across frontend and backend',
                'Next.js architecture: Server components, API routes, middleware, streaming SSR, route handlers',
                'Express.js APIs: Built secure, high-performance RESTful APIs with authentication and authorization',
                'TailwindCSS mastery: Production UI implementation with responsive design and accessibility standards',
                'Real-time features: WebSocket integration, server-sent events, streaming data to frontend'
            ],
            'Backend & Database Engineering': [
                'PostgreSQL experience: Schema design, query optimization, indexing strategies, performance tuning',
                'Multi-tenant architecture: Data isolation, tenant-specific configuration, scalable multi-tenancy patterns',
                'API architecture: RESTful design, versioning, rate limiting, error handling, documentation',
                'Data enrichment pipelines: Built integrations with third-party APIs (Stripe, Amazon Seller API, payment processors)',
                'Performance optimization: Database query tuning, caching strategies, load testing, monitoring'
            ],
            'Enterprise SaaS Experience': [
                'Stripe/TaxJar: Built tax compliance SaaS serving large user bases with PostgreSQL and AWS infrastructure',
                'PaymentSpring: Multi-tenant payment processing middleware with secure financial data handling',
                'CardFlight: Payment processor integration platform with PCI compliance and enterprise security',
                'Scalable architecture: Systems handling high transaction volumes with reliability and performance',
                'Production monitoring: Established observability, error tracking, and performance monitoring'
            ]
        },

        projects: [
            {
                title: 'Rubber Ducky - Production LLM Platform',
                type: 'Full-Stack AI Application',
                achievements: [
                    'Built with TypeScript/Next.js/Express.js: Advanced implementation with streaming AI responses',
                    'Claude API integration: Real-time LLM streaming, prompt engineering, response optimization',
                    'PostgreSQL backend: Schema design for conversation history, user management, AI context storage',
                    'Real-time features: Server-sent events for streaming AI responses to frontend',
                    'Production deployment: AWS infrastructure with monitoring and performance optimization'
                ]
            },
            {
                title: 'PRISM - Multi-Tenant AI Communication System',
                type: 'Intelligence Layer Architecture',
                achievements: [
                    'Multi-tenant SaaS design: Data isolation, tenant-specific AI configurations, scalable architecture',
                    'Dynamic AI task generation: Context-aware workflows adapting to user communication needs',
                    'LLM provider integration: Claude API and GPT-4 with fallback strategies and cost optimization',
                    'Closed-loop AI feedback: Evaluation system tracking AI performance and user satisfaction',
                    'Flexible data enrichment: Third-party API integrations enhancing AI context and responses'
                ]
            },
            {
                title: 'Enterprise Tax Compliance Platform (Stripe/TaxJar)',
                type: 'Multi-Tenant SaaS Backend',
                achievements: [
                    'PostgreSQL schema design: Complex multi-tenant data model with sharding and archival',
                    'API architecture: RESTful services integrating Amazon Seller Partner API for tax data ingestion',
                    'Data pipeline engineering: Automated workflows processing financial data for compliance automation',
                    'Performance optimization: Query tuning and indexing strategies for large-scale data processing'
                ]
            }
        ]
    },

    'cardflight-senior': {
        title: 'Senior Backend Software Engineer - CardFlight Alumni Returning with Growth',
        summary: 'Remote senior backend engineer returning to CardFlight with significant growth since 2016-2019 tenure. Originally achieved Vantiv and First Data payment processor certifications; since expanded with enterprise-scale experience at TaxJar, TypeScript adoption, and production LLM integration. On the forefront of agentic coding with Claude Code and building AI-powered applications. 10+ years Ruby on Rails engineering with deep payment processing domain knowledge. Founded can.code Research Labs demonstrating ownership mentality and technical leadership. Zero ramp-up time with institutional knowledge plus new capabilities.',

        skills: {
            'Ruby on Rails & Backend (Core Strength)': [
                { name: 'Ruby on Rails (10+ years)', level: 'advanced' },
                { name: 'Ruby', level: 'advanced' },
                { name: 'API Design & Architecture', level: 'advanced' },
                { name: 'RESTful Services', level: 'advanced' },
                { name: 'Microservices', level: 'advanced' },
                { name: 'Background Jobs (Sidekiq)', level: 'advanced' }
            ],
            'Payment Processing Domain (CardFlight Legacy + Growth)': [
                { name: 'Payment Processor Integrations', level: 'advanced' },
                { name: 'PCI Compliance', level: 'advanced' },
                { name: 'Financial Transaction Processing', level: 'advanced' },
                { name: 'Vantiv/Worldpay Integration', level: 'advanced' },
                { name: 'First Data Integration', level: 'advanced' }
            ],
            'Modern Stack Expansion': [
                { name: 'TypeScript (production experience)', level: 'intermediate' },
                { name: 'Node.js', level: 'intermediate' },
                { name: 'C# (can ramp up quickly)', level: 'intermediate' },
                { name: 'GraphQL', level: 'intermediate' }
            ],
            'AI/LLM Development & Agentic Coding': [
                { name: 'Claude API Integration (production LLM features)', level: 'advanced' },
                { name: 'OpenAI GPT-4 APIs', level: 'advanced' },
                { name: 'Claude Code (AI-assisted development)', level: 'advanced' },
                { name: 'Agentic Coding Patterns', level: 'intermediate' },
                { name: 'LLM Application Architecture', level: 'intermediate' },
                { name: 'Prompt Engineering', level: 'intermediate' }
            ],
            'Database & Performance': [
                { name: 'PostgreSQL', level: 'advanced' },
                { name: 'Database Schema Design', level: 'advanced' },
                { name: 'Query Optimization', level: 'advanced' },
                { name: 'Redis Caching', level: 'advanced' },
                { name: 'Sharding Strategies', level: 'advanced' }
            ],
            'Cloud & Infrastructure (Expanded Since CardFlight)': [
                { name: 'AWS (S3, Lambda, RDS, SQS, EC2)', level: 'advanced' },
                { name: 'GitHub Actions', level: 'advanced' },
                { name: 'CI/CD Pipelines', level: 'advanced' },
                { name: 'Docker', level: 'intermediate' },
                { name: 'Monitoring & Observability', level: 'advanced' }
            ],
            'Testing & Quality (CardFlight Standards)': [
                { name: 'RSpec', level: 'advanced' },
                { name: 'Test-Driven Development', level: 'advanced' },
                { name: 'SimpleCov', level: 'advanced' },
                { name: 'RuboCop', level: 'advanced' },
                { name: 'Integration Testing', level: 'advanced' }
            ]
        },

        experienceHighlights: {
            'Why This Is a Win-Win Reunion': [
                'Zero ramp-up time: Familiar with CardFlight payment processor integration architecture, achieved Vantiv and First Data certifications during 2016-2019 tenure',
                'Significant growth since 2019: Enterprise-scale TaxJar experience, TypeScript adoption, AI/LLM integration, agentic coding with Claude Code',
                'Expanded technical capabilities: Ruby/Rails mastery + TypeScript production experience + AWS expertise + modern AI development',
                'Cultural fit already proven: 3 years successful collaboration with no risk on culture, work style, or mission alignment'
            ],
            'CardFlight Experience (2016-2019) - Foundation': [
                'Payment Processor Certifications: Engineered integration libraries achieving Vantiv (Worldpay) and First Data certifications',
                'Integration Architecture: Built Ruby gems for payment processor communications, PCI compliance requirements',
                'Testing Excellence: Established comprehensive test coverage with RSpec, SimpleCov, RuboCop standards',
                'Production Reliability: Maintained high-uptime payment processing systems serving small-business merchants',
                'Code Quality Leadership: Contributed to architectural decisions and code review practices'
            ],
            'Post-CardFlight Growth - TaxJar (2021-2022)': [
                'Enterprise tax compliance automation: Contributed to platform serving large user bases with 99%+ uptime',
                'OAuth upgrade project: Led Amazon Seller Partner API authentication modernization for tax reporting and autofiling',
                'PostgreSQL at scale: Worked with sharded databases, S3 Glacier archival, query optimization',
                'Rails microservices: Background jobs with SQS, Lambda integration, distributed processing',
                'Enterprise security: Handled sensitive financial data with comprehensive audit compliance'
            ],
            'Post-CardFlight Growth - PaymentSpring (2019-2021)': [
                'Payment processing evolution: Continued domain expertise with Account Updater service',
                'AWS-based microservices: State machines managing payment credential synchronization',
                'Multi-tenant architecture: Secure financial data handling across multiple clients',
                'CardFlight foundation: Applied payment processor expertise to new challenges (Note: PaymentSpring founded by CardFlight alumni Bryan Thompson and Jesse Angel)'
            ],
            'Modern AI Development & Agentic Coding': [
                'Rubber Ducky: Production TypeScript/Next.js with Claude API integration, built extensively using Claude Code',
                'Claude API & GPT-4: Production LLM features with streaming responses, systematic evaluation frameworks',
                'Agentic coding workflows: Heavy Claude Code user for AI-assisted development, on forefront of AI tooling',
                'Full-stack TypeScript: Node.js/Express.js backend + React/Next.js frontend demonstrating adaptability',
                'Real-time LLM features: Server-sent events for streaming AI responses, WebSocket integration'
            ],
            'Leadership & Mentoring': [
                'Technical mentorship: Guided engineers on Rails best practices, testing patterns, API design',
                'Greenfield/legacy balance: TaxJar OAuth upgrade (modernizing while maintaining compatibility), PaymentSpring Account Updater',
                'Architectural decision-making: Can contribute to senior-level system design discussions',
                'Ownership mindset: Founded can.code Research Labs showing initiative beyond assigned work',
                'Modern development practices: Can mentor on AI-assisted workflows, Claude Code usage, agentic coding patterns'
            ]
        },

        projects: [
            {
                title: 'Enterprise Tax Compliance Platform (TaxJar)',
                type: 'Multi-Tenant SaaS Backend',
                achievements: [
                    'OAuth upgrade project: Led Amazon Seller Partner API authentication modernization for tax reporting, compliance automation, and autofiling sales taxes',
                    'PostgreSQL at scale: Worked with complex multi-tenant data model, sharding strategies, S3 Glacier archival',
                    'High-reliability requirements: Contributed to 99%+ uptime system serving large enterprise user bases',
                    'Rails backend optimization: Background jobs, caching strategies, query optimization for financial data processing',
                    'Security compliance: Handled sensitive financial data with comprehensive audit trails and regulatory requirements'
                ]
            },
            {
                title: 'Payment Credential Synchronization (PaymentSpring)',
                type: 'AWS-Based Microservices',
                achievements: [
                    'Account Updater middleware: State machine architecture managing payment credential updates',
                    'Multi-tenant payment processing: Secure handling across multiple merchant accounts',
                    'AWS infrastructure: Lambda, SQS, RDS integration patterns',
                    'Built on CardFlight foundation: Applied payment processor expertise from CardFlight era to new challenges',
                    'Note: PaymentSpring founders Bryan Thompson and Jesse Angel were CardFlight colleagues during 2016-2019'
                ]
            },
            {
                title: 'Rubber Ducky - AI-Powered Development Assistant',
                type: 'Full-Stack TypeScript + Production LLM Integration',
                achievements: [
                    'Built with extensive use of Claude Code for agentic development workflows',
                    'Production Claude API integration: Streaming LLM responses, systematic evaluation frameworks, real-time AI features',
                    'TypeScript/Next.js/Express.js: Modern full-stack patterns demonstrating adaptability beyond Rails',
                    'PostgreSQL backend: Schema design for conversation history, user management, AI context storage',
                    'Demonstrates modern capabilities: Greenfield TypeScript + LLM integration shows growth beyond core Rails expertise'
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