import React, { useState } from 'react';
import { TextStyle, Button, Card, FlexLayout, Grid, FlexLayoutItem } from 'jiffy-ui';
import { ArrowRight, Copy, ExternalLink, Sun, Moon, Monitor, Download, Eye, EyeOff } from 'jiffy-icons';
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

    const customThemes = [
        {
            name: 'Ocean',
            description: 'Calming blue tones inspired by the ocean',
            colors: {
                primary: '#0ea5e9',
                secondary: '#f0f9ff',
                background: '#ffffff',
                surface: '#e0f2fe',
                accent: '#0284c7'
            },
            cssVars: `
:root {
  --accent-primary: #0ea5e9;
  --bg-secondary: #f0f9ff;
  --bg-tertiary: #e0f2fe;
  --border-primary: #bae6fd;
}`
        },
        {
            name: 'Forest',
            description: 'Natural green palette for eco-friendly applications',
            colors: {
                primary: '#10b981',
                secondary: '#f0fdf4',
                background: '#ffffff',
                surface: '#dcfce7',
                accent: '#059669'
            },
            cssVars: `
:root {
  --accent-primary: #10b981;
  --bg-secondary: #f0fdf4;
  --bg-tertiary: #dcfce7;
  --border-primary: #bbf7d0;
}`
        },
        {
            name: 'Sunset',
            description: 'Warm orange and red tones for energetic interfaces',
            colors: {
                primary: '#f59e0b',
                secondary: '#fffbeb',
                background: '#ffffff',
                surface: '#fef3c7',
                accent: '#d97706'
            },
            cssVars: `
:root {
  --accent-primary: #f59e0b;
  --bg-secondary: #fffbeb;
  --bg-tertiary: #fef3c7;
  --border-primary: #fed7aa;
}`
        },
        {
            name: 'Purple Rain',
            description: 'Rich purple hues for creative and artistic applications',
            colors: {
                primary: '#8b5cf6',
                secondary: '#faf5ff',
                background: '#ffffff',
                surface: '#ede9fe',
                accent: '#7c3aed'
            },
            cssVars: `
:root {
  --accent-primary: #8b5cf6;
  --bg-secondary: #faf5ff;
  --bg-tertiary: #ede9fe;
  --border-primary: #ddd6fe;
}`
        }
    ];

    const copyToClipboard = (code: string, themeId: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(themeId);
        setTimeout(() => setCopiedCode(''), 2000);
    };

    const downloadTheme = (themeName: string, cssVars: string) => {
        const themeCSS = `/* ${themeName} Theme for Jiffy UI */
${cssVars}

/* Apply theme to components */
.jiffy-ui-theme {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-primary);
}

/* Button theme */
.jiffy-ui-button {
  background-color: var(--accent-primary);
  color: white;
}

/* Card theme */
.jiffy-ui-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-primary);
}`;

        const blob = new Blob([themeCSS], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${themeName.toLowerCase().replace(/\s+/g, '-')}-theme.css`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
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

                {/* Custom Themes */}
                {/* <section className="theme-section">
                    <div className="section-header">
                        <TextStyle as="h2" type="XlHeading">
                            Custom Themes
                        </TextStyle>
                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                            Pre-designed color schemes you can use to create unique branded experiences.
                        </TextStyle>
                    </div>

                    <Grid columns={{ lg: 2, md: 1 }} gap={{ lg: "24px" }}>
                        {customThemes.map((customTheme, index) => (
                            <Card key={index} variant="outlined" className="custom-theme-card">
                                <FlexLayout direction="column" gap={4}>
                                    <div className="theme-header">
                                        <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                                            <div>
                                                <TextStyle as="h3" type="LgHeading">
                                                    {customTheme.name}
                                                </TextStyle>
                                                <TextStyle as="p" type="SmBody" textColor="Secondary">
                                                    {customTheme.description}
                                                </TextStyle>
                                            </div>
                                            <div className="theme-actions">
                                                <Button
                                                    variant="Tertiary"
                                                    size="Small"
                                                    icon={<Eye size={14} />}
                                                >
                                                    Preview
                                                </Button>
                                                <Button
                                                    variant="Tertiary"
                                                    size="Small"
                                                    icon={<Download size={14} />}
                                                    onClick={() => downloadTheme(customTheme.name, customTheme.cssVars)}
                                                >
                                                    Download
                                                </Button>
                                            </div>
                                        </FlexLayout>
                                    </div>

                                    <div className="color-palette">
                                        <div className="palette-colors large">
                                            {Object.entries(customTheme.colors).map(([key, color]) => (
                                                <div 
                                                    key={key}
                                                    className="color-swatch large"
                                                    style={{ backgroundColor: color }}
                                                >
                                                    <div className="color-info">
                                                        <span className="color-name">{key}</span>
                                                        <span className="color-value">{color}</span>
                                                    </div>
                                                </div>
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
                                                icon={copiedCode === `custom-${index}` ? 
                                                    <span>✓</span> : <Copy size={14} />}
                                                onClick={() => copyToClipboard(customTheme.cssVars, `custom-${index}`)}
                                            >
                                                {copiedCode === `custom-${index}` ? 'Copied!' : 'Copy'}
                                            </Button>
                                        </div>
                                        <pre className="code-block">
                                            <code>{customTheme.cssVars}</code>
                                        </pre>
                                    </div>
                                </FlexLayout>
                            </Card>
                        ))}
                    </Grid>
                </section> */}

                {/* Implementation Guide */}
                {/* <section className="implementation-section">
                    <Card variant="outlined" className="implementation-card">
                        <FlexLayout direction="column" gap={4}>
                            <div className="section-header">
                                <FlexLayout gap={3} blockAlign={{ lg: "center" }}>
                                    <div className="implementation-icon">
                                        Palette
                                    </div>
                                    <div>
                                        <TextStyle as="h3" type="XlHeading">
                                            Implementation Guide
                                        </TextStyle>
                                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                                            Learn how to implement and customize themes in your application.
                                        </TextStyle>
                                    </div>
                                </FlexLayout>
                            </div>

                            <Grid columns={{ lg: 2, md: 1 }} gap={{ lg: "32px" }}>
                                <div className="guide-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        1. Add CSS Variables
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Copy the CSS variables to your main stylesheet or component styles.
                                    </TextStyle>
                                    <pre className="code-block small">
                                        <code>{`:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}`}</code>
                                    </pre>
                                </div>

                                <div className="guide-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        2. Apply to Components
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Use the CSS variables in your component styles for automatic theming.
                                    </TextStyle>
                                    <pre className="code-block small">
                                        <code>{`.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}`}</code>
                                    </pre>
                                </div>

                                <div className="guide-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        3. Theme Switching
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Implement theme switching by changing the data-theme attribute.
                                    </TextStyle>
                                    <pre className="code-block small">
                                        <code>{`document.documentElement
  .setAttribute('data-theme', 'dark');`}</code>
                                    </pre>
                                </div>

                                <div className="guide-section">
                                    <TextStyle as="h4" type="MdHeading">
                                        4. Custom Colors
                                    </TextStyle>
                                    <TextStyle as="p" type="MdBody" textColor="Secondary">
                                        Override specific variables to create your own branded theme.
                                    </TextStyle>
                                    <pre className="code-block small">
                                        <code>{`:root {
  --accent-primary: #your-brand-color;
  --bg-primary: #your-bg-color;
}`}</code>
                                    </pre>
                                </div>
                            </Grid>
                        </FlexLayout>
                    </Card>
                </section> */}

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
