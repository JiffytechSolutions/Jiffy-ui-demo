import React, { useState } from 'react';
import { TextStyle, Button, Card, FlexLayout } from 'jiffy-ui';
import { ArrowRight, Copy, ExternalLink } from 'jiffy-icons';
import { Link } from 'react-router-dom';

const Documentation = () => {
    const [copiedCode, setCopiedCode] = useState('');

    const sidebarSections = [
        {
            title: 'Getting Started',
            items: [
                { title: 'Introduction', href: '#introduction' },
                { title: 'Installation', href: '#installation' },
                { title: 'Configuration', href: '#configuration' },
                { title: 'Theming', href: '#theming' }
            ]
        },
        {
            title: 'Components',
            items: [
                { title: 'Button', href: '#button' },
                { title: 'Card', href: '#card' },
                { title: 'Input', href: '#input' },
                { title: 'Modal', href: '#modal' },
                { title: 'Table', href: '#table' }
            ]
        },
        {
            title: 'Layout',
            items: [
                { title: 'Grid', href: '#grid' },
                { title: 'Flex', href: '#flex' },
                { title: 'Container', href: '#container' }
            ]
        }
    ];

    const copyToClipboard = (code: string, codeId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(codeId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

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
                        <div className='docs-search-mobile'>
                            {/* Search placeholder for mobile */}
                        </div>
                        
                        {sidebarSections.map((section, index) => (
                            <div key={index} className='sidebar-section'>
                                <TextStyle as='h4' type='MdHeading'>
                                    {section.title}
                                </TextStyle>
                                <FlexLayout direction='column' gap={4}>
                                    {section.items.map((item, itemIndex) => (
                                        <a 
                                            key={itemIndex}
                                            href={item.href}
                                            className='sidebar-link'
                                        >
                                            <TextStyle as='span' type='MdBody'>
                                                {item.title}
                                            </TextStyle>
                                        </a>
                                    ))}
                                </FlexLayout>
                            </div>
                        ))}
                    </FlexLayout>
                </div>
            </aside>

            {/* Main Content */}
            <main className='docs-main'>
                <div className='docs-content'>
                    <FlexLayout direction='column' gap={4}>
                        {/* Introduction Section */}
                        <section id="introduction" className='docs-section'>
                            <FlexLayout direction='column' gap={4}>
                                <div className='docs-header'>
                                    <TextStyle as='h1' type='2XlHeading'>
                                        Documentation
                                    </TextStyle>
                                    <TextStyle as='p' type='LgBody' textColor='Secondary'>
                                        Learn how to build beautiful React applications with Jiffy UI components.
                                        Copy, paste, and customize components to fit your design needs.
                                    </TextStyle>
                                </div>

                                <Card variant='outlined'>
                                    <FlexLayout direction='column' gap={3}>
                                        <TextStyle as='h3' type='LgHeading'>
                                            🚀 What is Jiffy UI?
                                        </TextStyle>
                                        <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                            Jiffy UI is a modern React component library built with TypeScript and styled with TailwindCSS. 
                                            It provides beautifully designed, accessible, and customizable components that you can copy and paste 
                                            into your applications.
                                        </TextStyle>
                                        <div className='feature-grid'>
                                            <div className='feature-item'>
                                                <div className='feature-icon'>🎨</div>
                                                <div>
                                                    <TextStyle as='h5' type='MdHeading'>Beautiful Design</TextStyle>
                                                    <TextStyle as='p' type='SmBody' textColor='Secondary'>
                                                        Carefully crafted components with attention to detail
                                                    </TextStyle>
                                                </div>
                                            </div>
                                            <div className='feature-item'>
                                                <div className='feature-icon'>♿</div>
                                                <div>
                                                    <TextStyle as='h5' type='MdHeading'>Accessible</TextStyle>
                                                    <TextStyle as='p' type='SmBody' textColor='Secondary'>
                                                        Built with accessibility best practices in mind
                                                    </TextStyle>
                                                </div>
                                            </div>
                                            <div className='feature-item'>
                                                <div className='feature-icon'>📱</div>
                                                <div>
                                                    <TextStyle as='h5' type='MdHeading'>Responsive</TextStyle>
                                                    <TextStyle as='p' type='SmBody' textColor='Secondary'>
                                                        Mobile-first design that works on all devices
                                                    </TextStyle>
                                                </div>
                                            </div>
                                            <div className='feature-item'>
                                                <div className='feature-icon'>⚡</div>
                                                <div>
                                                    <TextStyle as='h5' type='MdHeading'>Performance</TextStyle>
                                                    <TextStyle as='p' type='SmBody' textColor='Secondary'>
                                                        Optimized for speed and bundle size
                                                    </TextStyle>
                                                </div>
                                            </div>
                                        </div>
                                    </FlexLayout>
                                </Card>
                            </FlexLayout>
                        </section>

                        {/* Installation Section */}
                        <section id="installation" className='docs-section'>
                            <FlexLayout direction='column' gap={4}>
                                <div>
                                    <TextStyle as='h2' type='XlHeading'>
                                        Installation
                                    </TextStyle>
                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                        Get started with Jiffy UI in your React project in just a few steps.
                                    </TextStyle>
                                </div>

                                <FlexLayout direction='column' gap={4}>
                                    <div>
                                        <TextStyle as='h3' type='LgHeading'>
                                            Install the packages
                                        </TextStyle>
                                        <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                            Install Jiffy UI and Jiffy Icons using your preferred package manager:
                                        </TextStyle>
                                    </div>

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
                                </FlexLayout>

                                <FlexLayout direction='column' gap={4}>
                                    <div>
                                        <TextStyle as='h3' type='LgHeading'>
                                            Import and use components
                                        </TextStyle>
                                        <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                            Import components into your React application:
                                        </TextStyle>
                                    </div>

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
                                </FlexLayout>
                            </FlexLayout>
                        </section>

                        {/* Configuration Section */}
                        <section id="configuration" className='docs-section'>
                            <FlexLayout direction='column' gap={4}>
                                <div>
                                    <TextStyle as='h2' type='XlHeading'>
                                        Configuration
                                    </TextStyle>
                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                        Configure Jiffy UI to match your project's design system.
                                    </TextStyle>
                                </div>

                                <Card variant='outlined'>
                                    <FlexLayout direction='column' gap={3}>
                                        <TextStyle as='h3' type='LgHeading'>
                                            TailwindCSS Integration
                                        </TextStyle>
                                        <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                            Jiffy UI is built on top of TailwindCSS. Make sure you have TailwindCSS configured in your project:
                                        </TextStyle>
                                        
                                        <CodeBlock 
                                            language="json"
                                            code={`// tailwind.config.js
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
                                    </FlexLayout>
                                </Card>
                            </FlexLayout>
                        </section>

                        {/* Component Examples */}
                        <section id="button" className='docs-section'>
                            <FlexLayout direction='column' gap={4}>
                                <div>
                                    <TextStyle as='h2' type='XlHeading'>
                                        Button Component
                                    </TextStyle>
                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                        Buttons trigger actions and events, such as submitting forms or navigating to other pages.
                                    </TextStyle>
                                </div>

                                <Card variant='outlined'>
                                    <FlexLayout direction='column' gap={3}>
                                        <TextStyle as='h3' type='LgHeading'>
                                            Basic Usage
                                        </TextStyle>
                                        
                                        <div className='component-preview'>
                                            <FlexLayout gap={2}>
                                                <Button color='Primary'>Primary</Button>
                                                <Button variant='Secondary'>Secondary</Button>
                                                <Button variant='Tertiary'>Tertiary</Button>
                                            </FlexLayout>
                                        </div>

                                        <CodeBlock 
                                            language="tsx"
                                            code={`<Button color="Primary">Primary</Button>
<Button variant="Secondry">Secondary</Button>
<Button variant="Tertiary">Tertiary</Button>`}
                                            id="button-basic"
                                        />

                                        <TextStyle as='h4' type='MdHeading'>
                                            With Icons
                                        </TextStyle>

                                        <div className='component-preview'>
                                            <FlexLayout gap={2}>
                                                <Button 
                                                    color='Primary' 
                                                    icon={<ArrowRight size={16} />}
                                                    alignIcon='Right'
                                                >
                                                    Next
                                                </Button>
                                                <Button 
                                                    variant='Secondary'
                                                    icon={<ExternalLink size={16} />}
                                                    alignIcon='Left'
                                                >
                                                    External
                                                </Button>
                                            </FlexLayout>
                                        </div>

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
                                    </FlexLayout>
                                </Card>
                            </FlexLayout>
                        </section>

                        {/* Quick Links */}
                        <section className='docs-section'>
                            <Card variant='outlined'>
                                <FlexLayout direction='column' gap={4}>
                                    <TextStyle as='h3' type='LgHeading'>
                                        Ready to explore more?
                                    </TextStyle>
                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                        Check out our component playground and examples to see Jiffy UI in action.
                                    </TextStyle>
                                    <FlexLayout gap={2}>
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
                                    </FlexLayout>
                                </FlexLayout>
                            </Card>
                        </section>
                    </FlexLayout>
                </div>
            </main>

            {/* Table of Contents */}
            <aside className='docs-toc'>
                <div className='toc-content'>
                    <TextStyle as='h4' type='MdHeading'>
                        On this page
                    </TextStyle>
                    <FlexLayout direction='column' gap={2}>
                        <a href="#introduction" className='toc-link'>Introduction</a>
                        <a href="#installation" className='toc-link'>Installation</a>
                        <a href="#configuration" className='toc-link'>Configuration</a>
                        <a href="#button" className='toc-link'>Button Component</a>
                    </FlexLayout>
                </div>
            </aside>
        </div>
    );
};

export default Documentation;