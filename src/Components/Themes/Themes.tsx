import React, { useState } from 'react';
import { TextStyle, Button, Card, FlexLayout, Grid, FlexLayoutItem } from 'jiffy-ui';
import { ArrowRight, Copy,  Sun, Moon, Monitor,  EyeOff } from 'jiffy-icons';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Themes = () => {
    const [copiedCode, setCopiedCode] = useState('');
    const { theme, toggleTheme } = useTheme();

    const themeVariants = [
        {
            name: 'Light Theme',
            description: 'Clean and minimal light theme perfect for productivity apps',
            icon: <Sun size={24} />,
            colors: {
                primary: '#305EFF',
                secondary: '#f8fafc',
                background: '#ffffff',
                surface: '#f1f5f9',
                text: '#0f172a',
                border: '#e2e8f0'
            },
            preview: 'light',
            cssVars: `
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --border-primary: #e2e8f0;
  --accent-primary: #305EFF;
}`
        },
        {
            name: 'Dark Theme',
            description: 'Sleek dark theme that reduces eye strain in low-light conditions',
            icon: <Moon size={24} />,
            colors: {
                primary: '#305EFF',
                secondary: '#1e293b',
                background: '#0f172a',
                surface: '#334155',
                text: '#f1f5f9',
                border: '#334155'
            },
            preview: 'dark',
            cssVars: `
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --border-primary: #334155;
  --accent-primary: #305EFF;
}`
        },
        {
            name: 'System Theme',
            description: 'Automatically adapts to user\'s system preference',
            icon: <Monitor size={24} />,
            colors: {
                primary: '#305EFF',
                secondary: 'auto',
                background: 'auto',
                surface: 'auto',
                text: 'auto',
                border: 'auto'
            },
            preview: 'system',
            cssVars: `
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --text-primary: #f1f5f9;
    /* Dark theme variables */
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
    /* Light theme variables */
  }
}`
        }
    ];

 

    const copyToClipboard = (code: string, themeId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(themeId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

   

    return (
        <div className="themes-page">
            <div className="page-container">
                {/* Header */}
                <div className="page-header">
                    <FlexLayout direction="column" gap={4}>
                        <div>
                            <TextStyle as="h1" size='2xl'  alignment='start'>
                                Theme System
                            </TextStyle>
                            <TextStyle as="p" size='md' tone='subdued' alignment='start'>
                                Explore and customize themes for your Jiffy UI components. Switch between light and dark modes,
                                or create your own custom color palette to match your brand.
                            </TextStyle>
                        </div>
                        
                        <FlexLayout gap={3}>
                            <FlexLayoutItem>
                            <Button 
                                color="Primary" 
                                icon={theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                                onClick={toggleTheme}
                                alignIcon="Left"
                            >
                                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                            </Button>
                            </FlexLayoutItem>
                            <FlexLayoutItem>
                            <Link to="/pannel">
                                <Button variant="Secondary" icon={<EyeOff size={16} />} alignIcon="Left">
                                    View Components
                                </Button>
                            </Link>
                            </FlexLayoutItem>
                        </FlexLayout>
                    </FlexLayout>
                </div>

                {/* Default Themes */}
                <section className="theme-section">
                    <div className="section-header">
                        <TextStyle as="h2" type="XlHeading">
                            Default Themes
                        </TextStyle>
                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                            Built-in themes that work out of the box with all Jiffy UI components.
                        </TextStyle>
                    </div>

                    <Grid columns={{ lg: 3, md: 2, sm: 1 }} gap={{ lg: "24px" }}>
                        {themeVariants.map((themeVariant, index) => (
                            <Card key={index} variant="outlined" className="theme-card">
                                <FlexLayout direction="column" gap={4}>
                                    <div className="theme-header">
                                        <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                                            <div className="theme-icon">
                                                {themeVariant.icon}
                                            </div>
                                            <div>
                                                <TextStyle as="h3" type="LgHeading">
                                                    {themeVariant.name}
                                                </TextStyle>
                                                <TextStyle as="p" type="SmBody" textColor="Secondary">
                                                    {themeVariant.description}
                                                </TextStyle>
                                            </div>
                                        </FlexLayout>
                                    </div>

                                    <div className={`theme-preview theme-preview-${themeVariant.preview}`}>
                                        <div className="preview-content">
                                            <div className="preview-header">
                                                <div className="preview-title">Sample Interface</div>
                                                <div className="preview-controls">
                                                    <span className="control-dot"></span>
                                                    <span className="control-dot"></span>
                                                    <span className="control-dot"></span>
                                                </div>
                                            </div>
                                            <div className="preview-body">
                                                <div className="preview-sidebar">
                                                    <div className="sidebar-item active">Dashboard</div>
                                                    <div className="sidebar-item">Analytics</div>
                                                    <div className="sidebar-item">Settings</div>
                                                </div>
                                                <div className="preview-main">
                                                    <div className="main-card">
                                                        <div className="card-header">Welcome Back</div>
                                                        <div className="card-content">
                                                            <div className="content-line"></div>
                                                            <div className="content-line short"></div>
                                                        </div>
                                                        <div className="card-button"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="color-palette">
                                        <TextStyle as="span" type="SmBody" textColor="Secondary">
                                            Color Palette
                                        </TextStyle>
                                        <div className="palette-colors">
                                            {Object.entries(themeVariant.colors).map(([key, color]) => (
                                                color !== 'auto' && (
                                                    <div 
                                                        key={key}
                                                        className="color-swatch"
                                                        style={{ backgroundColor: color }}
                                                        title={`${key}: ${color}`}
                                                    />
                                                )
                                            ))}
                                        </div>
                                    </div>

                                    <div className="theme-code">
                                        <div className="code-header">
                                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                                CSS Variables
                                            </TextStyle>
                                            <Button
                                                variant="Tertiary"
                                                size="Small"
                                                icon={copiedCode === `theme-${index}` ? 
                                                    <span>✓</span> : <Copy size={14} />}
                                                onClick={() => copyToClipboard(themeVariant.cssVars, `theme-${index}`)}
                                            >
                                                {copiedCode === `theme-${index}` ? 'Copied!' : 'Copy'}
                                            </Button>
                                        </div>
                                        <pre className="code-block">
                                            <code>{themeVariant.cssVars}</code>
                                        </pre>
                                    </div>
                                </FlexLayout>
                            </Card>
                        ))}
                    </Grid>
                </section>

                {/* Call to Action */}
                <div className="themes-cta">
                    <Card variant="outlined" className="cta-card">
                        <FlexLayout direction="column" gap={4} blockAlign={{ lg: "center" }}>
                            <div className="cta-content">
                                <TextStyle as="h3" type="XlHeading">
                                    Ready to customize your theme?
                                </TextStyle>
                                <TextStyle as="p" type="MdBody" textColor="Secondary">
                                    Start building with Jiffy UI components and apply your custom theme 
                                    to create a unique user experience.
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

export default Themes;
