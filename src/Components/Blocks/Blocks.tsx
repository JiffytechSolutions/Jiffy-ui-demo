import React, { useState } from 'react';
import { TextStyle, Button, Card, FlexLayout, Grid } from 'jiffy-ui';
import { ArrowRight, Copy, ExternalLink, Layout, Users, Globe, Smartphone } from 'jiffy-icons';
import { Link } from 'react-router-dom';

const Blocks = () => {
    const [copiedCode, setCopiedCode] = useState('');

    const blockCategories = [
        {
            name: 'Hero Sections',
            description: 'Eye-catching hero sections to grab attention',
            icon: <Layout size={24} />,
            blocks: [
                {
                    name: 'Modern Hero',
                    description: 'Clean hero section with call-to-action',
                    preview: 'A modern hero section with gradient background',
                    code: `<section className="hero-section">
  <div className="hero-content">
    <h1>Build faster with Jiffy UI</h1>
    <p>Beautiful components for modern React apps</p>
    <Button color="Primary">Get Started</Button>
  </div>
</section>`
                },
                {
                    name: 'Split Hero',
                    description: 'Hero with content on left, image on right',
                    preview: 'Split layout hero section',
                    code: `<section className="split-hero">
  <div className="hero-text">
    <h1>Your heading here</h1>
    <p>Your description here</p>
  </div>
  <div className="hero-image">
    <img src="hero.jpg" alt="Hero" />
  </div>
</section>`
                }
            ]
        },
        {
            name: 'Navigation',
            description: 'Navigation bars and menus',
            icon: <Globe size={24} />,
            blocks: [
                {
                    name: 'Header with Search',
                    description: 'Navigation header with integrated search',
                    preview: 'Professional header with search functionality',
                    code: `<header className="navbar">
  <div className="nav-brand">
    <TextStyle as="span" type="LgHeading">Brand</TextStyle>
  </div>
  <nav className="nav-links">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <div className="nav-search">
    <input type="text" placeholder="Search..." />
  </div>
</header>`
                },
                {
                    name: 'Sidebar Navigation',
                    description: 'Collapsible sidebar for admin panels',
                    preview: 'Modern sidebar navigation',
                    code: `<aside className="sidebar">
  <div className="sidebar-header">
    <TextStyle as="h3" type="MdHeading">Menu</TextStyle>
  </div>
  <nav className="sidebar-nav">
    <a href="/dashboard">Dashboard</a>
    <a href="/users">Users</a>
    <a href="/settings">Settings</a>
  </nav>
</aside>`
                }
            ]
        },
        {
            name: 'Content Sections',
            description: 'Reusable content blocks and layouts',
            
            blocks: [
                {
                    name: 'Feature Grid',
                    description: 'Grid of features with icons',
                    preview: 'Feature showcase in grid layout',
                    code: `<section className="features">
  <Grid columns={{ lg: 3 }}>
    <Card>
      <div className="feature-icon">🚀</div>
      <TextStyle as="h3" type="MdHeading">Fast</TextStyle>
      <TextStyle as="p" type="MdBody">Lightning fast performance</TextStyle>
    </Card>
    {/* More feature cards */}
  </Grid>
</section>`
                },
                {
                    name: 'Testimonials',
                    description: 'Customer testimonial carousel',
                    preview: 'Testimonial cards with ratings',
                    code: `<section className="testimonials">
  <FlexLayout direction="column" gap={4}>
    <Card>
      <TextStyle as="p" type="LgBody">"Amazing product!"</TextStyle>
      <div className="testimonial-author">
        <TextStyle as="span" type="MdBody">John Doe</TextStyle>
        <TextStyle as="span" type="SmBody">CEO, Company</TextStyle>
      </div>
    </Card>
  </FlexLayout>
</section>`
                }
            ]
        },
        {
            name: 'Forms',
            description: 'Complete form layouts and components',
            icon: <Users size={24} />,
            blocks: [
                {
                    name: 'Contact Form',
                    description: 'Professional contact form',
                    preview: 'Contact form with validation',
                    code: `<form className="contact-form">
  <FlexLayout direction="column" gap={4}>
    <TextField label="Name" placeholder="Your name" />
    <TextField label="Email" type="email" placeholder="your@email.com" />
    <TextArea label="Message" placeholder="Your message" />
    <Button color="Primary" type="submit">Send Message</Button>
  </FlexLayout>
</form>`
                },
                {
                    name: 'Login Form',
                    description: 'Simple login form with social options',
                    preview: 'Login form with social login',
                    code: `<Card className="login-card">
  <TextStyle as="h2" type="XlHeading">Sign In</TextStyle>
  <form>
    <TextField label="Email" type="email" />
    <TextField label="Password" type="password" />
    <Checkbox label="Remember me" />
    <Button color="Primary" fullWidth>Sign In</Button>
  </form>
</Card>`
                }
            ]
        },
        {
            name: 'Dashboards',
            description: 'Dashboard layouts and widgets',
           
            blocks: [
                {
                    name: 'Analytics Dashboard',
                    description: 'Complete analytics dashboard layout',
                    preview: 'Dashboard with stats and charts',
                    code: `<div className="dashboard">
  <Grid columns={{ lg: 4 }}>
    <Card>
      <TextStyle as="h3" type="LgHeading">1,234</TextStyle>
      <TextStyle as="p" type="MdBody">Total Users</TextStyle>
    </Card>
    {/* More stat cards */}
  </Grid>
  <div className="dashboard-content">
    {/* Charts and tables */}
  </div>
</div>`
                },
                {
                    name: 'Settings Panel',
                    description: 'Settings page with organized sections',
                    preview: 'Settings panel with tabs',
                    code: `<div className="settings-panel">
  <Tabs>
    <Tab label="General">
      <FlexLayout direction="column" gap={4}>
        <TextField label="Company Name" />
        <Switcher label="Enable notifications" />
      </FlexLayout>
    </Tab>
  </Tabs>
</div>`
                }
            ]
        },
        {
            name: 'Mobile',
            description: 'Mobile-optimized layouts and components',
            icon: <Smartphone size={24} />,
            blocks: [
                {
                    name: 'Mobile Navigation',
                    description: 'Bottom navigation for mobile apps',
                    preview: 'Mobile bottom navigation bar',
                    code: `<nav className="mobile-nav">
  <a href="/home" className="nav-item">
    <Home size={20} />
    <span>Home</span>
  </a>
  <a href="/search" className="nav-item">
    <Search size={20} />
    <span>Search</span>
  </a>
  <a href="/profile" className="nav-item">
    <User size={20} />
    <span>Profile</span>
  </a>
</nav>`
                },
                {
                    name: 'Mobile Card Stack',
                    description: 'Swipeable card stack for mobile',
                    preview: 'Mobile-optimized card layout',
                    code: `<div className="mobile-cards">
  <Card className="mobile-card">
    <div className="card-header">
      <TextStyle as="h3" type="MdHeading">Card Title</TextStyle>
    </div>
    <div className="card-content">
      <TextStyle as="p" type="MdBody">Card content here</TextStyle>
    </div>
  </Card>
</div>`
                }
            ]
        }
    ];

    const copyToClipboard = (code: string, blockId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(blockId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

    return (
        <div className="blocks-page">
            <div className="page-container">
                {/* Header */}
                <div className="page-header">
                    <FlexLayout direction="column" gap={4}>
                        <div>
                            <TextStyle as="h1" type="2XlHeading">
                                UI Blocks
                            </TextStyle>
                            <TextStyle as="p" type="LgBody" textColor="Secondary">
                                Copy-paste ready UI blocks and sections built with Jiffy UI components.
                                Perfect for rapid prototyping and building production-ready interfaces.
                            </TextStyle>
                        </div>
                        
                        <FlexLayout gap={3}>
                            <Link to="/pannel">
                                <Button variant="Secondary" alignIcon="Left">
                                    View Components
                                </Button>
                            </Link>
                            <a 
                                href="https://github.com/jiffytechsolutions/JiffyDemo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Button variant="Tertiary" icon={<ExternalLink size={16} />} alignIcon="Right">
                                    GitHub
                                </Button>
                            </a>
                        </FlexLayout>
                    </FlexLayout>
                </div>

                {/* Categories */}
                <div className="blocks-content">
                    <FlexLayout direction="column" gap={3}>
                        {blockCategories.map((category, categoryIndex) => (
                            <section key={categoryIndex} className="block-category">
                                <FlexLayout direction="column" gap={4}>
                                    <div className="category-header">
                                        <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                                            <div className="category-icon">
                                                {category.icon}
                                            </div>
                                            <div>
                                                <TextStyle as="h2" type="XlHeading">
                                                    {category.name}
                                                </TextStyle>
                                                <TextStyle as="p" type="MdBody" textColor="Secondary">
                                                    {category.description}
                                                </TextStyle>
                                            </div>
                                        </FlexLayout>
                                    </div>

                                    <Grid columns={{ lg: 2, md: 1 }} gap={{ lg: "24px" }}>
                                        {category.blocks.map((block, blockIndex) => (
                                            <Card key={blockIndex} variant="outlined" className="block-card">
                                                <FlexLayout direction="column" gap={4}>
                                                    <div className="block-header">
                                                        <TextStyle as="h3" type="LgHeading">
                                                            {block.name}
                                                        </TextStyle>
                                                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                                                            {block.description}
                                                        </TextStyle>
                                                    </div>

                                                    <div className="block-preview">
                                                        <div className="preview-placeholder">
                                                            <TextStyle as="p" type="SmBody" textColor="Secondary">
                                                                {block.preview}
                                                            </TextStyle>
                                                        </div>
                                                    </div>

                                                    <div className="block-code">
                                                        <div className="code-header">
                                                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                                                React/TSX
                                                            </TextStyle>
                                                            <Button
                                                                variant="Tertiary"
                                                                size="Small"
                                                                icon={copiedCode === `${categoryIndex}-${blockIndex}` ? 
                                                                    <span>✓</span> : <Copy size={14} />}
                                                                onClick={() => copyToClipboard(block.code, `${categoryIndex}-${blockIndex}`)}
                                                            >
                                                                {copiedCode === `${categoryIndex}-${blockIndex}` ? 'Copied!' : 'Copy'}
                                                            </Button>
                                                        </div>
                                                        <pre className="code-block">
                                                            <code>{block.code}</code>
                                                        </pre>
                                                    </div>
                                                </FlexLayout>
                                            </Card>
                                        ))}
                                    </Grid>
                                </FlexLayout>
                            </section>
                        ))}
                    </FlexLayout>
                </div>

                {/* Call to Action */}
                <div className="blocks-cta">
                    <Card variant="outlined" className="cta-card">
                        <FlexLayout direction="column" gap={4} blockAlign={{ lg: "center" }}>
                            <div className="cta-content">
                                <TextStyle as="h3" type="XlHeading">
                                    Need a custom block?
                                </TextStyle>
                                <TextStyle as="p" type="MdBody" textColor="Secondary">
                                    Can't find what you're looking for? Check out our component library 
                                    and build your own custom blocks.
                                </TextStyle>
                            </div>
                            <FlexLayout gap={3}>
                                <Link to="/pannel">
                                    <Button color="Primary" icon={<ArrowRight size={16} />} alignIcon="Right">
                                        Browse Components
                                    </Button>
                                </Link>
                                <Link to="/docs">
                                    <Button variant="Secondary">
                                        Read Documentation
                                    </Button>
                                </Link>
                            </FlexLayout>
                        </FlexLayout>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blocks;
