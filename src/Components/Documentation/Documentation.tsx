import React, { useState, useEffect } from 'react';
import { TextStyle, Button, Card, FlexLayout, VerticalStack, InlineStack } from 'jiffy-ui';
import { ArrowRight, Copy, ExternalLink, ChevronDown, ChevronRight, Bookmark, Hithub } from 'jiffy-icons';
import { Link } from 'react-router-dom';

const Documentation = () => {
    const [copiedCode, setCopiedCode] = useState('');
    const [activeSection, setActiveSection] = useState('introduction');
    const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

    const sidebarSections = [
        {
            title: 'Getting Started',
            items: [
                { title: 'Introduction', href: '#introduction' },
                { title: 'Installation', href: '#installation' },
                { title: 'Configuration', href: '#configuration' },
            ]
        },
        {
            title: 'Example',
            items: [
                { title: 'Button', href: '#button' },
            ]
        },
    ];

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'installation', 'configuration', 'button'];
            const scrollY = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const copyToClipboard = (code: string, codeId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(codeId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

    const toggleSection = (sectionTitle: string) => {
        setCollapsedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const filteredSections = sidebarSections;

    const CodeBlock = ({ code, language = 'bash', id }: { code: string; language?: string; id: string }) => (
        <div className='code-block-container'>
            <div className='code-block-header'>
                <span className='code-language'>{language}</span>
                <button 
                    className='copy-code-btn'
                    onClick={() => copyToClipboard(code, id)}
                >
                    {copiedCode === id ? '✓' : <Copy size={14} />}
                </button>
            </div>
            <pre className='code-block'>
                <code>{code}</code>
            </pre>
        </div>
    );

    return (
        <div className='docs-layout'>
            {/* Sidebar */}
            <aside className='docs-sidebar'>
                <div className='docs-sidebar-content'>
                    <FlexLayout direction='column' gap={5}>

                        {/* Collapsible Navigation Sections */}
                        {filteredSections.map((section, index) => (
                            <div key={index} className='sidebar-section'>
                                <div 
                                    className='sidebar-section-header'
                                    onClick={() => toggleSection(section.title)}
                                >
                                    <TextStyle as='h4' size='md'  fontWeight='semibold'>
                                        {section.title}
                                    </TextStyle>
                                    {collapsedSections[section.title] ? 
                                        <ChevronRight size={16} /> : 
                                        <ChevronDown size={16} />
                                    }
                                </div>
                                
                                {!collapsedSections[section.title] && (
                                    <VerticalStack gap={4} className='sidebar-items'>
                                        {section.items.map((item, itemIndex) => (
                                            <button
                                                key={itemIndex}
                                                onClick={() => scrollToSection(item.href.replace('#', ''))}
                                                className={`sidebar-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                                            >
                                                <TextStyle as='span' type='MdBody'>
                                                    {item.title}
                                                </TextStyle>
                                                {activeSection === item.href.replace('#', '') && (
                                                    <Bookmark size={12} />
                                                )}
                                            </button>
                                        ))}
                                    </VerticalStack>
                                )}
                            </div>
                        ))}
                        
                        {/* Quick Actions */}
                        <div className='sidebar-quick-actions'>
                            <Card variant='outlined' className='quick-actions-card'>
                                <VerticalStack  gap={3}>
                                    <TextStyle as='h5' type='SmHeading' fontWeight='semibold'>Quick Actions</TextStyle>
                                    <VerticalStack  gap={2}>
                                        <Button 
                                            isFullWidth
                                            variant='Tertiary' 
                                            size='Small'
                                            icon={<Hithub size={14} />}
                                            alignIcon='Left'
                                            onClick={() => window.open('https://github.com/jiffytechsolutions/JiffyDemo', '_blank')}
                                        >
                                            View on GitHub
                                        </Button>
                                        <Button 
                                        isFullWidth
                                            variant='Tertiary' 
                                            size='Small'
                                            icon={<ExternalLink size={14} />}
                                            alignIcon='Left'
                                        >
                                            <Link to="/pannel">Components</Link>
                                        </Button>
                                    </VerticalStack>
                                </VerticalStack>
                            </Card>
                        </div>
                    </FlexLayout>
                </div>
            </aside>

            {/* Main Content */}
            <main className='docs-main'>
                <div className='docs-content'>
                    <VerticalStack  gap={4}>
                        {/* Introduction Section */}
                        <section id="introduction" className='docs-section'>
                            <VerticalStack gap={4}>
                                <div className='docs-header'>
                                    <TextStyle as='h1' size='2xl' fontWeight='bold'>
                                        Documentation
                                    </TextStyle>
                                    <TextStyle as='p'size="md" tone='subdued'>
                                        Learn how to build beautiful React applications with Jiffy UI components.
                                        Copy, paste, and customize components to fit your design needs.
                                    </TextStyle>
                                </div>

                                <Card variant='outlined'>
                                    <VerticalStack direction='column' gap={4}>
                                        <TextStyle as='h3' size='lg' fontWeight='semibold'>
                                            🚀 What is Jiffy UI?
                                        </TextStyle>
                                        <TextStyle as='p'size="md" tone='subdued'>
                                            Jiffy UI is a modern React component library built with TypeScript and styled with TailwindCSS. 
                                            It provides beautifully designed, accessible, and customizable components that you can copy and paste 
                                            into your applications.
                                        </TextStyle>
                                        <InlineStack gap={4} alignItems='center'>
                                            <InlineStack gap={4} alignItems='center'>
                                                <div className='feature-icon'>🎨</div>
                                                <VerticalStack gap={2}>
                                                    <TextStyle as='h5' variant='heading' size='sm' fontWeight='semibold'>Beautiful Design</TextStyle>
                                                    <TextStyle as='p' size='md' tone='subdued'>
                                                        Carefully crafted components with attention to detail
                                                    </TextStyle>
                                                </VerticalStack>
                                            </InlineStack>
                                           <InlineStack gap={4} alignItems='center'>
                                                <div className='feature-icon'>♿</div>
                                                <VerticalStack gap={2}>
                                                    <TextStyle as='h5' variant='heading' size='sm' fontWeight='semibold'>Accessible</TextStyle>
                                                    <TextStyle as='p' size='md' tone='subdued'>
                                                        Built with accessibility best practices in mind
                                                    </TextStyle>
                                                </VerticalStack>
                                            </InlineStack>
                                            <InlineStack gap={4} alignItems='center'>
                                                <div className='feature-icon'>📱</div>
                                                <VerticalStack gap={2}>
                                                     <TextStyle as='h5' variant='heading' size='sm' fontWeight='semibold'>Responsive</TextStyle>
                                                    <TextStyle as='p' size='md' tone='subdued'>
                                                        Mobile-first design that works on all devices
                                                    </TextStyle>
                                                </VerticalStack>
                                            </InlineStack>
                                            <InlineStack gap={4} alignItems='center'>
                                                <div className='feature-icon'>⚡</div>
                                                <VerticalStack gap={2}>
                                                     <TextStyle as='h5' variant='heading' size='sm' fontWeight='semibold'>Performance</TextStyle>
                                                    <TextStyle as='p' size='md' tone='subdued'>
                                                        Optimized for speed and bundle size
                                                    </TextStyle>
                                                </VerticalStack>
                                            </InlineStack>
                                        </InlineStack>
                                    </VerticalStack>
                                </Card>
                            </VerticalStack>
                        </section>

                        {/* Installation Section */}
                        <section id="installation" className='docs-section'>
                            <VerticalStack  gap={5} align={'stretch'}>
                                <VerticalStack gap={3} align={'stretch'}>
                                    <VerticalStack gap={1}>
                                        <TextStyle as='h2' size='lg' fontWeight='bold'>
                                            Installation
                                        </TextStyle>
                                        <TextStyle as='p' size='md' tone='subdued'>
                                            Get started with Jiffy UI in your React project in just a few steps.
                                        </TextStyle>
                                    </VerticalStack>

                                    <VerticalStack gap={2} align={'stretch'}>
                                        <CodeBlock 
                                            code="npm install jiffy-ui jiffy-icons"
                                            id="install-npm"
                                        />

                                        <CodeBlock 
                                            code="yarn add jiffy-ui jiffy-icons"
                                            id="install-yarn"
                                        />

                                        <CodeBlock 
                                            code="pnpm add jiffy-ui jiffy-icons"
                                            id="install-pnpm"
                                        />
                                    </VerticalStack>
                                </VerticalStack>

                                <VerticalStack direction='column' gap={3} align={'stretch'}>
                                    <VerticalStack gap={1}>
                                        <TextStyle as='h3' size='lg' fontWeight='bold'>
                                            Import and use components
                                        </TextStyle>
                                        <TextStyle as='p' size='md' tone='subdued'>
                                            Import components into your React application:
                                        </TextStyle>
                                    </VerticalStack>

                                    <CodeBlock 
                                        language="tsx"
                                        code={`import { Button, Card, TextStyle } from 'jiffy-ui';
                                                    import { ArrowRight, Heart } from 'jiffy-icons';

                                                    function App() {
                                                    return (
                                                        <Card type="Borderd" headerTitle="Welcome">
                                                        <TextStyle as="h2" type="LgHeading">
                                                            Hello Jiffy UI!
                                                        </TextStyle>
                                                        <Button 
                                                            color="Primary" 
                                                            icon={<ArrowRight size={16} />}
                                                            alignIcon="Right"
                                                        >
                                                            Get Started
                                                        </Button>
                                                        </Card>
                                                    );
                                                    }`}
                                        id="usage-example"
                                    />
                                </VerticalStack>
                            </VerticalStack>
                        </section>

                        {/* Configuration Section */}
                        <section id="configuration" className='docs-section'>
                            <VerticalStack  gap={3} align={'stretch'}>
                                <VerticalStack gap={1}>
                                    <TextStyle as='h2' size='lg' fontWeight='bold'>
                                        Configuration
                                    </TextStyle>
                                    <TextStyle as='p' size='md' tone='subdued'>
                                        Configure Jiffy UI to match your project's design system.
                                    </TextStyle>
                                </VerticalStack> 
                                <CodeBlock 
                                    language="json"
                                    code={`
                                        module.exports = {
                                        content: [
                                            "./src/**/*.{js,jsx,ts,tsx}",
                                            "./node_modules/jiffy-ui/**/*.js"
                                        ],
                                        theme: {
                                            extend: {
                                            colors: {
                                                primary: {
                                                50: '#f0f7ff',
                                                500: '#305EFF',
                                                600: '#2451E5',
                                                }
                                            }
                                            },
                                        },
                                        plugins: [],
                                        }`}
                                    id="tailwind-config"
                                />
                            </VerticalStack>
                        </section>

                        {/* Component Examples */}
                        <section id="button" className='docs-section'>
                            <VerticalStack gap={5} align={'stretch'}>
                                <VerticalStack gap={1} align={'stretch'}>
                                    <TextStyle as='h2' size='lg' fontWeight='bold'>
                                        Button Component
                                    </TextStyle>
                                    <TextStyle as='p' size='md' tone='subdued'>
                                        Buttons trigger actions and events, such as submitting forms or navigating to other pages.
                                    </TextStyle>
                                </VerticalStack>

                                
                                <VerticalStack  gap={4} align={'stretch'}>
                                    <VerticalStack gap={3} align={'stretch'}>
                                        <TextStyle as='h3' variant='heading' size='sm'>
                                            Basic Usage
                                        </TextStyle>
                                        <VerticalStack gap={2} align={'stretch'}>
                                            <InlineStack gap={3}>
                                                <Button color='Primary'>Primary</Button>
                                                <Button variant='Secondary'>Secondary</Button>
                                                <Button variant='Tertiary'>Tertiary</Button>
                                            </InlineStack>
                                            
                                            <CodeBlock 
                                                
                                                language="tsx"
                                                code={`<Button color="Primary">Primary</Button>
    <Button variant="Secondry">Secondary</Button>
    <Button variant="Tertiary">Tertiary</Button>`}
                                                id="button-basic"
                                            />
                                        </VerticalStack>
                                    </VerticalStack>
                                    <VerticalStack gap={3} align={'stretch'}>
                                        <TextStyle as='h3' variant='heading'  size='sm' fontWeight='semibold'>
                                            With Icons
                                        </TextStyle>
                                        <VerticalStack gap={2} align={'stretch'}>
                                            
                                                <InlineStack gap={2}>
                                                    <Button 
                                                        color='Primary' 
                                                        // icon={<ArrowRight size={16} />}
                                                        //  alignIcon='Right'
                                                        suffixIcon={<ArrowRight size={16} />}>
                                                        Next
                                                    </Button>
                                                    <Button 
                                                        variant='Secondary'
                                                        // icon={<ExternalLink size={16} />}
                                                        suffixIcon={<ExternalLink size={16} />}
                                                        //  alignIcon='Left'
                                                    >
                                                        External
                                                    </Button>
                                                </InlineStack>
                                                <CodeBlock 
                                                    language="tsx"
                                                    code={`<Button 
        color="Primary" 
        icon={<ArrowRight size={16} />}
        alignIcon="Right"
        >
        Next
        </Button>`}
                                                    id="button-icons"
                                                />

                                        
                                        </VerticalStack>
                                    </VerticalStack>

                                </VerticalStack>
                               
                            </VerticalStack>
                        </section>

                        {/* Quick Links */}
                        <section className='docs-section'>
                            <Card variant='outlined'>
                                <VerticalStack gap={3}>
                                    <TextStyle as='h3' size='lg' variant='heading' fontWeight='semibold'>
                                        Ready to explore more?
                                    </TextStyle>
                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                        Check out our component playground and examples to see Jiffy UI in action.
                                    </TextStyle>
                                    <InlineStack gap={3}>
                                        <Link to="/pannel">
                                            <Button color='Primary' icon={<ArrowRight size={16} />} alignIcon='Right'>
                                                View Components
                                            </Button>
                                        </Link>
                                        <a 
                                            href="https://github.com/jiffytechsolutions/JiffyDemo" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant='Secondary' icon={<ExternalLink size={16} />} alignIcon='Right'>
                                                GitHub
                                            </Button>
                                        </a>
                                    </InlineStack>
                                </VerticalStack>
                            </Card>
                        </section>
                    </VerticalStack>
                </div>
            </main>

            {/* Interactive Table of Contents */}
            <aside className='docs-toc'>
                <div className='toc-content'>
                    {/* <TextStyle as='h4' type='MdHeading'>
                        On this page
                    </TextStyle> */}
                    <FlexLayout direction='column' gap={2}>
                        {['introduction', 'installation', 'configuration', 'button'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`toc-link ${activeSection === section ? 'active' : ''}`}
                            >
                                <div className='toc-link-content'>
                                    <span className='toc-bullet'></span>
                                    <TextStyle as='span' type='SmBody'>
                                        {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </TextStyle>
                                </div>
                            </button>
                        ))}
                    </FlexLayout>
                    
                    {/* Progress Indicator */}
                    <div className='reading-progress'>
                        <div className='progress-bar'>
                            <div 
                                className='progress-fill' 
                                style={{ 
                                    width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
                                }}
                            ></div>
                        </div>
                            {/* <TextStyle as='span' type='XsBody' textColor='Secondary'>
                                Reading Progress
                            </TextStyle> */}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Documentation;