# Hero A/B Testing System

## Overview
Your portfolio now includes an A/B testing system for hero messages, allowing you to tailor your presentation for different job applications and opportunities.

## Available Variants

### 1. AI-Focused (Default)
- **URL**: `?variant=ai-focused` 
- **Title**: "AI-Focused Software Engineer"
- **Hero Image**: Advanced AI development tools and automation
- **Best for**: AI/ML companies, Claude Code roles, modern tech startups
- **Focus**: AI tooling, intelligent systems, rapid development

### 2. Rails Backend
- **URL**: `?variant=rails-backend`
- **Title**: "Senior Rails Engineer" 
- **Hero Image**: Backend architecture and system design focus
- **Best for**: Ruby shops, backend-focused roles, API-heavy positions
- **Focus**: Backend architecture, database optimization, API design

### 3. Technical Lead
- **URL**: `?variant=tech-lead`
- **Title**: "Technical Lead & Founder"
- **Hero Image**: Leadership and team building theme
- **Best for**: Leadership roles, CTO positions, startup opportunities
- **Focus**: Team leadership, product strategy, technical vision

### 4. Full-Stack
- **URL**: `?variant=fullstack`
- **Title**: "Full-Stack Engineer"
- **Hero Image**: End-to-end development and deployment
- **Best for**: Full-stack roles, smaller teams, end-to-end development
- **Focus**: Complete application development, modern frameworks, deployment

### 5. Enterprise Fintech
- **URL**: `?variant=enterprise-fintech`
- **Title**: "Enterprise Fintech Engineer"
- **Hero Image**: Security, compliance, and enterprise systems
- **Best for**: Financial companies, enterprise roles, compliance-focused positions  
- **Focus**: Payment processing, financial compliance, enterprise scale

## Usage Instructions

### For Job Applications
1. **Copy the appropriate variant URL** based on the role type
2. **Use in applications**: Include the tailored URL in your applications
3. **Track performance**: Analytics automatically tracks which variants get the most engagement

### Testing Variants
- **Admin Mode**: Add `?admin=true` to see a control panel for testing all variants
- **Example**: `https://yoursite.com/?admin=true`
- **Switch variants live** without page reloads

### Analytics Integration
- All variant views are tracked in Google Analytics
- Event: `hero_variant_view`
- Category: `A/B_Test`
- View performance in GA4 dashboard

## Variant URLs

```
Base URL: https://son1112.github.io/career-portfolio-site/

AI-Focused:        ?variant=ai-focused
Rails Backend:     ?variant=rails-backend  
Technical Lead:    ?variant=tech-lead
Full-Stack:        ?variant=fullstack
Enterprise:        ?variant=enterprise-fintech
```

## Customization

To add new variants or modify existing ones, edit the `heroVariants` object in `script.js`:

```javascript
const heroVariants = {
    'new-variant': {
        title: 'Your Title',
        subtitle: 'Your subtitle',
        taglines: ['Tag 1', 'Tag 2', 'Tag 3'],
        cta1: 'Primary CTA',
        cta2: 'Secondary CTA', 
        bio: 'Bio text for profile section'
    }
};
```

## Best Practices

1. **Match the role**: Use the variant that best aligns with the specific position
2. **Test performance**: Monitor which variants generate more responses
3. **Keep messaging consistent**: Ensure all variants reflect your actual experience
4. **Update regularly**: Refresh variants based on your evolving expertise

## Technical Details

- **No page reload**: Variants switch dynamically with JavaScript
- **Smooth transitions**: Hero images fade between variants with smooth 0.5s transitions
- **WebP optimization**: All hero images support modern WebP format with PNG fallbacks
- **SEO friendly**: Default variant loads first, variants applied client-side
- **Mobile responsive**: All variants work across devices
- **Analytics integrated**: Automatic tracking of variant performance
- **Image preloading**: Hero images preload for instant switching