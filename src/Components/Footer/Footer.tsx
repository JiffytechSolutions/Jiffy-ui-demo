import React from 'react';
import { TextStyle, FlexLayout, VerticalStack, InlineStack } from 'jiffy-ui';
import { Hithub, ExternalLink, Heart, ArrowUp, Twitter, Instagram, Facebook } from 'jiffy-icons';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/uiLogo.png'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Hithub size={20} />,
            url: 'https://github.com/jiffytechsolutions',
            color: '#24292e'
        },
        {
            name: 'Twitter',
            icon: <Twitter size={20} />,
            url: 'https://twitter.com/jiffytech',
            color: '#1da1f2'
        },
        {
            name: 'LinkedIn',
            icon: <Instagram size={20} />,
            url: '#',
            color: '#0077b5'
        },
        {
            name: 'LinkedIn',
            icon: <Facebook size={20} />,
            url: '#',
            color: '#0077b5'
        }
    ];

    const footerLinks = [
        {
            title: 'Product',
            links: [
                { name: 'Components', to: '/pannel' },
                { name: 'Documentation', to: '/docs' },
                { name: 'Themes', to: '/themes' },
                { name: 'Colors', to: '/colors' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Getting Started', to: '/docs#installation' },
                { name: 'Examples', to: '/blocks' },
                { name: 'Charts', to: '/charts' },
                { name: 'GitHub', url: '#', external: true }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About', url: 'https://jiffytechsolutions.com/about', external: true },
                { name: 'Blog', url: 'https://jiffytechsolutions.com/blog', external: true },
                { name: 'Careers', url: 'https://jiffytechsolutions.com/careers', external: true },
                { name: 'Contact', url: 'https://jiffytechsolutions.com/contact', external: true }
            ]
        }
    ];

    return (
        <footer className="jiffy-footer">
            {/* Back to Top Button */}
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                <ArrowUp size={20} />
            </button>
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <div className="brand-content">
                                <Link to="/" className='brand-container'>
                                    {/* <div className='brand-logo'>
                                        <div className='logo-gradient'>
                                            <span className='logo-icon'>✨</span>
                                        </div>
                                        <div className='brand-text'>
                                            <TextStyle as='span' type='LgHeading' className='brand-name'>
                                                Jiffy
                                            </TextStyle>
                                            <span className='brand-accent'>UI</span>
                                        </div>
                                    </div> */}
                                    <img src={logo} alt='Jiffy UI' />
                                </Link>
                                <TextStyle as="p" type="MdBody" textColor="Secondary" className="brand-description">
                                    Beautiful, accessible React components that you can copy and paste into your applications. 
                                    Built with TypeScript and styled with TailwindCSS.
                                </TextStyle>
                            </div>

                            {/* Social Media Links */}
                            <div className="social-links">
                                <VerticalStack gap={3}>
                                    <TextStyle as="h5" variant='heading' size='md' fontWeight='semibold'  className="social-title">
                                        Follow us
                                    </TextStyle>
                                    <InlineStack gap={3} className="social-icons">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                                style={{ '--social-color': social.color } as React.CSSProperties}
                                                aria-label={`Follow us on ${social.name}`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </InlineStack>
                                </VerticalStack>
                            </div>
                        </div>

                        {/* Footer Links */}
                        {footerLinks.map((section) => (
                            <div key={section.title} className="footer-section">
                                <TextStyle as="h4" type="MdHeading" className="section-title">
                                    {section.title}
                                </TextStyle>
                                <FlexLayout direction="column" gap={3} className="section-links">
                                    {section.links.map((link) => (
                                        <div key={link.name} className="footer-link-item">
                                            {link.external ? (
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="footer-link external-link"
                                                >
                                                    <TextStyle as="span" type="SmBody">
                                                        {link.name}
                                                    </TextStyle>
                                                    <ExternalLink size={12}  />
                                                </a>
                                            ) : (
                                                <Link to={link.to || '/'} className="footer-link">
                                                    <TextStyle as="span" type="SmBody">
                                                        {link.name}
                                                    </TextStyle>
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </FlexLayout>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
             {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className='footer-container'> 
                    <div className="footer-bottom-content">
                        <FlexLayout 
                            direction="row" 
                            gap={2} 
                            alignItems="center" 
                            className="copyright-section"
                        >
                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                © {currentYear} Jiffy Tech Solutions. All rights reserved.
                            </TextStyle>
                        </FlexLayout>
                        <FlexLayout direction="row" gap={2} alignItems="center" className="made-with-love">
                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                Made with
                            </TextStyle>
                            <Heart size={14}  />
                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                by Jiffy Team
                            </TextStyle>
                        </FlexLayout>

                        {/* <FlexLayout direction="row" gap={4} className="legal-links">
                            <a href="/privacy" className="legal-link">
                                <TextStyle as="span" type="XsBody" textColor="Secondary">
                                    Privacy Policy
                                </TextStyle>
                            </a>
                            <a href="/terms" className="legal-link">
                                <TextStyle as="span" type="XsBody" textColor="Secondary">
                                    Terms of Service
                                </TextStyle>
                            </a>
                        </FlexLayout> */}
                    </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
